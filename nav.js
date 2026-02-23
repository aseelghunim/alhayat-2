(function(){
  var p = document.body.dataset.page||'';
  function a(pg){ return p===pg?'active':''; }

  document.body.insertAdjacentHTML('afterbegin',
  '<nav><div class="nav-in">'+
    '<a href="index.html" class="logo">'+
      '<img class="logo-ico" src="assets/images/logo.png" />'+
      '<div><span class="logo-name">شركة الحياة للدراسات والبحوث</span></div>'+
    '</a>'+
    '<ul class="nav-ul">'+
      '<li><a href="index.html" class="'+a('home')+'">الرئيسية</a></li>'+
      '<li><a href="academy.html" class="'+a('academy')+'">أكاديمية الحياة</a></li>'+
      '<li><a href="research.html" class="'+a('research')+'">البحوث التطبيقية</a></li>'+
      '<li><a href="environment.html" class="'+a('environment')+'">السلامة البيئية</a></li>'+
      '<li><a href="consulting.html" class="'+a('consulting')+'">الاستشارات والتطوير</a></li>'+
    '</ul>'+
  '</div></nav>');

  
})();
