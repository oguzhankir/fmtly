import { describe, expect, it } from 'vitest';
import { analyzeText, convertTextCases } from '../../../src/lib/engines/text/text.engine.js';

describe('analyzeText', () => {
	it('counts words, characters, sentences, and paragraphs', () => {
		const input = 'Hello world.\n\nThis is a second paragraph with more words!';
		const result = analyzeText(input);

		expect(result.words).toBe(10);
		expect(result.characters).toBe(input.length);
		expect(result.charactersNoSpaces).toBe(input.replace(/\s/g, '').length);
		expect(result.sentences).toBe(2);
		expect(result.paragraphs).toBe(2);
	});

	it('handles empty input', () => {
		const result = analyzeText('');
		expect(result.words).toBe(0);
		expect(result.sentences).toBe(0);
		expect(result.paragraphs).toBe(0);
		expect(result.readingTimeMinutes).toBe(0);
	});

	it('computes reading time with minimum one minute for non-empty text', () => {
		const resultShort = analyzeText('one two three');
		expect(resultShort.readingTimeMinutes).toBe(1);

		const longText = Array.from({ length: 450 }, (_, i) => `word${i}`).join(' ');
		const resultLong = analyzeText(longText);
		expect(resultLong.words).toBe(450);
		expect(resultLong.readingTimeMinutes).toBe(3);
	});
});

describe('convertTextCases', () => {
	it('converts simple phrase to all target cases', () => {
		const result = convertTextCases('user profile API response');

		expect(result.camelCase).toBe('userProfileApiResponse');
		expect(result.pascalCase).toBe('UserProfileApiResponse');
		expect(result.snakeCase).toBe('user_profile_api_response');
		expect(result.kebabCase).toBe('user-profile-api-response');
		expect(result.constantCase).toBe('USER_PROFILE_API_RESPONSE');
		expect(result.titleCase).toBe('User Profile Api Response');
		expect(result.sentenceCase).toBe('User profile api response');
	});

	it('splits camelCase and mixed delimiters correctly', () => {
		const result = convertTextCases('myHTTPServer_v2 endpoint-name');

		expect(result.snakeCase).toBe('my_http_server_v2_endpoint_name');
		expect(result.kebabCase).toBe('my-http-server-v2-endpoint-name');
		expect(result.camelCase).toBe('myHttpServerV2EndpointName');
		expect(result.constantCase).toBe('MY_HTTP_SERVER_V2_ENDPOINT_NAME');
	});

	it('returns empty values for empty input', () => {
		const result = convertTextCases('   ');

		expect(result.camelCase).toBe('');
		expect(result.pascalCase).toBe('');
		expect(result.snakeCase).toBe('');
		expect(result.kebabCase).toBe('');
		expect(result.constantCase).toBe('');
		expect(result.titleCase).toBe('');
		expect(result.sentenceCase).toBe('');
	});
});
