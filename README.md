# Playwright Demo

Dự án demo về Playwright Test Framework - công cụ automation testing hiện đại cho web applications.

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt](#cài-đặt)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Chạy tests](#chạy-tests)
- [Tính năng](#tính-năng)
- [Các ví dụ test](#các-ví-dụ-test)

## 🎯 Giới thiệu

Dự án này minh họa các tính năng và best practices khi sử dụng Playwright để test web applications. Bao gồm các ví dụ về:
- Test cơ bản với Playwright
- Annotations và Tags
- Hooks và Test Groups
- Video recording
- Login flows
- Multi-browser testing

## 💻 Yêu cầu hệ thống

- **Node.js**: phiên bản 14 trở lên
- **npm** hoặc **yarn**
- Hệ điều hành: Windows, macOS, hoặc Linux

## 📦 Cài đặt

1. Clone repository:
```bash
git clone https://github.com/tam-fs/playwright-demo.git
cd playwright-demo
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Cài đặt browsers:
```bash
npx playwright install
```

## 📁 Cấu trúc dự án

```
playwright-demo/
├── tests/                          # Thư mục chứa test files
│   ├── my-first-test.spec.ts      # Test đơn giản với checkbox
│   ├── generated.spec.ts          # Test được generate tự động
│   └── demo/                      # Demo các tính năng nâng cao
│       ├── annotation-tag.spec.ts # Annotations và tags
│       ├── hook-and-group.spec.ts # Before/After hooks và test groups
│       └── login-test.spec.ts     # Test login với video recording
├── playwright.config.ts           # Cấu hình Playwright
├── package.json                   # Dependencies
├── playwright-report/             # HTML test reports
├── test-results/                  # Test execution results
└── videos/                        # Recorded videos
```

## 🚀 Chạy tests

### Chạy tất cả tests
```bash
npx playwright test
```

### Chạy tests với UI mode
```bash
npx playwright test --ui
```

### Chạy test cụ thể
```bash
npx playwright test tests/my-first-test.spec.ts
```

### Chạy tests với tag cụ thể
```bash
npx playwright test --grep @smoke
```

### Chạy tests trên browser cụ thể
```bash
# Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# WebKit (Safari)
npx playwright test --project=webkit
```

### Xem test report
```bash
npx playwright show-report
```

### Debug mode
```bash
npx playwright test --debug
```

## ✨ Tính năng

### 1. Multi-browser Support
Dự án được cấu hình để chạy tests trên 3 browsers chính:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

### 2. Video Recording
- Video được tự động record khi chạy tests
- Slow motion: 500ms để dễ quan sát
- Video lưu trong folder `videos/`

### 3. Test Annotations
Hỗ trợ các annotations:
- `test.skip()` - Bỏ qua test
- `test.fail()` - Test expected to fail
- `test.fixme()` - Test cần được fix
- `test.slow()` - Test chạy chậm hơn

### 4. Test Organization
- **Hooks**: `beforeEach`, `afterEach` để setup/cleanup
- **Groups**: `test.describe()` để nhóm các tests liên quan
- **Tags**: Sử dụng `@tag` để categorize tests

### 5. Retry Logic
- Tự động retry 1 lần khi test fail
- Trace được capture khi retry

## 📝 Các ví dụ test

### Test cơ bản - Checkbox Interaction
```typescript
// tests/my-first-test.spec.ts
test('My first test', async ({page}) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('label[for="tree-node-home"]').check();
    await expect(page.locator('label[for="tree-node-home"]')).toBeChecked();
})
```

### Test với Hooks và Groups
```typescript
// tests/demo/hook-and-group.spec.ts
test.describe('All My Tests', () => {
    test.beforeEach(async({ page }) => {
        // Login trước mỗi test
        await page.goto('https://www.saucedemo.com');
        // ... login logic
    })

    test('homepage', async({ page }) => {
        // Test homepage functionality
    })

    test('logout', async({ page }) => {
        // Test logout functionality
    })
})
```

### Test Login với Video Recording
```typescript
// tests/demo/login-test.spec.ts
test('Login test', async() => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }
    });
    // ... test logic
})
```

### Test với Tags
```typescript
// tests/demo/annotation-tag.spec.ts
test('Test login page @smoke', async ({ page }) => {
    // Smoke test
});
```

## 🔧 Cấu hình

File `playwright.config.ts` chứa cấu hình chính:
- **testDir**: `./tests` - Thư mục chứa tests
- **fullyParallel**: `true` - Chạy tests song song
- **retries**: `1` - Retry 1 lần khi fail
- **reporter**: `html` - HTML report
- **video**: `on` - Record video
- **trace**: `on-first-retry` - Capture trace khi retry

## 📚 Tài liệu tham khảo

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 👤 Tác giả

**tam-fs**
- GitHub: [@tam-fs](https://github.com/tam-fs)

## 📄 License

ISC

---

**Happy Testing! 🎭**
