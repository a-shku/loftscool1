  $(document).ready(function() {
      
    var contentContainer = $('#content-container'),
        menuLink = $('.menu__item__link'),
        hash = window.location.hash.substr(1),
        activeLinks = function(name) {
            $(menuLink).removeClass('active');
            for (var i = 0, len = menuLink.length; i < len; i++) {
                if ($(menuLink[i]).attr("href") == name) {
                    $(menuLink[i]).addClass('active');
                }
            }
        };
      
    window.onhashchange = changeUrlHandler;
      
    var states = {
        about: {
            url: '/web/core/pages/about/about.html',
            name: 'about'
        },
        career: {
            url: '/web/core/pages/career/career.html',
            name: 'career'
        },
        portfolio: {
            url: '/web/core/pages/portfolio/portfolio.html',
            name: 'portfolio'
        }
    };
    
    function changeUrlHandler() {
      hash = window.location.hash;
      if(hash.charAt(0) == '#'){
          hash = window.location.hash.substr(1);
      }
      
    
      if (hash) {
          try {
              setContent(hash);
          }
          catch (error) {
              console.log(error);
          }
      }
    
    };
    
      
    if(hash){
        try {
            setContent(hash);
        } catch(error){console.log(error);}
        
    }
    
    
    function setContent(file){
        
        //console.log('file', file,  states[file].url);
        
         window.location.hash = states[file].name;
         
        $.get(states[file].url, function(data) {
            contentContainer.html(data);
        });
        activeLinks(file);
    };
    

    menuLink.on("click", function(e) {
        e.preventDefault();
        
        var url = $(this).attr("href");

        setContent(url);
    });
            
           
            
});
 
 