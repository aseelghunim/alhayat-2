(function(){
  var p = document.body.dataset.page||'';
  function a(pg){ return p===pg?'active':''; }

  function icon(color, path) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="'+color+'" style="vertical-align:middle;flex-shrink:0;">'+path+'</svg>';
  }

  var icons = {
    home:        icon('#e8831a', '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>'),
    academy:     icon('#1ab8c4', '<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" opacity="0.8"/>'),
    research:    icon('#3a96d4', '<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"/>'),
    environment: icon('#18b89a', '<path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-13 6 0 0 3.5-3 9-3 0 0-9 1-9 10 0 0 1-5 6-7z"/>'),
    consulting:  icon('#2277bb', '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>')
  };

  document.body.insertAdjacentHTML('afterbegin',
  '<nav><div class="nav-in">'+
    '<a href="index.html" class="logo">'+
      '<img class="logo-ico" src="assets/images/logo.png" />'+
      '<div><span class="logo-name">شركة الحياة للدراسات والبحوث</span></div>'+
    '</a>'+
    '<ul class="nav-ul">'+
      '<li><a href="index.html" class="'+a('home')+'">'+icons.home+' الرئيسية</a></li>'+
      '<li><a href="academy.html" class="'+a('academy')+'">'+icons.academy+' أكاديمية الحياة</a></li>'+
      '<li><a href="research.html" class="'+a('research')+'">'+icons.research+' البحوث التطبيقية</a></li>'+
      '<li><a href="environment.html" class="'+a('environment')+'">'+icons.environment+' منصة الحياة للسلامة البيئية والصحية</a></li>'+
      '<li><a href="consulting.html" class="'+a('consulting')+'">'+icons.consulting+' الاستشارات والتطوير</a></li>'+
    '</ul>'+
  '</div></nav>');

})();