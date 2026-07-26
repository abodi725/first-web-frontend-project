
let element=document.querySelectorAll("ul li");{
console.log(element);
element.forEach((ele) => {
    ele.onclick=()=>{
        element.forEach((e) => {
            e.classList.remove("active");
        });
        ele.classList.add("active");
    };
}) ;

}
// انتظر حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // 1. اختر جميع العناصر القابلة للنقر (العناوين التي نضغط عليها)
    const clickableItems = document.querySelectorAll('.clickable-item');
    
    // 2. اختر جميع البوكسات (المربعات المخفية التي تريد ظهورها)
    const allBoxes = document.querySelectorAll('.info-box');
    
    // 3. تأكد أن كل البوكسات مخفية عند تحميل الصفحة
    allBoxes.forEach(box => {
        box.style.display = 'none';
    });
    
    // 4. متغير لتخزين العنصر النشط
    let activeItem = null;
    
    // 5. أضف مستمع النقر لكل عنصر في القائمة
    clickableItems.forEach(item => {
        item.addEventListener('click', function() {
            // احصل على قيمة data-target (معرف البوكس المراد إظهاره)
            const targetId = this.getAttribute('data-target');
            
            if (targetId) {
                // إزالة الكلاس active من العنصر القديم
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                
                // إضافة الكلاس active للعنصر الجديد
                this.classList.add('active');
                activeItem = this;
                
                // أخفِ كل البوكسات أولاً
                allBoxes.forEach(box => {
                    box.style.display = 'none';
                });
                
                // أظهر البوكس المطلوب
                const targetBox = document.getElementById(targetId);
                if (targetBox) {
                    targetBox.style.display = 'block';
                }
            }
        });
    });
    

    if (clickableItems.length > 0) {
        clickableItems[0].click();
    }
});