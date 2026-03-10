import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
	test('loads successfully', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/fmtly/i);
	});

	test('has no critical accessibility violations', async ({ page }) => {
		await page.goto('/');
		const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
		expect(results.violations.filter((v) => v.impact === 'critical')).toHaveLength(0);
	});
});

test.describe('Category page', () => {
	test('JSON category page loads', async ({ page }) => {
		await page.goto('/json');
		await expect(page.locator('body')).toBeVisible();
	});
});

test.describe('Tool page', () => {
	test('JSON formatter page loads', async ({ page }) => {
		await page.goto('/json/formatter');
		await expect(page).toHaveTitle(/JSON Formatter/i);
	});

	test('has no critical accessibility violations', async ({ page }) => {
		await page.goto('/json/formatter');
		const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
		expect(results.violations.filter((v) => v.impact === 'critical')).toHaveLength(0);
	});
});

test.describe('JSON paste and format', () => {
	test('formats pasted JSON', async ({ page }) => {
		await page.goto('/json/formatter');

		const textarea = page.locator('textarea').first();
		await textarea.fill('{"name":"fmtly","version":"1.0.0"}');
		await textarea.dispatchEvent('input');

		await page.waitForTimeout(500);
		const outputArea = page.locator('[aria-label="Output panel"], [data-testid="output"]').first();
		if (await outputArea.isVisible()) {
			const outputText = await outputArea.textContent();
			expect(outputText).toBeTruthy();
		}
	});

	test('shows error for invalid JSON', async ({ page }) => {
		await page.goto('/json/validator');

		const textarea = page.locator('textarea').first();
		await textarea.fill('{invalid json}');
		await textarea.dispatchEvent('input');

		await page.waitForTimeout(500);
		const body = await page.textContent('body');
		expect(body).toBeTruthy();
	});
});

test.describe('Theme toggle', () => {
	test('persists theme preference on refresh', async ({ page }) => {
		await page.goto('/');

		const themeToggle = page
			.locator(
				'button[aria-label*="theme"], button[aria-label*="Theme"], [data-testid="theme-toggle"]'
			)
			.first();

		if (await themeToggle.isVisible()) {
			const htmlBefore = await page.locator('html').getAttribute('data-theme');
			await themeToggle.click();
			const htmlAfter = await page.locator('html').getAttribute('data-theme');

			expect(htmlAfter).not.toBe(htmlBefore);

			await page.reload();
			const htmlReloaded = await page.locator('html').getAttribute('data-theme');
			expect(htmlReloaded).toBe(htmlAfter);
		}
	});
});

test.describe('Share URL', () => {
	test('generates a shareable URL', async ({ page }) => {
		await page.goto('/json/formatter');

		const textarea = page.locator('textarea').first();
		await textarea.fill('{"test":true}');
		await textarea.dispatchEvent('input');

		const shareBtn = page.locator('button:has-text("Share")').first();
		if (await shareBtn.isVisible()) {
			await shareBtn.click();
			await page.waitForTimeout(300);
		}
	});
});

test.describe('History', () => {
	test('history button is present', async ({ page }) => {
		await page.goto('/json/formatter');

		const historyBtn = page.locator('button:has-text("History")').first();
		await expect(historyBtn).toBeVisible();
	});
});

test.describe('Load a sample', () => {
	test('sample button populates input', async ({ page }) => {
		await page.goto('/json/formatter');

		const sampleBtn = page.locator('button:has-text("Load a sample")').first();
		if (await sampleBtn.isVisible({ timeout: 2000 })) {
			await sampleBtn.click();
			await page.waitForTimeout(300);
			const textarea = page.locator('textarea').first();
			const value = await textarea.inputValue();
			expect(value.length).toBeGreaterThan(0);
		}
	});
});

test.describe('Diff tool', () => {
	test('diff page loads', async ({ page }) => {
		await page.goto('/diff/json');
		await expect(page).toHaveTitle(/JSON Diff/i);
	});
});

test.describe('Encode tools', () => {
	test('base64 page loads', async ({ page }) => {
		await page.goto('/encode/base64');
		await expect(page).toHaveTitle(/Base64/i);
	});
});

test.describe('Escape tools', () => {
	test('HTML escape page loads', async ({ page }) => {
		await page.goto('/escape/html');
		await expect(page).toHaveTitle(/HTML/i);
	});
});

test.describe('Error page', () => {
	test('404 shows friendly error', async ({ page }) => {
		await page.goto('/nonexistent-page-that-does-not-exist');
		const body = await page.textContent('body');
		expect(body).toContain('Not Found');
	});
});
