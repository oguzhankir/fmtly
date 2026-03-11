export type XmlSample = {
	id: string;
	label: string;
	value: string;
};

export const xmlSamples: XmlSample[] = [
	{
		id: 'tool-sample',
		label: 'Tool sample',
		value: ''
	},
	{
		id: 'catalog',
		label: 'Book catalog',
		value: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1" available="true">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price currency="USD">10.99</price>
    <genres>
      <genre>Fiction</genre>
      <genre>Classic</genre>
    </genres>
  </book>
  <book id="2" available="false">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
    <price currency="USD">12.99</price>
    <genres>
      <genre>Fiction</genre>
      <genre>Classic</genre>
    </genres>
  </book>
  <book id="3" available="true">
    <title>1984</title>
    <author>George Orwell</author>
    <year>1949</year>
    <price currency="USD">9.99</price>
    <genres>
      <genre>Dystopian</genre>
      <genre>Science Fiction</genre>
    </genres>
  </book>
</catalog>`
	},
	{
		id: 'rss-feed',
		label: 'RSS 2.0 feed',
		value: `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>fmtly Dev Blog</title>
    <link>https://fmtly.dev/blog</link>
    <description>Developer tools, tips, and updates from fmtly</description>
    <language>en-us</language>
    <lastBuildDate>Mon, 10 Mar 2025 12:00:00 GMT</lastBuildDate>
    <atom:link href="https://fmtly.dev/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>Why every developer tool should be browser-only</title>
      <link>https://fmtly.dev/blog/browser-only</link>
      <description>Privacy by default, zero latency, and offline support. Here is why we built everything in the browser.</description>
      <pubDate>Mon, 10 Mar 2025 09:00:00 GMT</pubDate>
      <guid isPermaLink="true">https://fmtly.dev/blog/browser-only</guid>
    </item>
    <item>
      <title>Introducing XML XPath Query</title>
      <link>https://fmtly.dev/blog/xpath</link>
      <description>Test XPath 1.0 expressions directly in the browser with zero dependencies.</description>
      <pubDate>Sat, 01 Mar 2025 10:00:00 GMT</pubDate>
      <guid isPermaLink="true">https://fmtly.dev/blog/xpath</guid>
    </item>
  </channel>
</rss>`
	},
	{
		id: 'soap-envelope',
		label: 'SOAP envelope',
		value: `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Header>
    <AuthHeader xmlns="http://example.com/auth">
      <Username>api_user</Username>
      <Token>eyJhbGciOiJIUzI1NiJ9.example</Token>
    </AuthHeader>
  </soap:Header>
  <soap:Body>
    <GetOrderResponse xmlns="http://example.com/orders">
      <Order>
        <OrderId>ORD-20250310-001</OrderId>
        <Status>Shipped</Status>
        <Customer>
          <Name>Alice Johnson</Name>
          <Email>alice@example.com</Email>
        </Customer>
        <Items>
          <Item sku="WIDGET-001">
            <Name>Blue Widget</Name>
            <Quantity>2</Quantity>
            <UnitPrice>29.99</UnitPrice>
          </Item>
          <Item sku="GADGET-042">
            <Name>Smart Gadget</Name>
            <Quantity>1</Quantity>
            <UnitPrice>89.99</UnitPrice>
          </Item>
        </Items>
        <Total currency="USD">149.97</Total>
      </Order>
    </GetOrderResponse>
  </soap:Body>
</soap:Envelope>`
	},
	{
		id: 'config',
		label: 'Maven pom.xml',
		value: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
           http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>dev.fmtly</groupId>
  <artifactId>api-service</artifactId>
  <version>1.0.0</version>
  <packaging>jar</packaging>

  <properties>
    <java.version>21</java.version>
    <spring.version>3.2.3</spring.version>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>\${spring.version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <version>\${spring.version}</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>`
	},
	{
		id: 'svg',
		label: 'SVG graphic',
		value: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <title>fmtly logo mark</title>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="24" fill="url(#grad)"/>
  <rect x="40" y="60" width="120" height="12" rx="6" fill="white" opacity="0.9"/>
  <rect x="40" y="84" width="80" height="12" rx="6" fill="white" opacity="0.7"/>
  <rect x="40" y="108" width="100" height="12" rx="6" fill="white" opacity="0.5"/>
  <text x="40" y="160" font-family="monospace" font-size="28" font-weight="bold" fill="white">
    fmtly
  </text>
</svg>`
	}
];
