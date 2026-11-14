console.log("تم ربط ملف الجافا سكريبت بنجاح مع قاموس مدونة الأسرة!");// 1. ميزة البحث الفوري (Live Search)
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const term = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.term-item');

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(term)) {
                item.style.display = 'flex'; // إظهار العنصر إذا تطابق البحث
            } else {
                item.style.display = 'none'; // إخفاء العنصر إذا لم يتطابق
            }
        });
    });
}

// 2. ميزة النسخ السريع للمصطلحات القانونية
function copyText(button) {
    // جلب النص الموجود داخل العنصر الأب (عنوان الشرح)
    const termCard = button.previousElementSibling;
    const textToCopy = termCard.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // تغيير نص الزر مؤقتاً لتأكيد النسخ
        const originalText = button.innerText;
        button.innerText = 'تم النسخ بنجاح! ✓';
        button.style.backgroundColor = '#4e6e29';

        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = '#668d38';
        }, 2000);
    }).catch(err => {
        console.error('فشل في نسخ النص: ', err);
    });
}