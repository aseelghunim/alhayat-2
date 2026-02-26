(function(){
    var p = document.body.dataset.page||'';
    function a(pg){ return p===pg?'active':''; }
  
   
  
    document.body.insertAdjacentHTML('beforeend',
    '<footer>'+
      '<div class="ft-grid">'+
        '<div class="ft-brand">'+
        '<a href="index.html" class="logo">'+
        '<img class="logo-ico" src="assets/images/logo.png" />'+
        '<div><span class="logo-name">شركة الحياة للدراسات والبحوث</span></div>'+
      '</a>'+
          '<p>"ونحن نحب الحياة ما استطعنا إليها سبيلاً" — محمود درويش</p>'+
        '</div>'+
        '<div class="ft-col"><h4>روابط هامة</h4><ul>'+
          '<li><a href="index.html">الرئيسية</a></li>'+
          '<li><a href="academy.html">أكاديمية الحياة</a></li>'+
          '<li><a href="research.html">البحوث التطبيقية</a></li>'+
          '<li><a href="environment.html">السلامة البيئية</a></li>'+
          '<li><a href="consulting.html">الاستشارات والتطوير</a></li>'+
        '</ul></div>'+
        '<div class="ft-col"><h4>برامج الأكاديمية</h4><ul>'+
          '<li><a href="academy.html#diplomas">الدبلومات المهنية</a></li>'+
          '<li><a href="academy.html#short">البرامج القصيرة</a></li>'+
          '<li><a href="academy.html#university">الإعداد الجامعي</a></li>'+
          '<li><a href="academy.html#micro">الشهادات المهارية</a></li>'+
        '</ul></div>'+
        '<div class="ft-col"><h4>تواصل معنا</h4><ul>'+
          '<li><a href="index.html#contact">نموذج التواصل</a></li>'+
          '<li><a href="mailto:info@alhayat.ps">info@alhayat.ps</a></li>'+
          '<li><a href="#">فلسطين</a></li>'+
        '</ul></div>'+
      '</div>'+
      '<div class="ft-bot"><span>© 2025 شركة الحياة للدراسات والبحوث — جميع الحقوق محفوظة</span><span>صُنع بـ ❤️ في فلسطين</span></div>'+
    '</footer>');
  })();
  