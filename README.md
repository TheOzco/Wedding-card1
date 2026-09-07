# 💍 کارت دعوت دیجیتالی عروسی

یک کارت دعوت دیجیتالی زیبا و مدرن با طراحی وینتیج و رنگ‌های پاستلی

## ✨ ویژگی‌ها

- 🎨 طراحی وینتیج با رنگ‌های نباتی و صورتی
- 📱 کاملاً ریسپانسیو (موبایل و دسکتاپ)
- 🧭 اتصال به اپلیکیشن‌های مسیریابی ایرانی (بلد، نشان، گوگل مپ، ویز)
- 🎭 انیمیشن‌های خلاقانه و جذاب
- 📄 پنج صفحه مختلف:
  - صفحه خانه با شمارش معکوس
  - داستان عشق (تایم‌لاین)
  - جزئیات مراسم
  - گالری تصاویر
  - فرم تأیید حضور (RSVP)

## 🚀 دیپلوی روی GitHub Pages

### مرحله ۱: آپلود پروژه به گیت‌هاب

```bash
# در پوشه پروژه
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### مرحله ۲: فعال‌سازی GitHub Pages

1. به مخزن گیت‌هاب خود بروید
2. Settings → Pages
3. Source را روی "GitHub Actions" بگذارید
4. یا فایل زیر را در `.github/workflows/deploy.yml` ایجاد کنید:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### مرحله ۳: تغییر اطلاعات

اطلاعات زیر را در فایل‌های مربوطه تغییر دهید:

#### `src/components/HomePage.tsx`
- نام عروس و داماد (خط ۵۴-۶۲)
- تاریخ عروسی (خط ۶)

#### `src/components/DetailsPage.tsx`
- نام و آدرس تالار (خطوط ۱۱-۱۵)
- مختصات جغرافیایی (lat, lng)

#### `src/components/StoryPage.tsx`
- داستان عشق شما (آرایه timeline)

#### `src/components/RSVPPage.tsx`
- شماره تماس (خط ۱۷۲)
- مهلت تأیید حضور (خط ۱۸۲)

## 🛠️ نصب و اجرا در محلی

```bash
# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev

# بیلد برای پروداکشن
npm run build

# پیش‌نمایش بیلد
npm run preview
```

## 📦 تکنولوژی‌های استفاده شده

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 📝 TypeScript
- 🎭 انیمیشن‌های CSS سفارشی

## 🎨 تنظیمات ظاهری

رنگ‌های اصلی در Tailwind CSS:
- `pink-50` تا `pink-600`
- `rose-50` تا `rose-600`
- گرادیانت‌های پاستلی

فونت‌ها:
- `Vazirmatn` - فونت فارسی
- `Dancing Script` - فونت انگلیسی برای عناوین

## 📝 لایسنس

آزاد برای استفاده شخصی

## 💝 ساخته شده با عشق

این پروژه با عشق و علاقه برای جشن‌های زیبای شما ساخته شده است!

---

**نکته مهم**: فراموش نکنید که اطلاعات شخصی خود را در فایل‌های مربوطه قرار دهید! 💕
