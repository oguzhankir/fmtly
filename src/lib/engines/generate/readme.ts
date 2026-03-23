export type ReadmeTemplateFields = {
	title: string;
	description: string;
	install: string;
	usage: string;
	license: string;
	includeBadges: boolean;
	repoUser: string;
	repoName: string;
};

export function buildReadmeMarkdown(fields: ReadmeTemplateFields): string {
	const lines: string[] = [];
	const title = fields.title.trim() || 'Project';
	lines.push(`# ${title}`);
	lines.push('');

	if (fields.includeBadges && fields.repoUser.trim() && fields.repoName.trim()) {
		const u = encodeURIComponent(fields.repoUser.trim());
		const r = encodeURIComponent(fields.repoName.trim());
		lines.push(
			`![CI](https://img.shields.io/github/actions/workflow/status/${u}/${r}/ci.yml?label=build)`,
			`![License](https://img.shields.io/badge/license-${encodeURIComponent(fields.license.trim() || 'MIT')}-blue)`,
			''
		);
	}

	if (fields.description.trim()) {
		lines.push(fields.description.trim());
		lines.push('');
	}

	lines.push('## Installation');
	lines.push('');
	lines.push(fields.install.trim() || '```bash\nnpm install\n```');
	lines.push('');

	lines.push('## Usage');
	lines.push('');
	lines.push(fields.usage.trim() || 'Describe how to run or import your project.');
	lines.push('');

	lines.push('## License');
	lines.push('');
	lines.push(fields.license.trim() || 'MIT');

	return lines.join('\n');
}
