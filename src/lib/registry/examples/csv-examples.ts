import type { ExamplePage } from './index';

export const csvExamples: ExamplePage[] = [
	{
		slug: 'products-catalog-csv',
		title: 'E-commerce Products Catalog',
		description: 'A CSV representing a catalog of store products with prices and SKUs.',
		toolUrl: '/csv/formatter',
		toolName: 'CSV Formatter',
		format: 'csv',
		content: `id,sku,name,price,category,in_stock\n1,PROD-001,Wireless Mouse,29.99,Electronics,true\n2,PROD-002,Mechanical Keyboard,99.50,Electronics,false\n3,PROD-003,Coffee Mug,12.00,Home,true\n4,PROD-004,Desk Lamp,45.00,Home,true\n5,PROD-005,Notebook,5.50,Office,true`,
		explanation:
			'CSV (Comma-Separated Values) is universally used to store tabular data. Systems use the top row to define column headers.',
		useCases: [
			'Importing product catalogs into Shopify',
			'Exporting store inventory reports',
			'Bulk updating prices via spreadsheets'
		],
		relatedTools: []
	},
	{
		slug: 'user-data-csv',
		title: 'User Data Export',
		description: 'A system export of user profiles containing emails and timestamps.',
		toolUrl: '/csv/to-json',
		toolName: 'CSV to JSON Converter',
		format: 'csv',
		content: `user_id,email,first_name,last_name,signup_date,status\n101,alice@example.com,Alice,Smith,2024-01-10,active\n102,bob@example.com,Bob,Jones,2024-01-12,pending\n103,charlie@example.com,Charlie,Brown,2024-01-15,active\n104,dave@example.com,Dave,Wilson,2024-01-20,inactive`,
		explanation:
			'Databases frequently export user tables as CSV. Columns represent fields and rows represent individual user records.',
		useCases: [
			'Migrating user bases between platforms',
			'Analyzing user growth in Excel',
			'Running email marketing campaigns'
		],
		relatedTools: []
	},
	{
		slug: 'sales-report-csv',
		title: 'Monthly Sales Report',
		description: 'A daily aggregation of sales figures for a retail store.',
		toolUrl: '/csv/formatter',
		toolName: 'CSV Formatter',
		format: 'csv',
		content: `date,total_sales,orders_count,returns_count,net_revenue\n2024-02-01,1500.00,45,2,1450.00\n2024-02-02,2100.50,62,5,1980.50\n2024-02-03,1200.00,30,0,1200.00\n2024-02-04,3400.75,85,3,3250.75\n2024-02-05,1800.00,50,1,1750.00`,
		explanation:
			'Aggregated financial and analytics data is often bundled into CSVs to easily generate charts and pivot tables in spreadsheet software.',
		useCases: [
			'Financial analysis in Excel',
			'Generating revenue charts',
			'Auditing daily order counts'
		],
		relatedTools: []
	},
	{
		slug: 'machine-learning-dataset-csv',
		title: 'Machine Learning Dataset',
		description: 'A raw dataset of features for a classification model.',
		toolUrl: '/csv/validator',
		toolName: 'CSV Validator',
		format: 'csv',
		content: `sepal_length,sepal_width,petal_length,petal_width,species\n5.1,3.5,1.4,0.2,setosa\n4.9,3.0,1.4,0.2,setosa\n7.0,3.2,4.7,1.4,versicolor\n6.4,3.2,4.5,1.5,versicolor\n6.3,3.3,6.0,2.5,virginica`,
		explanation:
			'Data scientists exchange raw datasets in CSV format before loading them into dataframes for training machine learning models.',
		useCases: [
			'Training classification models',
			'Statistical data analysis in R or Pandas',
			'Visualizing feature correlations'
		],
		relatedTools: []
	},
	{
		slug: 'server-logs-csv',
		title: 'Server Access Logs',
		description: 'Parsed NGINX access logs compressed into a strict CSV format.',
		toolUrl: '/csv/to-json',
		toolName: 'CSV to JSON Converter',
		format: 'csv',
		content: `ip_address,timestamp,method,path,status,bytes_sent\n192.168.1.10,2024-03-01T10:00:00Z,GET,/index.html,200,1024\n10.0.0.5,2024-03-01T10:00:05Z,GET,/style.css,200,512\n172.16.0.4,2024-03-01T10:00:10Z,POST,/api/login,401,234\n192.168.1.10,2024-03-01T10:00:15Z,GET,/dashboard,200,2048`,
		explanation:
			'Log parsers often output structured CSV files indicating exactly what requests hit the server, allowing for easier audit processing and security analysis.',
		useCases: [
			'Analyzing website traffic',
			'Detecting unauthorized server access',
			'Aggregating bandwidth usage'
		],
		relatedTools: []
	},
	{
		slug: 'employee-records-csv',
		title: 'HR Employee Records',
		description: 'A mock HR database export indicating employee roles and salaries.',
		toolUrl: '/csv/formatter',
		toolName: 'CSV Formatter',
		format: 'csv',
		content: `emp_id,first_name,last_name,department,role,salary,start_date\nE1001,John,Doe,Engineering,Software Engineer,95000,2022-04-15\nE1002,Jane,Smith,Marketing,SEO Manager,82000,2021-11-01\nE1003,Emily,Chen,Engineering,DevOps Lead,115000,2020-08-20\nE1004,Michael,Brown,Sales,Sales Associate,60000,2023-01-10\nE1005,Sarah,Davis,HR,HR Coordinator,55000,2023-05-05`,
		explanation:
			'CSV is the lowest-common-denominator data format for moving human resources data between incompatible HR, payroll, and auditing systems.',
		useCases: [
			'Processing payroll batches',
			'Migrating data between HR systems',
			'Calculating average department salaries'
		],
		relatedTools: []
	},
	{
		slug: 'stock-quotes-csv',
		title: 'Stock Market Quotes',
		description: 'Daily stock market closing figures for a specific ticker.',
		toolUrl: '/csv/validator',
		toolName: 'CSV Validator',
		format: 'csv',
		content: `ticker,date,open,high,low,close,volume\nAAPL,2024-01-02,187.15,188.44,183.89,185.64,82488700\nAAPL,2024-01-03,184.22,185.88,183.43,184.25,58414500\nAAPL,2024-01-04,182.15,183.09,180.88,181.91,71983600\nAAPL,2024-01-05,181.99,182.76,180.17,181.18,62303300`,
		explanation:
			'Financial platforms provide historical pricing datasets in CSV files, allowing analysts to write automated trading bots or run technical analysis.',
		useCases: [
			'Backtesting trading algorithms',
			'Analyzing stock market trends',
			'Loading financial datasets into Pandas'
		],
		relatedTools: []
	},
	{
		slug: 'weather-data-csv',
		title: 'Historical Weather Data',
		description: 'Meteorological data containing daily temperature and precipitation.',
		toolUrl: '/csv/formatter',
		toolName: 'CSV Formatter',
		format: 'csv',
		content: `station_id,date,temp_high_c,temp_low_c,precipitation_mm,wind_speed_kmh\nSTA-001,2024-03-01,15.2,8.5,0.0,12.5\nSTA-001,2024-03-02,12.4,5.1,12.4,25.0\nSTA-001,2024-03-03,10.0,2.0,5.2,18.5\nSTA-001,2024-03-04,14.5,4.5,0.0,10.0`,
		explanation:
			'Environmental data is gathered by weather stations worldwide and exported in structured CSV formats for global climate analysis.',
		useCases: [
			'Analyzing climate change patterns',
			'Predicting crop yields',
			'Visualizing historical weather trends'
		],
		relatedTools: []
	},
	{
		slug: 'real-estate-listings-csv',
		title: 'Real Estate Listings',
		description: 'A data dump of property listings including price and square footage.',
		toolUrl: '/csv/to-json',
		toolName: 'CSV to JSON Converter',
		format: 'csv',
		content: `property_id,address,city,state,zip,price,beds,baths,sqft,type\n100,123 Maple St,Springfield,IL,62704,250000,3,2,1500,Single Family\n101,456 Oak Ave,Springfield,IL,62704,310000,4,3,2100,Single Family\n102,789 Pine Rd,Springfield,IL,62705,175000,2,1.5,1100,Townhouse\n103,321 Elm St,Springfield,IL,62704,215000,3,2,1400,Single Family`,
		explanation:
			'Real estate agencies share property data dumps locally and with indexing engines via flat CSV files containing location and price metadata.',
		useCases: [
			'Calculating average house prices per area',
			'Importing property listings into a CMS',
			'Analyzing housing market trends'
		],
		relatedTools: []
	},
	{
		slug: 'flight-routes-csv',
		title: 'Flight Routes Network',
		description: 'A directional graph dataset of commercial airline flight routes.',
		toolUrl: '/csv/formatter',
		toolName: 'CSV Formatter',
		format: 'csv',
		content: `airline,airline_id,source_airport,source_airport_id,dest_airport,dest_airport_id,codeshare,stops,equipment\n2B,410,AER,2965,KZN,2990,,0,CR2\n2B,410,ASF,2966,KZN,2990,,0,CR2\n2B,410,ASF,2966,MRV,2962,,0,CR2\n2B,410,CEK,2968,KZN,2990,,0,CR2\n2B,410,CEK,2968,OVB,4078,,0,CR2`,
		explanation:
			'Aviation databases like OpenFlights distribute vast amounts of route and network relationship data primarily using comma-separated value tables.',
		useCases: [
			'Mapping global airline networks',
			'Calculating shortest flight paths',
			'Analyzing airport hub connectivity'
		],
		relatedTools: []
	}
];
