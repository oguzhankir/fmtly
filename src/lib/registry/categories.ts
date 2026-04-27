export type CategoryMeta = {
	slug: string;
	displayName: string;
	description: string;
	primaryKeyword: string;
};

const categoryMetaList: CategoryMeta[] = [
	{
		slug: 'json',
		displayName: 'category.json.display_name',
		description: 'category.json.description',
		primaryKeyword: 'category.json.primary_keyword'
	},
	{
		slug: 'xml',
		displayName: 'category.xml.display_name',
		description: 'category.xml.description',
		primaryKeyword: 'category.xml.primary_keyword'
	},
	{
		slug: 'yaml',
		displayName: 'category.yaml.display_name',
		description: 'category.yaml.description',
		primaryKeyword: 'category.yaml.primary_keyword'
	},
	{
		slug: 'csv',
		displayName: 'category.csv.display_name',
		description: 'category.csv.description',
		primaryKeyword: 'category.csv.primary_keyword'
	},
	{
		slug: 'toml',
		displayName: 'category.toml.display_name',
		description: 'category.toml.description',
		primaryKeyword: 'category.toml.primary_keyword'
	},
	{
		slug: 'text',
		displayName: 'category.text.display_name',
		description: 'category.text.description',
		primaryKeyword: 'category.text.primary_keyword'
	},
	{
		slug: 'encode',
		displayName: 'category.encode.display_name',
		description: 'category.encode.description',
		primaryKeyword: 'category.encode.primary_keyword'
	},
	{
		slug: 'qr',
		displayName: 'category.qr.display_name',
		description: 'category.qr.description',
		primaryKeyword: 'category.qr.primary_keyword'
	},
	{
		slug: 'crypto',
		displayName: 'category.crypto.display_name',
		description: 'category.crypto.description',
		primaryKeyword: 'category.crypto.primary_keyword'
	},
	{
		slug: 'ai',
		displayName: 'category.ai.display_name',
		description: 'category.ai.description',
		primaryKeyword: 'category.ai.primary_keyword'
	},
	{
		slug: 'generate',
		displayName: 'category.generate.display_name',
		description: 'category.generate.description',
		primaryKeyword: 'category.generate.primary_keyword'
	},
	{
		slug: 'pdf',
		displayName: 'category.pdf.display_name',
		description: 'category.pdf.description',
		primaryKeyword: 'category.pdf.primary_keyword'
	},
	{
		slug: 'image',
		displayName: 'category.image.display_name',
		description: 'category.image.description',
		primaryKeyword: 'category.image.primary_keyword'
	}
];

const categoryMetaMap = new Map<string, CategoryMeta>(categoryMetaList.map((c) => [c.slug, c]));

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
	return categoryMetaMap.get(slug);
}

export function getAllCategoryMeta(): CategoryMeta[] {
	return categoryMetaList;
}
