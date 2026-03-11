import type { ExamplePage } from './index';

export const xmlExamples: ExamplePage[] = [
	{
		slug: 'maven-pom-xml',
		title: 'pom.xml (Maven)',
		description: 'A standard Maven Project Object Model configuration file.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.13.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>`,
		explanation:
			'Maven uses the pom.xml file to manage Java project builds, managing dependencies, plugins, and project metadata.',
		useCases: [
			'Declaring Java dependencies',
			'Configuring build plugins',
			'Managing project versions'
		],
		relatedTools: []
	},
	{
		slug: 'android-manifest-xml',
		title: 'AndroidManifest.xml',
		description: 'The core configuration file for an Android application.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.example.myapp">\n    <uses-permission android:name="android.permission.INTERNET" />\n    <application\n        android:allowBackup="true"\n        android:icon="@mipmap/ic_launcher"\n        android:label="@string/app_name">\n        <activity android:name=".MainActivity">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n        </activity>\n    </application>\n</manifest>`,
		explanation:
			'Android requires this XML file to describe essential app information to the build tools, OS, and Google Play.',
		useCases: [
			'Declaring requested permissions',
			'Registering app activities and services',
			'Setting app icons and themes'
		],
		relatedTools: []
	},
	{
		slug: 'sitemap-xml',
		title: 'sitemap.xml',
		description: 'A standard XML Sitemap for search engine indexing.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n   <url>\n      <loc>https://fmtly.dev/</loc>\n      <changefreq>weekly</changefreq>\n      <priority>1.0</priority>\n   </url>\n   <url>\n      <loc>https://fmtly.dev/json/formatter</loc>\n      <changefreq>monthly</changefreq>\n      <priority>0.8</priority>\n   </url>\n</urlset>`,
		explanation:
			'Sitemaps tell search engines like Google about the pages on your site, their relative importance, and update frequency.',
		useCases: [
			'Improving SEO crawl coverage',
			'Indicating page priority',
			'Helping search engines discover new content'
		],
		relatedTools: []
	},
	{
		slug: 'rss-feed-xml',
		title: 'RSS Feed (XML)',
		description: 'An RSS 2.0 feed containing blog or news syndication.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n  <channel>\n    <title>fmtly Blog</title>\n    <link>https://fmtly.dev/blog</link>\n    <description>Latest news from fmtly</description>\n    <item>\n      <title>New JSON Tools Available</title>\n      <link>https://fmtly.dev/blog/new-json-tools</link>\n      <description>We just released a new set of JSON formats.</description>\n      <pubDate>Mon, 01 Jan 2024 12:00:00 GMT</pubDate>\n    </item>\n  </channel>\n</rss>`,
		explanation:
			'RSS is a web feed format in XML used to publish frequently updated works, like blog entries and news headlines.',
		useCases: [
			'Syndicating blog content',
			'Allowing users to subscribe to updates',
			'Integrating with feed readers'
		],
		relatedTools: []
	},
	{
		slug: 'atom-feed-xml',
		title: 'Atom Feed (XML)',
		description: 'An Atom feed, a modern alternative to RSS for syndication.',
		toolUrl: '/xml/validator',
		toolName: 'XML Validator',
		format: 'xml',
		content: `<?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>fmtly Updates</title>\n  <link href="https://fmtly.dev/"/>\n  <updated>2024-01-01T12:00:00Z</updated>\n  <id>urn:uuid:12345678-1234-1234-1234-123456789abc</id>\n  <entry>\n    <title>XML Formatting Released</title>\n    <link href="https://fmtly.dev/blog/xml"/>\n    <id>urn:uuid:87654321-4321-4321-4321-cba987654321</id>\n    <updated>2024-01-01T12:00:00Z</updated>\n    <summary>Format XML efficiently.</summary>\n  </entry>\n</feed>`,
		explanation:
			'Atom is an XML-based web syndication format designed as a clearer, more robust alternative to RSS.',
		useCases: [
			'Distributing news and podcasts',
			'Standardized syndication',
			'Integrating with modern feed aggregators'
		],
		relatedTools: []
	},
	{
		slug: 'svg-example-xml',
		title: 'SVG Image (XML)',
		description: 'A Scalable Vector Graphics image defined in XML.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />\n  <rect width="20" height="20" x="40" y="40" fill="white" />\n</svg>`,
		explanation:
			'SVG images are just XML documents describing 2D vector graphics. They can be manipulated via CSS and JavaScript.',
		useCases: [
			'Rendering resolution-independent graphics',
			'Creating web-native icons',
			'Adding interactive graphics to HTML'
		],
		relatedTools: []
	},
	{
		slug: 'soap-envelope-xml',
		title: 'SOAP Envelope',
		description: 'A standard SOAP web service request payload.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" ?>\n<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">\n  <env:Header>\n    <m:Trans xmlns:m="http://example.org/transaction">\n      234\n    </m:Trans>\n  </env:Header>\n  <env:Body>\n    <m:GetPrice xmlns:m="http://example.org/inventory">\n      <m:Item>Apples</m:Item>\n    </m:GetPrice>\n  </env:Body>\n</env:Envelope>`,
		explanation:
			'SOAP relies entirely on XML to structure messages. Every message is packed inside a SOAP Envelope containing a Body and optional Header.',
		useCases: [
			'Communicating with legacy enterprise APIs',
			'Handling strict contract-based messaging',
			'Executing remote procedure calls'
		],
		relatedTools: []
	},
	{
		slug: 'junit-report-xml',
		title: 'JUnit Test Report',
		description: 'A JUnit XML output file from a test runner.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="UTF-8"?>\n<testsuites time="1.234">\n  <testsuite name="ExampleTests" tests="2" failures="1" time="1.234">\n    <testcase name="testSuccess" classname="ExampleTests" time="0.010" />\n    <testcase name="testFailure" classname="ExampleTests" time="0.100">\n      <failure message="Expected true but was false">AssertionError: Expected true</failure>\n    </testcase>\n  </testsuite>\n</testsuites>`,
		explanation:
			'CI/CD systems parse JUnit XML files to determine which tests passed or failed and to display test metrics.',
		useCases: [
			'Reporting test results to CI servers',
			'Aggregating test coverage metrics',
			'Generating automated test dashboards'
		],
		relatedTools: []
	},
	{
		slug: 'app-config-xml',
		title: 'App.config (.NET)',
		description: 'A standard configuration file for .NET Framework apps.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n  <appSettings>\n    <add key="Environment" value="Production" />\n    <add key="TimeoutMs" value="5000" />\n  </appSettings>\n  <connectionStrings>\n    <add name="DefaultDB"\n         connectionString="Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;" />\n  </connectionStrings>\n</configuration>`,
		explanation:
			'Older .NET applications heavily rely on XML configuration files like App.config to manage environment variables and database connections.',
		useCases: [
			'Storing database connection strings',
			'Setting environment-specific keys',
			'Configuring .NET runtime behaviors'
		],
		relatedTools: []
	},
	{
		slug: 'html-document-xml',
		title: 'XHTML Document',
		description: 'A strictly formatted HTML document following XML rules.',
		toolUrl: '/xml/formatter',
		toolName: 'XML Formatter',
		format: 'xml',
		content: `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n  <head>\n    <title>XHTML Example</title>\n  </head>\n  <body>\n    <h1>Strict XML Parsing</h1>\n    <p>Every tag must be <strong>properly closed</strong>.</p>\n    <br />\n  </body>\n</html>`,
		explanation:
			'XHTML applies strict XML formatting rules to HTML, ensuring tags are perfectly balanced, closed, and lowercase.',
		useCases: [
			'Guaranteeing document structure validity',
			'Parsing web pages with standard XML parsers',
			'Legacy web development'
		],
		relatedTools: []
	}
];
