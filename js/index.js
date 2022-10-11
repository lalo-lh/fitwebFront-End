$(window).scroll(function(event) {
	/* Act on the event */
	$('.carousel-caption').css('opacity',1 - $(window).scrollTop() / 350);
});

window.onscroll = function() {scrollMenu()};

var navMenu = document.getElementById('nav-menu');
var sticky = navMenu.offsetTop;

var mp = document.querySelector('.btn');
var mpNavSlide = mp.offsetTop;

function scrollMenu(){
	if(window.pageYOffset >= sticky){
		navMenu.classList.add('sticky');
	} else {
		navMenu.classList.remove('sticky');
	}
	if(window.pageYOffset >= mpNavSlide){
		$('.carousel-control-prev-icon').css("display", 'none');
		$('.carousel-control-next').css("display", 'none');
	} else {
		$('.carousel-control-next').css("display", 'flex');
		$('.carousel-control-prev-icon').css("display", 'flex');
	}
}

function hamMenu() {
	var x = document.querySelector('.main-menu');
	if(x.classList.contains("responsive")){
		x.classList.remove("responsive");
	} else {
		x.classList.add("responsive");
	}
}

// carousel numero dos

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


$('#sports .card-body').mouseover(function(){
	$(this).css("backgroundColor","rgba(0,0,0,0.6");
	$(this).addClass('animated');
});
$('#sports .card-body').mouseout(function(){
	$(this).css("backgroundColor","rgba(0,0,0,0");
	$(this).removeClass('animated');
});


$('.membersSocial').hover (function(){
		for(var i=1;i<=3;i++){
			$(this).find('li:nth-of-type('+i+')').css('transitionDelay',i*.1+'s');
				$(this).find('li:nth-of-type('+i+')').css('opacity','1');
				$(this).find('li:nth-of-type('+i+')').css('transform','translateY(0)');
		}
		
	}, function (){
		$(this).find('li').css('opacity','0');
		$(this).find('li').css('transform','translateY(40%)');
	});

// third slide testimonials

	var s = document.querySelectorAll('.clientTest');
	var n = s.length;
	console.log(n);
	var ci = document.querySelector('.slider-inner');
	var k = 100*n;
	ci.style.width=k+"%";
	for(var i =0;i<n;i++){
		s[i].style.width=100/n+"%";
	}
	var j = 0;

	function mover(){
		if(j===0){
			ci.style.left = '0';
		} else if(j>0){
			ci.style.left = "-"+j*100+"%";
		}
		
	}

	function prev(){
		if(j<n-1){
			j++;
			mover();
		}
		
	}
	function next(){
		if(j>0){
			j--;
			mover();
		}
	}