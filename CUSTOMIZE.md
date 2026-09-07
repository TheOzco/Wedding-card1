# 🎨 راهنمای کامل شخصی‌سازی

این فایل شامل تمام جزئیات لازم برای شخصی‌سازی کامل کارت دعوت شماست.

---

## 📝 فهرست کامل تغییرات

### ✅ تغییرات ضروری (حتماً انجام دهید)

| آیتم | فایل | خط | توضیحات |
|------|------|-----|---------|
| نام عروس و داماد | `src/components/HomePage.tsx` | 54, 60 | جایگزین "علی" و "زهرا" |
| تاریخ عروسی (میلادی) | `src/components/HomePage.tsx` | 6 | فرمت: YYYY-MM-DDTHH:MM:SS |
| تاریخ عروسی (شمسی) | `src/components/HomePage.tsx` | 117 | مثال: پنجشنبه، ۴ دی ماه ۱۴۰۳ |
| ساعت مراسم | `src/components/HomePage.tsx` | 123 | مثال: ساعت ۱۸:۰۰ |
| نام تالار | `src/components/DetailsPage.tsx` | 12 | نام کامل محل برگزاری |
| آدرس تالار | `src/components/DetailsPage.tsx` | 13 | آدرس کامل |
| مختصات تالار (lat) | `src/components/DetailsPage.tsx` | 14 | عرض جغرافیایی |
| مختصات تالار (lng) | `src/components/DetailsPage.tsx` | 15 | طول جغرافیایی |
| شماره تماس | `src/components/RSVPPage.tsx` | 172 | شماره موبایل برای تماس |
| مهلت تأیید حضور | `src/components/RSVPPage.tsx` | 182 | آخرین تاریخ RSVP |

---

### 🎨 تغییرات اختیاری (پیشنهادی)

#### 1️⃣ **تغییر متن صفحه خانه**

**فایل**: `src/components/HomePage.tsx`

**خط 51**: عنوان اصلی
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 text-rose-500">
  ما ازدواج می‌کنیم
</h1>
```
می‌توانید تغییر دهید به:
- "جشن عروسی ما"
- "با هم تا ابد"
- "آغاز زندگی مشترک"
- هر متن دلخواه دیگری

**خط 67**: متن زیرنویس
```tsx
<p className="text-xl text-rose-400 font-light mb-12">
  با کمال میل شما را به جشن عروسی خود دعوت می‌کنیم
</p>
```

---

#### 2️⃣ **ویرایش داستان عشق**

**فایل**: `src/components/StoryPage.tsx`

**خطوط 11-41**: تایم‌لاین داستان

```tsx
const timeline = [
  {
    year: '۱۳۹۸',                                    // سال
    title: 'اولین دیدار',                           // عنوان
    description: 'روزی که برای اولین بار...',       // توضیحات
    emoji: '👀',                                     // ایموجی
  },
  // موارد بیشتر...
];
```

**ایموجی‌های پیشنهادی**:
- 👀 اولین دیدار
- 💬 شروع دوستی
- ☕ اولین قرار
- 💕 عاشق شدن
- 💍 خواستگاری
- 👰🤵 عروسی
- 🏠 خانه جدید
- 👶 بچه (آینده!)

می‌توانید موارد اضافه یا کم کنید!

---

#### 3️⃣ **جزئیات مراسم**

**فایل**: `src/components/DetailsPage.tsx`

**خطوط 61-69**: تاریخ به فارسی و انگلیسی
```tsx
<p className="text-gray-700 font-semibold">پنجشنبه، ۴ دی ماه ۱۴۰۳</p>
<p className="text-sm text-gray-500">۲۵ دسامبر ۲۰۲۴</p>
```

**خطوط 73-77**: ساعت
```tsx
<p className="text-gray-700 font-semibold">ساعت ۱۸:۰۰</p>
<p className="text-sm text-gray-500">۶ بعدازظهر</p>
```

**خطوط 88-90**: دِرِس‌کُد
```tsx
<p className="text-gray-700">لباس مجلسی و رسمی</p>
```
تغییر دهید به:
- "لباس مجلسی"
- "لباس راحت"
- "لباس سنتی"
- "Free style"

**خط 96**: پیام درباره رنگ سفید
```tsx
<p className="text-sm text-rose-500 text-center">
  رنگ سفید ویژه عروس است 💕
</p>
```

**خط 150**: اطلاعات پارکینگ
```tsx
<p className="text-gray-600">
  پارکینگ اختصاصی با ظرفیت کافی در محل تالار
</p>
```

**خطوط 160-183**: خدمات اضافی
- 🍽️ شام
- 🎵 موسیقی زنده
- 📸 عکاسی

می‌توانید اضافه کنید:
```tsx
<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 text-center">
  <div className="text-4xl mb-3">🎁</div>
  <h4 className="font-semibold text-rose-500 mb-2">هدیه</h4>
  <p className="text-gray-600 text-sm">حضور شما بهترین هدیه است</p>
</div>
```

---

#### 4️⃣ **گالری - هشتگ و اینستاگرام**

**فایل**: `src/components/GalleryPage.tsx`

**خط 107**: هشتگ
```tsx
<span className="font-semibold text-rose-500">هشتگ:</span> #علی_زهرا_۱۴۰۳
```

**خط 114**: اینستاگرام
```tsx
<span className="font-semibold text-rose-500">اینستاگرام:</span> @ali_zahra_wedding
```

**خط 98**: متن توضیحی
```tsx
<p className="text-gray-600 mb-6 leading-relaxed">
  عکس‌ها و ویدیوهای خود را از مراسم با ما به اشتراک بگذارید
</p>
```

---

#### 5️⃣ **فرم تأیید حضور (RSVP)**

**فایل**: `src/components/RSVPPage.tsx`

**خط 90**: پیام موفقیت
```tsx
<h2 className="text-3xl font-bold text-green-600 mb-4">
  با تشکر از شما!
</h2>
<p className="text-gray-700 text-lg leading-relaxed">
  پاسخ شما با موفقیت ثبت شد.
  <br />
  منتظر دیدار شما هستیم! 💕
</p>
```

**خطوط 146-156**: گزینه‌های تعداد مهمان
```tsx
<option value="1">۱ نفر (فقط خودم)</option>
<option value="2">۲ نفر</option>
<option value="3">۳ نفر</option>
<option value="4">۴ نفر</option>
<option value="5">۵ نفر یا بیشتر</option>
```

---

## 🎨 تغییر رنگ‌ها

### رنگ‌های فعلی:
- **اصلی**: صورتی (Pink) - `#ec4899`
- **ثانویه**: گل‌سرخی (Rose) - `#f43f5e`
- **پس‌زمینه**: صورتی روشن - `#fce7f3`

### چگونه رنگ‌ها را تغییر دهیم؟

کلاس‌های رنگی Tailwind که استفاده شده:
- `pink-50` تا `pink-600`
- `rose-50` تا `rose-600`

برای تغییر رنگ، می‌توانید این کلاس‌ها را جایگزین کنید:

**رنگ‌های جایگزین پیشنهادی**:

| رنگ | Tailwind Class | مناسب برای |
|-----|----------------|------------|
| بنفش | `purple-` | مدرن و جذاب |
| آبی | `blue-` | کلاسیک و آرام |
| سبز نعنایی | `teal-` | تازه و شاد |
| بنفش ارغوانی | `violet-` | لوکس و شیک |
| صورتی فوشیا | `fuchsia-` | پررنگ‌تر |

**مثال**: برای تغییر به بنفش، کلاس‌های `pink-500` را به `purple-500` تغییر دهید.

---

## 🔤 تغییر فونت

### فونت‌های فعلی:
- **فارسی**: Vazirmatn
- **انگلیسی/عناوین**: Dancing Script

### تغییر فونت فارسی:

**فایل**: `index.html` (خط 8)

```html
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**جایگزین‌های پیشنهادی**:
- `Estedad` - مدرن و زیبا
- `Yekan` - محبوب و خوانا
- `Sahel` - کلاسیک
- `Samim` - ساده و شیک

برای تغییر، نام فونت را در لینک و فایل `src/index.css` جایگزین کنید.

### تغییر فونت عناوین (انگلیسی):

**فایل**: `index.html` (خط 8)

```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**جایگزین‌های پیشنهادی**:
- `Pacifico` - دست‌نویس شاد
- `Great Vibes` - خوشنویسی زیبا
- `Sacramento` - رمانتیک
- `Satisfy` - شیک و مدرن

---

## 🖼️ افزودن تصاویر واقعی

فایل‌های گالری فعلاً از ایموجی استفاده می‌کنند. برای افزودن تصاویر واقعی:

### مرحله 1: آپلود تصاویر

1. تصاویر را در پوشه `public/images/` قرار دهید
2. نام فایل‌ها را معنادار انتخاب کنید: `photo1.jpg`, `photo2.jpg`, ...

### مرحله 2: ویرایش GalleryPage

**فایل**: `src/components/GalleryPage.tsx`

قبلی:
```tsx
const galleryItems = [
  { id: 1, emoji: '💑', title: 'لحظات شیرین', gradient: 'from-pink-400 to-rose-500' },
  // ...
];
```

بعدی:
```tsx
const galleryItems = [
  { id: 1, image: '/images/photo1.jpg', title: 'لحظات شیرین' },
  { id: 2, image: '/images/photo2.jpg', title: 'عشق واقعی' },
  // ...
];
```

و در JSX:
```tsx
<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
```

---

## 🌐 تنظیمات مسیریابی

**فایل**: `src/components/DetailsPage.tsx` (خطوط 19-26)

```tsx
const urls: { [key: string]: string } = {
  balad: `https://balad.ir/search?q=${encodeURIComponent(address)}`,
  neshan: `https://neshan.org/maps/@${lat},${lng},15z`,
  google: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
  waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
};
```

این URLها خودکار از مختصات شما استفاده می‌کنند. نیازی به تغییر ندارند!

فقط مطمئن شوید `lat` و `lng` را درست وارد کرده‌اید.

---

## 📱 تنظیمات موبایل

همه صفحات کاملاً ریسپانسیو هستند و نیازی به تنظیمات اضافی ندارند.

**نکات**:
- از Tailwind breakpoint `md:` برای دسکتاپ استفاده شده
- منوی موبایل در پایین صفحه ثابت است
- منوی دسکتاپ در بالای صفحه است

---

## 🎭 سفارشی‌سازی انیمیشن‌ها

انیمیشن‌ها در تگ `<style>` هر کامپوننت تعریف شده‌اند.

**مثال - تغییر سرعت انیمیشن شناور قلب**:

**فایل**: `src/components/WelcomePage.tsx`

```css
.animate-float-heart {
  animation: float-heart linear infinite;
  animation-duration: 10s; /* تغییر این مقدار - پیش‌فرض 5-15s */
}
```

---

## 🔧 نکات فنی

### Build برای تست محلی:
```bash
npm run build
npm run preview
```

### مشاهده در شبکه محلی (تست موبایل):
```bash
npm run dev -- --host
```
سپس از موبایل به IP نمایش داده شده متصل شوید.

### تمیز کردن Cache:
```bash
rm -rf node_modules
rm -rf dist
npm install
npm run build
```

---

## ✅ چک‌لیست قبل از انتشار

- [ ] نام عروس و داماد تغییر کرده
- [ ] تاریخ و ساعت صحیح است
- [ ] آدرس و مختصات تالار درست است
- [ ] شماره تماس چک شده
- [ ] داستان عشق نوشته شده
- [ ] هشتگ و اینستاگرام تغییر کرده
- [ ] در موبایل تست شده
- [ ] در مرورگرهای مختلف تست شده
- [ ] لینک‌های مسیریابی کار می‌کند
- [ ] فرم RSVP تست شده

---

## 💡 ایده‌های اضافی

### 1. افزودن موزیک پس‌زمینه

در `src/components/WelcomePage.tsx`:
```tsx
<audio autoPlay loop>
  <source src="/music/wedding-song.mp3" type="audio/mpeg" />
</audio>
```

### 2. افزودن ویدیو

در `src/components/HomePage.tsx`:
```tsx
<video autoPlay muted loop className="w-full rounded-3xl">
  <source src="/video/proposal.mp4" type="video/mp4" />
</video>
```

### 3. افزودن شمارنده بازدید

می‌توانید از سرویس‌هایی مثل Google Analytics یا visitor counter استفاده کنید.

### 4. لینک به رجیستری هدیه

در `src/components/DetailsPage.tsx` یک کارت جدید اضافه کنید:
```tsx
<a href="YOUR_REGISTRY_LINK" className="...">
  🎁 لیست هدایای پیشنهادی
</a>
```

---

موفق باشید! 💕
