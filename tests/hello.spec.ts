import { test, expect } from '@playwright/test';

test('hello world!', async ({ page }) => {
    await page.goto('/'); // resolves to baseURL from playwright.config.ts
    const title = await page.title();
    expect(title).toBe('EE BATCH 1999'); // replace with your app's actual title
});