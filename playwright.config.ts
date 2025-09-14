import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    timeout: 30000,
    use: {
        baseURL: 'http://localhost:5173/EE_Batch1999',
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173/EE_Batch1999',
        reuseExistingServer: true,
        timeout: 120000,
    },
});