  $(document).ready(function() {
      
      var states = {
          about: {
              url: '/web/core/pages/about.html',
              name: 'about'
          },
          career: {
              url: '/web/core/pages/career.html',
              name: 'carrer'
          },
          portfolio: {
              url: '/web/core/pages/portfolio.html',
              name: 'portfolio'
          }
      };
      
      
          var contentContainer = $('#content-container');
 
    console.log('router', $('.menu__item__link'));
            
            var setContent = function(file){
                console.log('file', file, states[file].url);
                //var hash = 
                 window.location.hash = states[file].name;
                $.get(states[file].url, function(data) {
                    
                    contentContainer.html(data);
                   //$(this).children("div:first").html(data);
                });
            };
            
            var menuLink = $('.menu__item__link');
            
            console.log('menuLink', menuLink);
            
           menuLink.on( "click" , function(e){
              
               e.preventDefault();
              //console.log($(this).attr("class"));
              console.log($(this).attr("href"));
              var url = $(this).attr("href");
              
               setContent(url);
           });  
            
           
            
});
 
 