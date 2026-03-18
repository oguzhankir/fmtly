<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		analyzeRegexTester,
		getRegexTesterFlagSupport,
		REGEX_TESTER_FLAG_ORDER,
		stringifyRegexTesterFlags,
		type RegexTesterError,
		type RegexTesterFlag,
		type RegexTesterFlags
	} from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	const DEFAULT_PATTERN =
		'(?<level>INFO|WARN|ERROR)\\s+\\[(?<service>[a-z-]+)\\]\\s+(?<message>.+)';
	const SAMPLE_TEXT = `INFO [auth-api] Login succeeded for user=42
WARN [payments] Retry scheduled for charge_id=ch_9
ERROR [auth-api] Invalid password for user=21
INFO [search] Results cached for query=regex tester`;

	const DEFAULT_FLAGS: RegexTesterFlags = {
		g: true,
		i: false,
		m: true,
		s: false,
		u: false,
		y: false,
		d: false
	};

	const FLAG_LABEL_KEYS: Record<RegexTesterFlag, string> = {
		g: 'ui.regex.flags.g.label',
		i: 'ui.regex.flags.i.label',
		m: 'ui.regex.flags.m.label',
		s: 'ui.regex.flags.s.label',
		u: 'ui.regex.flags.u.label',
		y: 'ui.regex.flags.y.label',
		d: 'ui.regex.flags.d.label'
	};

	const FLAG_DESCRIPTION_KEYS: Record<RegexTesterFlag, string> = {
		g: 'ui.regex.flags.g.description',
		i: 'ui.regex.flags.i.description',
		m: 'ui.regex.flags.m.description',
		s: 'ui.regex.flags.s.description',
		u: 'ui.regex.flags.u.description',
		y: 'ui.regex.flags.y.description',
		d: 'ui.regex.flags.d.description'
	};

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let regexPattern = $state(DEFAULT_PATTERN);
	let regexFlags = $state<RegexTesterFlags>({ ...DEFAULT_FLAGS });
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	const flagSupport = getRegexTesterFlagSupport();

	let flagString = $derived(stringifyRegexTesterFlags(regexFlags));
	let analysis = $derived(analyzeRegexTester(regexPattern, $input, flagString));
	let lineCount = $derived($input.length === 0 ? 0 : $input.split('\n').length);
	let flagOptions = $derived(
		REGEX_TESTER_FLAG_ORDER.map((flag) => ({
			flag,
			enabled: regexFlags[flag],
			supported: flagSupport[flag],
			labelKey: FLAG_LABEL_KEYS[flag],
			descriptionKey: FLAG_DESCRIPTION_KEYS[flag]
		}))
	);
	let statusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${lineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);
	let regexLiteral = $derived(`/${regexPattern.replaceAll('/', '\\/')}/${flagString}`);

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;

		if ($input.length === 0) {
			input.set(SAMPLE_TEXT);
		}
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	function handlePatternInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		regexPattern = target.value;
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleFlagToggle(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const flag = target.dataset.flag as RegexTesterFlag | undefined;
		if (!flag) return;
		if (!flagSupport[flag]) return;

		regexFlags = {
			...regexFlags,
			[flag]: !regexFlags[flag]
		};
	}

	function getFlagButtonClass(enabled: boolean): string {
		return enabled
			? 'border-[var(--color-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]'
			: 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]';
	}

	function loadSampleData(): void {
		regexPattern = DEFAULT_PATTERN;
		regexFlags = { ...DEFAULT_FLAGS };
		input.set(SAMPLE_TEXT);
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('category.text.display_name', 'Text') },
			'Clear the current text input?'
		);
		confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
		confirmModalOpen = true;
	}

	function doClearInput(): void {
		input.set('');
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function noop(): void {
		return;
	}

	async function copyRegexLiteral(): Promise<void> {
		if (!regexPattern) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(regexLiteral);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	async function copyMatchValue(event: MouseEvent): Promise<void> {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const rawMatchIndex = target.dataset.matchIndex;
		if (!rawMatchIndex) return;

		const matchIndex = Number(rawMatchIndex);
		if (!Number.isInteger(matchIndex)) return;

		const match = analysis.matches[matchIndex];
		if (!match) return;

		try {
			await navigator.clipboard.writeText(match.value);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function formatCoverage(value: number): string {
		return `${(value * 100).toFixed(1)}%`;
	}

	function formatDuration(milliseconds: number): string {
		return `${milliseconds.toFixed(2)} ms`;
	}

	function formatLocation(start: number, end: number): string {
		return `${start}-${end}`;
	}

	function getErrorMessage(error: RegexTesterError | null): string {
		if (!error) return '';

		switch (error.code) {
			case 'empty_pattern':
				return $t(
					'ui.regex.error.empty_pattern',
					'Enter a regular expression pattern to begin testing.'
				);
			case 'invalid_flag':
				return $t(
					'ui.regex.error.invalid_flag',
					{ flag: error.detail },
					'Invalid regex flag: {flag}'
				);
			case 'duplicate_flag':
				return $t(
					'ui.regex.error.duplicate_flag',
					{ flag: error.detail },
					'Duplicate regex flag: {flag}'
				);
			case 'unsupported_flag':
				return $t(
					'ui.regex.error.unsupported_flag',
					{ flag: error.detail },
					'Regex flag is not supported in this environment: {flag}'
				);
			case 'syntax_error':
				return $t(
					'ui.regex.error.syntax_error',
					{ detail: error.detail },
					'Pattern syntax error: {detail}'
				);
			default:
				return $t('ui.regex.error.syntax_error', 'Invalid regular expression pattern.');
		}
	}
</script>

<div class="flex h-full w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="text"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
		<div class="flex min-h-0 flex-col border-r border-[var(--border-default)] bg-[var(--bg-base)]">
			<div class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{statusLine}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={loadSampleData}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						{$t('ui.actions.sample', 'Sample')}
					</button>
					<button
						type="button"
						onclick={copyRegexLiteral}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={14} />
						{$t('ui.regex.copy_regex', 'Copy Regex')}
					</button>
					<button
						type="button"
						onclick={clearInputValue}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Eraser size={14} />
						{$t('ui.actions.clear', 'Clear')}
					</button>
				</div>
			</div>

			<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
				<div class="flex flex-col gap-[var(--space-3)]">
					<div class="flex flex-col gap-[var(--space-1)]">
						<label for="regex-pattern" class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
							{$t('ui.regex.pattern_label', 'Pattern')}
						</label>
						<input
							id="regex-pattern"
							type="text"
							value={regexPattern}
							oninput={handlePatternInput}
							spellcheck="false"
							class="h-10 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus:border-[var(--color-primary)]"
							placeholder={$t('ui.regex.pattern_placeholder', 'e.g. (?<name>\\w+)')}
						/>
					</div>

					<div class="flex flex-col gap-[var(--space-2)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
							{$t('ui.regex.flags_label', 'Flags')}
						</span>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							{#each flagOptions as option}
								<button
									type="button"
									data-flag={option.flag}
									onclick={handleFlagToggle}
									disabled={!option.supported}
									aria-pressed={option.enabled}
									title={$t(option.descriptionKey, option.flag)}
									class={`inline-flex h-8 min-w-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${getFlagButtonClass(option.enabled)}`}
								>
									{option.flag}
								</button>
							{/each}
						</div>
						<div class="flex flex-wrap gap-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{#each flagOptions as option}
								<span>{option.flag}: {$t(option.labelKey, option.flag)}</span>
							{/each}
						</div>
						{#if !analysis.hasGlobal}
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t('ui.regex.global_hint', 'Enable g to iterate all matches. Without g, only the first match is returned.')}
							</p>
						{/if}
					</div>
				</div>
			</div>

			<div class="flex min-h-0 flex-1 flex-col">
				<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.regex.test_text_label', 'Test Text')}
				</div>
				<textarea
					value={$input}
					oninput={handleTextInput}
					class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
					placeholder={$t('ui.regex.test_text_placeholder', 'Type or paste text to test your pattern...')}
					spellcheck="false"
				></textarea>
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="grid grid-cols-2 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] lg:grid-cols-5">
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.regex.stats.matches', 'Matches')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysis.totalMatches.toLocaleString()}</div>
				</div>
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.regex.stats.unique_matches', 'Unique')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysis.uniqueMatchCount.toLocaleString()}</div>
				</div>
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.regex.stats.lines_with_matches', 'Lines')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysis.linesWithMatches.toLocaleString()}</div>
				</div>
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.regex.stats.coverage', 'Coverage')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{formatCoverage(analysis.coverageRatio)}</div>
				</div>
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.regex.stats.duration', 'Runtime')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{formatDuration(analysis.durationMs)}</div>
				</div>
			</div>

			{#if !analysis.isValid}
				<div class="mx-[var(--space-3)] mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-danger)]">
					{getErrorMessage(analysis.error)}
				</div>
			{/if}

			<div class="grid min-h-0 flex-1 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]">
				<div class="flex min-h-0 flex-col border-b border-[var(--border-default)] xl:border-b-0">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
						<span>{$t('ui.regex.highlight_title', 'Live Highlight')}</span>
						{#if analysis.isPreviewTruncated}
							<span class="text-[var(--text-tertiary)]">
								{$t(
									'ui.regex.preview_truncated',
									{ limit: analysis.previewCharLimit.toLocaleString() },
									'Preview limited to {limit} characters'
								)}
							</span>
						{/if}
					</div>
					<div class="min-h-0 flex-1 overflow-y-auto p-[var(--space-3)]">
						{#if analysis.segments.length > 0}
							<pre class="whitespace-pre-wrap break-words font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">{#each analysis.segments as segment}<span class={segment.type === 'match' ? 'rounded-[var(--radius-xs)] border border-[var(--color-primary)] bg-[var(--bg-base)] px-[1px]' : ''}>{segment.value}</span>{/each}</pre>
						{:else}
							<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
								{$t('ui.regex.no_highlight', 'Matches will be highlighted here.')}
							</p>
						{/if}
					</div>
				</div>

				<div class="flex min-h-0 flex-col">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
						<span>{$t('ui.regex.matches_title', 'Matches')}</span>
						{#if analysis.isMatchLimitReached}
							<span class="text-[var(--text-tertiary)]">
								{$t('ui.regex.match_limit_reached', 'Match limit reached')}
							</span>
						{/if}
					</div>
					<div class="min-h-0 flex-1 overflow-y-auto p-[var(--space-3)]">
						{#if analysis.matches.length === 0}
							<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
								{$t('ui.regex.no_matches', 'No matches found.')}
							</p>
						{:else}
							<div class="flex flex-col gap-[var(--space-3)]">
								{#each analysis.matches as match}
									<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)]">
										<div class="mb-[var(--space-2)] flex items-center justify-between gap-[var(--space-2)]">
											<div class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">
												{$t('ui.regex.match_label', { index: match.index + 1 }, 'Match #{index}')}
												·
												{$t(
													'ui.regex.match_position',
													{ line: match.line, column: match.column },
													'Line {line}, Col {column}'
												)}
											</div>
											<button
												type="button"
												data-match-index={match.index}
												onclick={copyMatchValue}
												class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
											>
												<Copy size={12} />
												{$t('ui.actions.copy', 'Copy')}
											</button>
										</div>

										<div class="mb-[var(--space-2)]">
											<div class="mb-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
												{$t(
													'ui.regex.match_range',
													{ range: formatLocation(match.start, match.end) },
													'Range: {range}'
												)}
											</div>
											<pre class="whitespace-pre-wrap break-words rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]">{match.value}</pre>
										</div>

										<div class="grid grid-cols-1 gap-[var(--space-2)] lg:grid-cols-2">
											<div>
												<h3 class="mb-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
													{$t('ui.regex.capture_groups', 'Capture Groups')}
												</h3>
												{#if match.groups.length === 0}
													<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
														{$t('ui.regex.no_capture_groups', 'No capture groups')}
													</p>
												{:else}
													<ul class="flex flex-col gap-[var(--space-1)]">
														{#each match.groups as group}
															<li class="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
																<span class="font-[number:var(--weight-semibold)]">{$t('ui.regex.group_label', { index: group.index }, 'Group {index}')}: </span>
																<code class="font-[family-name:var(--font-mono)] text-[var(--text-primary)]">{group.value ?? $t('ui.regex.group_unmatched', 'No match')}</code>
															</li>
														{/each}
													</ul>
												{/if}
											</div>

											<div>
												<h3 class="mb-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
													{$t('ui.regex.named_capture_groups', 'Named Groups')}
												</h3>
												{#if match.namedGroups.length === 0}
													<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
														{$t('ui.regex.no_named_capture_groups', 'No named groups')}
													</p>
												{:else}
													<ul class="flex flex-col gap-[var(--space-1)]">
														{#each match.namedGroups as group}
															<li class="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
																<span class="font-[number:var(--weight-semibold)]">{group.name}: </span>
																<code class="font-[family-name:var(--font-mono)] text-[var(--text-primary)]">{group.value ?? $t('ui.regex.group_unmatched', 'No match')}</code>
															</li>
														{/each}
													</ul>
												{/if}
											</div>
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={noop}
/>
