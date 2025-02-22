# تسک برنامه‌نویسی برای پیاده‌سازی **Infinite Scroll** 🚀

## شرح کلی

در این تسک، شما باید قابلیت **Infinite Scroll** را برای لیست اخبار پیاده‌سازی کنید. این قابلیت به کاربر اجازه می‌دهد که با اسکرول کردن صفحه، اخبار بیشتری را **بدون نیاز به رفرش صفحه** مشاهده کند.  
برای این کار از **TanStack Query** استفاده کنید.  
همچنین، در صورتی که **جاوا اسکریپت غیرفعال باشد**، یک دکمه برای مشاهده صفحه بعدی نمایش داده شود.

---

## ✅ نیازمندی‌ها و وظایف

### ۱. نصب **TanStack Query**

📌 ابتدا کتابخانه **TanStack Query** را در پروژه نصب و پیکربندی کنید.

### ۲. پیاده‌سازی **Infinite Scroll** با **TanStack Query**

📌 قابلیت **Infinite Scroll** را برای نمایش لیست اخبار پیاده‌سازی کنید، به‌طوری که هنگام رسیدن به انتهای صفحه، داده‌های جدید به لیست اضافه شوند.

### ۳. بروزرسانی **URL** هنگام بارگذاری صفحه جدید

📌 هر بار که صفحه جدیدی لود می‌شود، آدرس مرورگر نیز به‌روز شود.  
📌 **مثال:** اگر کاربر به صفحه دوم برسد، آدرس مرورگر باید `/news/page/2` باشد.

### ۴. پشتیبانی از دسترسی مستقیم به صفحات صفحه‌بندی‌شده

📌 اگر کاربر به‌صورت مستقیم لینک `/news/page/2` را در مرورگر باز کند، سیستم باید داده‌های لازم را بارگذاری کند و **صفحه اول و دوم** را نمایش دهد.

### ۵. جایگزین شدن دکمه **“صفحه بعدی”** در صورت غیرفعال بودن جاوا اسکریپت

📌 در صورتی که **جاوا اسکریپت در مرورگر غیرفعال باشد**، سیستم باید به‌جای **Infinite Scroll**، یک دکمه **“صفحه بعدی”** نمایش دهد تا کاربر بتواند به صفحه بعد برود.

---

## 🔗 نمونه‌ای برای بررسی

برای درک بهتر نحوه عملکرد، می‌توانید نمونه پیاده‌سازی‌شده را در لینک زیر مشاهده کنید:

👉 [نمونه **Infinite Scroll**](https://karinow.com/shop/)

---

📩 **نحوه ارسال:** لطفاً خروجی خود را در **GitHub** قرار دهید و لینک آن را ارسال کنید.

موفق باشید! 🚀
