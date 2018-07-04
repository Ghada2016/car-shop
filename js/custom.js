/*global $ , google , console*/
$(function () {
    'use strict';

// add and remove class (active)
    $('li a').click(function () {
        $('li a.active').removeClass('active');
        $(this).closest('a').addClass('active');
    });

//Initialize the slider
    $(document).ready(function () {
        $('.bxslider').bxSlider();
        
    });
    $('.bxslider').height($(window).height());

// create logo
//$('p').lettering();

 // trigger mixit up
    $('#container').mixItUp();

// Trigger nice scroll
    $('html').niceScroll({
        cursorcolor: '#ff3300',
        cursorwidth: '10px',
        cursorborder: '1px solid #ff3300 '
    });

// Html animate
    $('nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
        console.log($(this).data('value'));
    });

// initalize map
    function loadMap() {
			
        var mapOptions = {
            center: new google.maps.LatLng(20.593684, 78.96288),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
				
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    };
	loadMap();

// up button
     // When the user scrolls down 20px from the top of the document, show the button
    var myBtn = document.getElementById('btn');
    
    window.onscroll = function scrollFunction() {
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    };
    // When the user clicks on the button, scroll to the top of the document
    myBtn.onclick = function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('li a').removeClass('active');
        $('li a').first().addClass('active');
    };
	
});