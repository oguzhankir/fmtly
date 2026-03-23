/** Curated fragments inspired by common gitignore templates (e.g. gitignore.io); merged deterministically in-engine. */
export const GITIGNORE_TEMPLATE_KEYS = [
	'node',
	'python',
	'rust',
	'go',
	'java',
	'kotlin',
	'ruby',
	'php',
	'nextjs',
	'nuxt',
	'docker',
	'terraform',
	'vscode',
	'jetbrains',
	'vim',
	'macos',
	'windows',
	'linux',
	'visualstudio',
	'emacs'
] as const;

export type GitignoreTemplateKey = (typeof GITIGNORE_TEMPLATE_KEYS)[number];

export const GITIGNORE_TEMPLATES: Record<GitignoreTemplateKey, string> = {
	node: `# Dependencies
node_modules/

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build
dist/
build/
.next/
out/

# Env
.env
.env.*
!.env.example

# Caches
.cache/
.parcel-cache/
.turbo/
`,
	python: `# Bytecode
__pycache__/
*.py[cod]
*$py.class
.Python
*.so

# Virtual envs
.venv/
venv/
ENV/

# Packaging
*.egg-info/
dist/
build/

# Test / coverage
.pytest_cache/
.coverage
htmlcov/
.mypy_cache/
`,
	rust: `# Cargo
/target/
**/*.rs.bk
Cargo.lock

# IDE
.idea/
`,
	go: `# Binaries
*.exe
*.exe~
*.dll
*.so
*.dylib
*.test
*.out
/vendor/

# Go workspace
go.work
`,
	java: `# Gradle
.gradle/
build/

# Maven
target/

# IDE
.idea/
*.iml
`,
	kotlin: `# Gradle / Kotlin
.gradle/
build/
out/

# IDE
.idea/
`,
	ruby: `# Bundler
/vendor/bundle/

# Logs
*.log

# Test
coverage/
`,
	php: `# Composer
/vendor/

# Laravel
/storage/*.key
.env
`,
	nextjs: `# Next.js
.next/
out/

# Vercel
.vercel
`,
	nuxt: `# Nuxt
.nuxt/
.output/
dist/

# Env
.env
`,
	docker: `# Local overrides
docker-compose.override.yml
`,
	terraform: `# Terraform
.terraform/
*.tfstate
*.tfstate.*
.terraform.lock.hcl
crash.log
`,
	vscode: `.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
`,
	jetbrains: `.idea/
*.iml
*.ipr
*.iws
out/
`,
	vim: `*.swp
*.swo
*~
`,
	macos: `.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk
`,
	windows: `Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BIN/
*.cab
*.msi
*.msix
*.msm
*.msp
*.lnk
`,
	linux: `*~
.fuse_hidden*
.directory
.Trash-*
.nfs*
`,
	visualstudio: `.vs/
*.user
*.userosscache
*.sln.docstates
[Dd]ebug/
[Rr]elease/
x64/
[Bb]in/
[Oo]bj/
[Ll]og/
`,
	emacs: `*~
\#*\#
/.emacs.desktop
/.emacs.desktop.lock
*.elc
auto-save-list
tramp
.\#*
`
};
