import type { ExamplePage } from './index';

export const yamlExamples: ExamplePage[] = [
	{
		slug: 'docker-compose-yaml',
		title: 'docker-compose.yaml',
		description: 'A standard Docker Compose file defining a web app and a database service.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `version: "3.9"\nservices:\n  web:\n    build: .\n    ports:\n      - "8000:8000"\n    environment:\n      - NODE_ENV=production\n  db:\n    image: postgres:15\n    environment:\n      - POSTGRES_PASSWORD=secret`,
		explanation:
			'Docker Compose uses YAML to define multi-container applications. It specifies images, ports, and environment variables.',
		useCases: [
			'Orchestrating local development environments',
			'Defining production service stacks',
			'Mapping container ports and volumes'
		],
		relatedTools: []
	},
	{
		slug: 'kubernetes-deployment-yaml',
		title: 'Kubernetes Deployment',
		description: 'A Kubernetes Deployment manifest creating replicas of a pod.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80`,
		explanation:
			'Kubernetes uses YAML to declaratively manage cluster resources like Deployments, Services, and ConfigMaps.',
		useCases: [
			'Deploying applications to a cluster',
			'Scaling pod replicas',
			'Defining container specifications'
		],
		relatedTools: []
	},
	{
		slug: 'github-actions-workflow-yaml',
		title: 'GitHub Actions Workflow',
		description: 'A CI workflow defining build and test steps on push.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Run tests\n      run: npm test`,
		explanation:
			'GitHub Actions workflows are written in YAML. They define event triggers and sequential jobs to run.',
		useCases: ['Continuous integration testing', 'Automated deployments', 'Code quality checks'],
		relatedTools: []
	},
	{
		slug: 'helm-values-yaml',
		title: 'Helm values.yaml',
		description: 'A configuration file overriding default Helm chart values.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `replicaCount: 2\nimage:\n  repository: my-app\n  tag: "1.2.3"\n  pullPolicy: IfNotPresent\nservice:\n  type: ClusterIP\n  port: 80`,
		explanation:
			'Helm uses values.yaml to provide customizable parameters for Kubernetes chart templates.',
		useCases: [
			'Configuring application deployments',
			'Setting environment-specific variables',
			'Tuning resource limits'
		],
		relatedTools: []
	},
	{
		slug: 'ansible-playbook-yaml',
		title: 'Ansible Playbook',
		description: 'An Ansible playbook automating server provisioning.',
		toolUrl: '/yaml/validator',
		toolName: 'YAML Validator',
		format: 'yaml',
		content: `- name: Install Nginx\n  hosts: webservers\n  become: yes\n  tasks:\n    - name: Ensure nginx is at the latest version\n      apt:\n        name: nginx\n        state: latest\n    - name: Ensure nginx is running\n      service:\n        name: nginx\n        state: started`,
		explanation:
			'Ansible playbooks describe IT automation rules in YAML, mapping hosts to required states and tasks.',
		useCases: [
			'Provisioning infrastructure',
			'Managing configurations across servers',
			'Automating deployment steps'
		],
		relatedTools: []
	},
	{
		slug: 'openapi-petstore-yaml',
		title: 'OpenAPI Spec (YAML)',
		description: 'A minimal OpenAPI 3.0 API definition in YAML format.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `openapi: 3.0.0\ninfo:\n  title: Petstore API\n  version: 1.0.0\npaths:\n  /pets:\n    get:\n      summary: List pets\n      responses:\n        '200':\n          description: A list of pets`,
		explanation:
			'Developers frequently prefer writing OpenAPI specifications in YAML over JSON due to its readability and support for comments.',
		useCases: ['Designing REST APIs', 'Generating documentation', 'Creating API stubs'],
		relatedTools: []
	},
	{
		slug: 'jest-config-yaml',
		title: 'jest.config.yaml',
		description: 'Jest testing framework configuration.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `preset: ts-jest\ntestEnvironment: node\ncollectCoverage: true\ncoverageDirectory: coverage\nmoduleNameMapper:\n  "^@/(.*)$": "<rootDir>/src/$1"`,
		explanation:
			'Jest configuration can be defined in YAML, controlling test finding, coverage reporting, and module mapping.',
		useCases: [
			'Configuring unit testing',
			'Setting up coverage reports',
			'Mapping absolute path imports'
		],
		relatedTools: []
	},
	{
		slug: 'gitlab-ci-yaml',
		title: '.gitlab-ci.yml',
		description: 'GitLab CI/CD pipeline definition.',
		toolUrl: '/yaml/validator',
		toolName: 'YAML Validator',
		format: 'yaml',
		content: `stages:\n  - build\n  - test\n\nbuild_job:\n  stage: build\n  script:\n    - echo "Building project"\n\ntest_job:\n  stage: test\n  script:\n    - echo "Running tests"`,
		explanation:
			'GitLab uses a `.gitlab-ci.yml` file in the root of the repository to define CI/CD pipeline stages and jobs.',
		useCases: ['Automating builds', 'Running unit tests', 'Deploying applications to staging'],
		relatedTools: []
	},
	{
		slug: 'travis-yml',
		title: '.travis.yml',
		description: 'Travis CI configuration file.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `language: node_js\nnode_js:\n  - "18"\n  - "20"\nscript:\n  - npm run lint\n  - npm test`,
		explanation:
			'Travis CI reads this YAML file to know what environment to spin up and what scripts to execute for testing.',
		useCases: [
			'Testing against multiple language versions',
			'Running linting suites',
			'Executing test commands'
		],
		relatedTools: []
	},
	{
		slug: 'circleci-config-yaml',
		title: 'CircleCI config.yml',
		description: 'CircleCI pipeline configuration file.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `version: 2.1\njobs:\n  build:\n    docker:\n      - image: cimg/node:18.0\n    steps:\n      - checkout\n      - run: npm install\n      - run: npm test`,
		explanation:
			'CircleCI requires a `.circleci/config.yml` file to parse and run CI/CD workflows, defining execution environments and steps.',
		useCases: ['Defining Docker-based CI tasks', 'Dependency caching', 'Parallel job execution'],
		relatedTools: []
	},
	{
		slug: 'cloudformation-yaml',
		title: 'AWS CloudFormation (YAML)',
		description: 'AWS infrastructure as code template.',
		toolUrl: '/yaml/validator',
		toolName: 'YAML Validator',
		format: 'yaml',
		content: `AWSTemplateFormatVersion: '2010-09-09'\nResources:\n  S3Bucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      AccessControl: Private`,
		explanation:
			'AWS CloudFormation allows you to define cloud infrastructure declaratively using YAML templates instead of JSON.',
		useCases: [
			'Provisioning AWS resources',
			'Managing infrastructure as code',
			'Sharing architecture templates'
		],
		relatedTools: []
	},
	{
		slug: 'flutter-pubspec-yaml',
		title: 'pubspec.yaml',
		description: 'Flutter and Dart package manager manifest.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `name: my_app\ndescription: A new Flutter project.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ">=2.17.0 <3.0.0"\n\ndependencies:\n  flutter:\n    sdk: flutter\n  http: ^0.13.4`,
		explanation:
			'The pubspec.yaml file contains project metadata and dependency definitions for Dart and Flutter applications.',
		useCases: [
			'Declaring project dependencies',
			'Setting Dart SDK versions',
			'Defining app generic metadata'
		],
		relatedTools: []
	},
	{
		slug: 'ruby-gemfile-lock-yaml',
		title: 'Front Matter (Markdown)',
		description: 'YAML front matter block used in Markdown files.',
		toolUrl: '/yaml/validator',
		toolName: 'YAML Validator',
		format: 'yaml',
		content: `title: "My Blog Post"\ndate: 2024-05-15\ntags:\n  - tutorial\n  - yaml\nauthor: Jane Doe`,
		explanation:
			'Static site generators like Hugo and Jekyll use YAML front matter at the top of Markdown files to define page metadata.',
		useCases: [
			'Setting blog post titles and dates',
			'Categorizing content with tags',
			'Defining layout templates'
		],
		relatedTools: []
	},
	{
		slug: 'bitbucket-pipelines-yml',
		title: 'bitbucket-pipelines.yml',
		description: 'Bitbucket pipeline configuration.',
		toolUrl: '/yaml/formatter',
		toolName: 'YAML Formatter',
		format: 'yaml',
		content: `image: node:18\n\npipelines:\n  default:\n    - step:\n        name: Build and Test\n        script:\n          - npm install\n          - npm test`,
		explanation:
			'Bitbucket Pipelines uses YAML files to map repository branches to build, test, and deployment scripts.',
		useCases: [
			'Automating branch tests',
			'Deploying to staging servers',
			'Running static analysis security tools'
		],
		relatedTools: []
	},
	{
		slug: 'azure-pipelines-yml',
		title: 'azure-pipelines.yml',
		description: 'Azure DevOps CI/CD pipeline configuration.',
		toolUrl: '/yaml/validator',
		toolName: 'YAML Validator',
		format: 'yaml',
		content: `trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n- script: echo Hello, world!\n  displayName: 'Run a one-line script'`,
		explanation:
			'Azure Pipelines rely on YAML to define continuous integration triggers, agent pools, and sequential deployment steps.',
		useCases: [
			'Triggering builds on main branch',
			'Selecting VM images for agents',
			'Executing custom bash scripts'
		],
		relatedTools: []
	}
];
