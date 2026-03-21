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
	}
];

const categoryMetaMap = new Map<string, CategoryMeta>(categoryMetaList.map((c) => [c.slug, c]));

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
	return categoryMetaMap.get(slug);
}

export function getAllCategoryMeta(): CategoryMeta[] {
	return categoryMetaList;
}
