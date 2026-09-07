# 📁 ساختار پروژه

## نمای کلی

```
wedding-invitation/
├── 📂 .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions برای دیپلوی خودکار
│
├── 📂 src/
│   ├── 📂 components/          # کامپوننت‌های React
│   │   ├── WelcomePage.tsx     # صفحه خوش‌آمدگویی (4 ثانیه اول)
│   │   ├── HomePage.tsx        # صفحه اصلی با شمارش معکوس
│   │   ├── StoryPage.tsx       # داستان عشق (تایم‌لاین)
│   │   ├── DetailsPage.tsx     # جزئیات مراسم + مسیریابی
│   │   ├── GalleryPage.tsx     # گالری تصاویر
│   │   ├── RSVPPage.tsx        # فرم تأیید حضور
│   │   ├── Navigation.tsx      # منوی ناوبری (موبایل + دسکتاپ)
│   │   └── LoadingAnimation.tsx # انیمیشن لودینگ بین صفحات
│   │
│   ├── 📂 utils/
│   │   └── cn.ts               # Utility برای Tailwind classes
│   │
│   ├── App.tsx                 # کامپوننت اصلی و مدیریت routing
│   ├── main.tsx                # نقطه ورود React
│   └── index.css               # استایل‌های global + فونت‌ها
│
├── 📂 public/                  # فایل‌های استاتیک (اختیاری)
│   └── images/                 # تصاویر گالری (در صورت افزودن)
│
├── 📄 index.html               # HTML اصلی + تگ‌های meta
├── 📄 package.json             # وابستگی‌ها و اسکریپت‌ها
├── 📄 vite.config.ts           # تنظیمات Vite
├── 📄 tsconfig.json            # تنظیمات TypeScript
│
├── 📖 README.md                # راهنمای اصلی پروژه
├── 📖 راهنما.md                # راهنمای فارسی کامل
├── 📖 QUICK_START.md           # راهنمای سریع (۵ دقیقه)
├── 📖 CUSTOMIZE.md             # راهنمای شخصی‌سازی کامل
├── 📖 STRUCTURE.md             # این فایل!
│
├── 📄 .gitignore               # فایل‌های ignore شده
├── 📄 .env.example             # نمونه متغیرهای محیطی
└── 📄 LICENSE                  # MIT License
```

---

## 📄 شرح هر فایل

### ⚙️ فایل‌های پیکربندی

#### `vite.config.ts`
```typescript
// تنظیمات Vite - بیلد و dev server
- plugin React
- plugin Singlefile (برای بیلد تک‌فایلی)
```

#### `tsconfig.json`
```json
// تنظیمات TypeScript
- target ES2020
- strict mode فعال
- path aliases
```

#### `package.json`
```json
// وابستگی‌ها:
- React 19.2
- Vite 7.3
- Tailwind CSS 4.1
- TypeScript 5.9
```

---

### 🎨 کامپوننت‌ها (src/components/)

#### 1. `WelcomePage.tsx` 🚪
**مدت نمایش**: 4 ثانیه
**محتوا**:
- انیمیشن قلب‌های شناور
- ایموجی حلقه با انیمیشن
- نوشته "عروسی ما"

**ویژگی‌ها**:
- Full-screen overlay
- Auto-redirect به HomePage
- انیمیشن fade-in/scale

**خطوط مهم**:
- L6: تاخیر نمایش محتوا (100ms)
- L16: تعداد قلب‌ها (20)
- L34: عنوان اصلی

---

#### 2. `HomePage.tsx` 🏠
**نقش**: صفحه اصلی با معرفی و شمارش معکوس

**بخش‌ها**:
1. **هدر** (L48-71):
   - ایموجی حلقه
   - نام عروس و داماد
   - متن دعوت

2. **شمارش معکوس** (L82-115):
   - به‌روزرسانی هر ثانیه
   - نمایش: روز، ساعت، دقیقه، ثانیه
   - کارت‌های متحرک با hover

3. **تاریخ و زمان** (L119-137):
   - تاریخ شمسی
   - تاریخ میلادی
   - ساعت مراسم

**متغیرهای مهم**:
- L6: `weddingDate` - تاریخ عروسی (ISO format)

**انیمیشن‌ها**:
- `bounce-slow`: گل‌های پس‌زمینه
- `bounce-gentle`: حلقه عروسی
- `ping-slow`: ستاره‌های درخشان

---

#### 3. `StoryPage.tsx` 💖
**نقش**: نمایش داستان عشق در قالب تایم‌لاین

**ساختار داده** (L11-41):
```typescript
timeline = [
  {
    year: string,        // سال شمسی
    title: string,       // عنوان رویداد
    description: string, // توضیحات
    emoji: string,       // ایموجی مرتبط
  }
]
```

**طراحی**:
- Vertical timeline (دسکتاپ)
- نمایش متناوب چپ/راست
- دایره‌های روی خط زمانی
- انیمیشن hover روی کارت‌ها

**بخش‌ها**:
1. L12-41: آرایه timeline (قابل ویرایش)
2. L56-87: نمایش تایم‌لاین
3. L93-106: نقل قول انگیزشی

---

#### 4. `DetailsPage.tsx` 📍
**نقش**: جزئیات مراسم + مسیریابی

**اطلاعات مکان** (L11-15):
```typescript
venueLocation = {
  name: string,    // نام تالار
  address: string, // آدرس کامل
  lat: number,     // عرض جغرافیایی
  lng: number,     // طول جغرافیایی
}
```

**مسیریاب‌ها** (L19-26):
- بلد (Balad)
- نشان (Neshan)
- گوگل مپ (Google Maps)
- ویز (Waze)

**بخش‌ها**:
1. تاریخ و زمان (L52-77)
2. دِرِس‌کُد (L80-100)
3. مکان + دکمه‌های مسیریابی (L105-142)
4. اطلاعات پارکینگ (L145-156)
5. خدمات اضافی (L159-181)

**توابع**:
- `handleNavigation(app)`: باز کردن اپلیکیشن مسیریاب

---

#### 5. `GalleryPage.tsx` 📸
**نقش**: نمایش گالری تصاویر

**آیتم‌های گالری** (L11-19):
```typescript
galleryItems = [
  {
    id: number,
    emoji: string,      // فعلاً ایموجی (قابل تغییر به image)
    title: string,
    gradient: string,   // کلاس گرادیانت Tailwind
  }
]
```

**ویژگی‌ها**:
- Grid responsive: 1/2/3 ستون
- Lightbox modal (کلیک روی عکس)
- انیمیشن stagger (تاخیر ترتیبی)
- اطلاعات هشتگ و اینستاگرام

**بخش‌ها**:
1. L40-75: Grid گالری
2. L93-117: پیام "عکس‌های شما"
3. L120-134: Lightbox Modal

---

#### 6. `RSVPPage.tsx` ✉️
**نقش**: فرم تأیید حضور

**فیلدهای فرم**:
```typescript
formData = {
  name: string,       // نام و نام خانوادگی
  phone: string,      // شماره تماس
  guests: string,     // تعداد همراهان
  attendance: string, // yes/no
  message: string,    // پیام تبریک (اختیاری)
}
```

**حالت‌ها**:
1. **فرم** (L105-190): ورود اطلاعات
2. **موفقیت** (L83-94): پیام تشکر

**فیلدها**:
- نام (L107-118): required
- تلفن (L121-132): required, type=tel
- حضور (L136-169): radio buttons
- تعداد (L173-186): فقط اگر حضور=yes
- پیام (L189-199): textarea اختیاری

**اعتبارسنجی**:
- HTML5 required
- Pattern validation (در صورت نیاز)

---

#### 7. `Navigation.tsx` 🧭
**نقش**: منوی اصلی سایت

**آیتم‌های منو** (L8-14):
```typescript
navItems = [
  { id: 'home', label: 'خانه', emoji: '🏠' },
  { id: 'story', label: 'داستان ما', emoji: '💖' },
  { id: 'details', label: 'جزئیات', emoji: '📍' },
  { id: 'gallery', label: 'گالری', emoji: '📸' },
  { id: 'rsvp', label: 'تأیید حضور', emoji: '✉️' },
]
```

**دو نسخه**:
1. **دسکتاپ** (L19-36): بالای صفحه، افقی
2. **موبایل** (L39-59): پایین صفحه، آیکون + متن

**انتقال بین صفحات**:
- onClick → `onNavigate(id)`
- هایلایت صفحه فعلی
- انیمیشن smooth

---

#### 8. `LoadingAnimation.tsx` ⏳
**نقش**: نمایش loading بین صفحات

**المان‌ها**:
- دو حلقه چرخان (مخالف هم)
- ایموجی گل در مرکز
- متن "در حال بارگذاری..."

**استفاده**: وقتی `isLoading=true` در App.tsx

---

### 📱 `App.tsx` - مدیریت کل برنامه

**State ها**:
```typescript
currentPage: string     // صفحه فعلی
isLoading: boolean      // وضعیت لودینگ
showWelcome: boolean    // نمایش صفحه خوش‌آمد
```

**جریان کار**:
1. نمایش WelcomePage (4 ثانیه)
2. رفتن به HomePage
3. کلیک روی منو → isLoading=true
4. تاخیر 800ms (انیمیشن لودینگ)
5. تغییر صفحه

**تابع کلیدی**:
- `navigateTo(page)`: تغییر صفحه با انیمیشن

---

## 🎨 استایل‌ها

### `src/index.css`
```css
/* فونت پیش‌فرض */
font-family: 'Vazirmatn'

/* اسکرول صاف */
scroll-behavior: smooth

/* اسکرولبار سفارشی */
pink gradient scrollbar
```

### Tailwind Classes استفاده شده

**رنگ‌ها**:
- `pink-50` → `pink-600`
- `rose-50` → `rose-600`

**گرادیانت‌ها**:
```
from-pink-100 via-rose-50 to-pink-50
from-pink-400 to-rose-500
```

**انیمیشن‌های سفارشی**:
- `bounce-slow`
- `bounce-gentle`
- `float-heart`
- `ping-slow`
- `fade-in`
- `scale-in`

---

## 🔧 نحوه کار ویژگی‌ها

### ⏱️ شمارش معکوس (Countdown)
**فایل**: `HomePage.tsx`

```typescript
// محاسبه هر ثانیه
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // تبدیل به روز، ساعت، دقیقه، ثانیه
    setTimeLeft({
      days: Math.floor(distance / (1000*60*60*24)),
      hours: Math.floor((distance % (1000*60*60*24)) / (1000*60*60)),
      // ...
    });
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
```

---

### 🗺️ مسیریابی (Navigation)
**فایل**: `DetailsPage.tsx`

```typescript
const handleNavigation = (app: string) => {
  // ساخت URL بر اساس اپلیکیشن
  const urls = {
    balad: `https://balad.ir/search?q=${address}`,
    neshan: `https://neshan.org/maps/@${lat},${lng},15z`,
    google: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
    waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
  };
  
  // باز کردن در تب جدید
  window.open(urls[app], '_blank');
};
```

---

### 🖼️ Lightbox گالری
**فایل**: `GalleryPage.tsx`

```typescript
// State برای عکس انتخاب شده
const [selectedImage, setSelectedImage] = useState<number | null>(null);

// کلیک روی عکس
onClick={() => setSelectedImage(item.id)}

// نمایش modal
{selectedImage && (
  <div className="fixed inset-0 bg-black/90 z-50">
    {/* محتوای modal */}
  </div>
)}
```

---

## 🚀 فرآیند Build و Deploy

### Local Development
```bash
npm run dev
# → Vite dev server on port 5173
```

### Production Build
```bash
npm run build
# → Creates dist/index.html (single file)
# → All assets inlined (CSS, JS)
```

### GitHub Actions Deploy
1. Push به branch `main`
2. GitHub Actions اجرا می‌شود
3. `npm install` و `npm run build`
4. آپلود `dist/` به GitHub Pages
5. سایت در `username.github.io/repo-name/` منتشر می‌شود

---

## 📚 مستندات کامل

- **نصب و راه‌اندازی**: `QUICK_START.md`
- **شخصی‌سازی**: `CUSTOMIZE.md`
- **راهنمای فارسی**: `راهنما.md`
- **این فایل**: `STRUCTURE.md`

---

## 💡 نکات مهم

### برای توسعه‌دهندگان:

1. **Component Isolation**: هر کامپوننت مستقل است
2. **No External API**: همه چیز client-side
3. **Single File Build**: dist/index.html شامل همه چیز
4. **RTL Support**: کامل فارسی و راست‌چین
5. **Mobile First**: ابتدا برای موبایل طراحی شده

### برای کاربران:

1. فقط `src/components/*.tsx` را ویرایش کنید
2. از متغیرها در بالای فایل‌ها استفاده کنید
3. بعد از هر تغییر: `npm run build`
4. تست در `npm run dev` قبل از push

---

**آخرین بروزرسانی**: دسامبر 2024
