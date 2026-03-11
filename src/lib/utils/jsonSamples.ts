export interface JsonSample {
	id: string;
	label: string;
	value: string;
}

export const jsonSamples: JsonSample[] = [
	{
		id: 'tool-sample',
		label: 'Tool sample',
		value: ''
	},
	{
		id: 'package-json',
		label: 'package.json',
		value: `{
  "name": "fmtly",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "test": "vitest run"
  },
  "dependencies": {
    "svelte": "^5.0.0",
    "typescript": "~5.6.0"
  }
}`
	},
	{
		id: 'github-api',
		label: 'GitHub API user',
		value: `{
  "login": "fmtly",
  "id": 123456,
  "type": "Organization",
  "site_admin": false,
  "public_repos": 48,
  "followers": 1240,
  "created_at": "2024-01-18T12:30:00Z",
  "plan": {
    "name": "team",
    "space": 976562499,
    "private_repos": 100
  }
}`
	},
	{
		id: 'openapi',
		label: 'OpenAPI spec (Petstore)',
		value: `{
  "openapi": "3.1.0",
  "info": {
    "title": "Swagger Petstore",
    "version": "1.0.0"
  },
  "paths": {
    "/pet": {
      "get": {
        "summary": "Find pet by ID",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}`
	},
	{
		id: 'geojson',
		label: 'GeoJSON feature collection',
		value: `{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Istanbul"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [28.9784, 41.0082]
      }
    }
  ]
}`
	},
	{
		id: 'analytics',
		label: 'Census data (nested arrays)',
		value: `{
  "regions": [
    {
      "name": "North",
      "population": [
        { "year": 2022, "count": 1245000 },
        { "year": 2023, "count": 1261100 }
      ]
    },
    {
      "name": "South",
      "population": [
        { "year": 2022, "count": 980000 },
        { "year": 2023, "count": 991400 }
      ]
    }
  ]
}`
	},
	{
		id: 'stripe-webhook',
		label: 'Stripe webhook',
		value: `{
  "id": "evt_1Q0PS1H8dsf9",
  "object": "event",
  "api_version": "2024-06-20",
  "created": 1725569165,
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "id": "cs_test_a1b2c3",
      "object": "checkout.session",
      "amount_total": 4900,
      "currency": "usd",
      "customer_email": "ada@example.com",
      "payment_status": "paid"
    }
  }
}`
	},
	{
		id: 'jwt-payload',
		label: 'JWT payload',
		value: `{
  "iss": "https://fmtly.dev",
  "sub": "user_42",
  "aud": ["web", "mobile"],
  "iat": 1710000000,
  "exp": 1710003600,
  "scope": ["json:read", "json:write"],
  "profile": {
    "name": "Ada Lovelace",
    "role": "admin"
  }
}`
	},
	{
		id: 'docker-inspect',
		label: 'Docker inspect',
		value: `{
  "Id": "sha256:2e863c44",
  "RepoTags": ["fmtly/web:latest"],
  "Config": {
    "Env": ["NODE_ENV=production", "PORT=8080"],
    "Cmd": ["pnpm", "start"]
  },
  "NetworkSettings": {
    "Ports": {
      "8080/tcp": [{ "HostIp": "0.0.0.0", "HostPort": "8080" }]
    }
  }
}`
	}
];
