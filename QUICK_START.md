# ⚡ راهنمای سریع

## در عجله هستید؟ این ۵ مرحله را انجام دهید:

### 1️⃣ دانلود کد
```bash
git clone https://github.com/YOUR_USERNAME/wedding-invitation.git
cd wedding-invitation
npm install
```

### 2️⃣ تغییر اطلاعات مهم (۵ دقیقه)

| فایل | چیزی که باید تغییر دهید |
|------|--------------------------|
| `src/components/HomePage.tsx` | نام عروس و داماد (خط ۵۴، ۶۰) + تاریخ (خط ۶) |
| `src/components/DetailsPage.tsx` | آدرس تالار (خط ۱۲-۱۵) |
| `src/components/RSVPPage.tsx` | شماره تماس (خط ۱۷۲) |

### 3️⃣ تست محلی
```bash
npm run dev
```
مرورگر را باز کنید: `http://localhost:5173`

### 4️⃣ آماده‌سازی برای گیت‌هاب
```bash
git add .
git commit -m "Update wedding details"
```

### 5️⃣ دیپلوی
```bash
# ایجاد مخزن در گیت‌هاب، سپس:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# در گیت‌هاب:
# Settings → Pages → Source: GitHub Actions
```

✅ **تمام!** سایت شما در چند دقیقه آنلاین می‌شود.

---

## 🎨 می‌خواهید بیشتر شخصی‌سازی کنید؟

- داستان عشق: `src/components/StoryPage.tsx`
- جزئیات مراسم: `src/components/DetailsPage.tsx`
- رنگ‌ها: کلاس‌های `pink-` و `rose-` را در همه فایل‌ها
- فونت: `index.html` خط ۸

📖 راهنمای کامل: `CUSTOMIZE.md`

---

## 🆘 مشکل دارید؟

### خطای نصب:
```bash
npm cache clean --force
npm install
```

### سایت نمایش داده نمی‌شود:
- چند دقیقه صبر کنید
- GitHub → Repository → Actions را چک کنید
- Settings → Pages فعال باشد

### تغییرات اعمال نمی‌شود:
```bash
git add .
git commit -m "Update"
git push
# صبر ۲-۳ دقیقه + پاک کردن کش مرورگر (Ctrl+F5)
```

---

## 📱 تست روی موبایل

```bash
npm run dev -- --host
```
از موبایل به آی‌پی نمایش داده شده وصل شوید.

---

**نکته مهم**: قبل از ارسال برای مهمان‌ها، حتماً خودتان تست کنید! ✅
