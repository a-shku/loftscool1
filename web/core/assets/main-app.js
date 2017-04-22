 $(document).ready(function() {
          
            
});
  $(document).ready(function() {
      
    var hash = window.location.hash.substr(1);
    
      
    window.onhashchange = changeUrlHandler;
      
    var states = {
        about: {
            url: '/web/core/pages/about.html',
            name: 'about'
        },
        career: {
            url: '/web/core/pages/career.html',
            name: 'career'
        },
        portfolio: {
            url: '/web/core/pages/portfolio.html',
            name: 'portfolio'
        }
    };
    
    function changeUrlHandler() {
      console.log('134', window.location.hash.substr(1));
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
      
      
      
    var contentContainer = $('#content-container');
 
            
    function setContent(file){
        
        //console.log('file', file,  states[file].url);
        
         window.location.hash = states[file].name;
         
        $.get(states[file].url, function(data) {
            contentContainer.html(data);
        });
    };
            
    var menuLink = $('.menu__item__link');

    menuLink.on("click", function(e) {
        e.preventDefault();
        
        var url = $(this).attr("href");

        setContent(url);
    });
            
           
            
});
 
 