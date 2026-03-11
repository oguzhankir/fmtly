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
		label: 'OpenAPI fragment',
		value: `{
  "openapi": "3.1.0",
  "info": {
    "title": "fmtly API",
    "version": "1.0.0"
  },
  "paths": {
    "/tools": {
      "get": {
        "summary": "List tools",
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
		label: 'Analytics payload',
		value: `{
  "session": {
    "id": "sess_01JYV5Y0A",
    "startedAt": "2026-03-10T09:00:00Z",
    "user": {
      "id": "usr_42",
      "name": "Ada Lovelace",
      "plan": "pro"
    }
  },
  "events": [
    {
      "type": "tool_open",
      "tool": "json/formatter",
      "durationMs": 1420
    },
    {
      "type": "copy_output",
      "tool": "json/viewer",
      "durationMs": 220
    }
  ]
}`
	}
];
