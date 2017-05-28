;(function (app) {
    'use strict';
$(document).ready(function() {
    'use strict'
      
    
    function setScroll(){
        $('#article-container').niceScroll({
            cursorcolor: "#d8d8d8",
            cursorwidth: "8px",
            hidecursordelay: "800"
        });
    };
    setScroll();
    
      
    var refreshFlag = false,
        contentContainer = $('#content-container'),
        menuLink = $('.menu__item__link'),
        hash = window.location.hash.substr(1),
        activeLinks = function(name) {
            console.log(window);
            
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
        // if(refreshFlag){
        //     refreshFlag = false;
        //     return;
        // }
        
        if (window.location.hash && window.location.hash) {
            hash = window.location.hash.substr(1);
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
        
        window.location.hash = states[file].name;
        refreshFlag = true;
         
        $.get(states[file].url, function(data) {
            contentContainer.html(data);
            if (file == 'about') {
                setScroll();
            }
        });
        activeLinks(file);
    };
    
    //navigation listener
    menuLink.on("click", function(e) {
        e.preventDefault();
        
        var url = $(this).attr("href");

        setContent(url);
    });
    
    
   
            
           
            
});

})();
 