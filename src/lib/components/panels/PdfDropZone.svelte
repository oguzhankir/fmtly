<script lang="ts">
    import { FileUp } from "lucide-svelte";

    type Props = {
        accept?: string;
        multiple?: boolean;
        onfiles: (files: globalThis.File[]) => void;
        label?: string;
    };

    let {
        accept = "application/pdf",
        multiple = false,
        onfiles,
        label = "Drop PDF here or click to select",
    }: Props = $props();

    let dragging = $state(false);
    let fileInputRef: HTMLInputElement | undefined = $state(undefined);

    function handleDrop(e: DragEvent) {
        e.preventDefault();
        dragging = false;
        const files = Array.from(e.dataTransfer?.files ?? []);
        const valid = files.filter(
            (f) => f.type === "application/pdf" || f.name.endsWith(".pdf"),
        );
        if (valid.length) onfiles(multiple ? valid : [valid[0]]);
    }

    function handleInput(e: Event) {
        const input = e.target as HTMLInputElement;
        const files = Array.from(input.files ?? []);
        if (files.length) onfiles(multiple ? files : [files[0]]);
        input.value = "";
    }

    function handleDragOver(e: DragEvent) {
        e.preventDefault();
        dragging = true;
    }
</script>

<div
    class="drop-zone {dragging ? 'dragging' : ''}"
    role="button"
    tabindex="0"
    ondrop={handleDrop}
    ondragover={handleDragOver}
    ondragleave={() => (dragging = false)}
    onclick={() => fileInputRef?.click()}
    onkeydown={(e) => {
        if (e.key === "Enter" || e.key === " ") fileInputRef?.click();
    }}
>
    <input
        bind:this={fileInputRef}
        type="file"
        {accept}
        {multiple}
        oninput={handleInput}
        class="hidden"
    />
    <div class="drop-content">
        <FileUp size={40} strokeWidth={1.5} />
        <p class="drop-label">{label}</p>
        <p class="drop-hint">
            {multiple ? "Select one or more PDF files" : "PDF files only"}
        </p>
    </div>
</div>

<style>
    .drop-zone {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-12) var(--space-6);
        cursor: pointer;
        transition:
            border-color 0.2s,
            background 0.2s;
        background: var(--bg-base);
    }
    .drop-zone:hover,
    .drop-zone.dragging {
        border-color: var(--color-primary);
        background: color-mix(in srgb, var(--color-primary) 4%, var(--bg-base));
    }
    .drop-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-3);
        color: var(--text-tertiary);
    }
    .drop-label {
        font-size: var(--text-base);
        font-weight: var(--weight-medium);
        color: var(--text-secondary);
        margin: 0;
    }
    .drop-hint {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        margin: 0;
    }
    .hidden {
        display: none;
    }
</style>
