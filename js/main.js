var left_nav_items = '.nav-item'
var left_nav = {
	block: document.getElementById('nav'),
	mouse: 0,
	scroll: 0,
}





var disable_scroll = 0;



$('#nav').hover(
		function() {
			return disable_scroll = 1;
		}, 
		function () {
			return disable_scroll = 0;
		}
);

document.addEventListener('wheel', (e) => {
    if (disable_scroll) {
        e.preventDefault();
    }
}, { passive: false });
















nav.onmouseup = function() {
    // console.log(nav.scroll())
	
};

// $('#nav').hover(
// 	function() {
// 		nav.onwheel = (e) => {
// 			console.log(e)
			
// 		// 				document.querySelector('.nav-overflow').scrollLeft += 20;
// 				document.querySelector('.nav-overflow').scrollLeft -= 20;	
			
// 		}
// 	}, function() {
// 	  alert('-')
// 	}
// )



left_nav.block.onwheel = (e) => {
	if(e.deltaY < 0){// up
		
		// if(left_nav.scroll )
		// left_nav.scroll++;




		console.log(left_nav.scroll)
		document.querySelector('.nav-overflow').scrollLeft += 50;
	}else{//down
		document.querySelector('.nav-overflow').scrollLeft -= 50;					
	}
}

// left_nav.block.onmouseenter = () =>{
// 
	

// }
function scroll(e,scroll){
	let element = document.querySelector(e);
	element.scrollLeft += scroll;
}

document.onscroll = (e) => {

	





	// if(disable_scroll != 1){
	// 	if(e.deltaY < 0){// up
		
	// 	}else{//down
									
	// 	}
	// }else{
	// 	// document.querySelector('body').css({'overflow':'hidden'});
	// }
}

$(left_nav_items).click(function(e){
	$(left_nav_items).removeClass('active');
	$(this).addClass('active');
});