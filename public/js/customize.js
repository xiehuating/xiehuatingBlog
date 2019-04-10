/*
*
*
*	Navbar
*
*
*/

window.onload = function() {

// shrink header height while scrolling down

	var navbar = document.getElementById( "navbar" );

	document.addEventListener("scroll", function(event){
		var style = navbar.className;

		if ( document.documentElement.scrollTop > 90 && style.indexOf( " navbar-shrink" ) < 0 ) {
			style += " navbar-shrink";
			navbar.setAttribute("class", style);
		} 

		if ( document.documentElement.scrollTop <= 90 ) {
			if ( style.indexOf( " navbar-shrink" ) > 0 ) {
				style = style.replace(" navbar-shrink", "");
			}
			navbar.setAttribute("class", style);
		} 

	}, false);

	var projectCaption = document.getElementById( "project-caption" );

	document.addEventListener("scroll", function(event){
		if ( !projectCaption ) {
			return false;
		}
		
		var style = projectCaption.className;

		if ( document.documentElement.scrollTop > 90 && style.indexOf( " project-h1-shrink" ) < 0 ) {
			style += " project-h1-shrink";
			projectCaption.setAttribute("class", style);
		} 

		if ( document.documentElement.scrollTop <= 90 ) {
			if ( style.indexOf( " project-h1-shrink" ) > 0 ) {
				style = style.replace(" project-h1-shrink", "");
			}
			projectCaption.setAttribute("class", style);
		} 

	}, false);

// for firefox
	// document.addEventListener("DOMMouseScroll", function(event){
	// 	var style = navbar.className;

	// 	if ( document.documentElement.scrollTop > 160 && style.indexOf( " navbar-shrink" ) < 0 ) {
	// 		style += " navbar-shrink";
	// 		navbar.setAttribute("class", style);
	// 	} 

	// 	if ( document.documentElement.scrollTop <= 160 ) {
	// 		if ( style.indexOf( " navbar-shrink" ) > 0 ) {
	// 			style = style.replace(" navbar-shrink", "");
	// 		}
	// 		navbar.setAttribute("class", style);
	// 	} 

	// }, false);


}

// magnific popup image
// https://blog.csdn.net/chenzhijie101/article/details/78157916

$(document).ready(function() {
	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		showCloseBtn: false,
		closeBtnInside: false,
		fixedContentPos: 'auto',
		mainClass: 'mfp-no-margins mfp-with-zoom',
		overflowY: 'auto',
		image: {
			verticalFit: false
		},
		zoom: {
		    enabled: true, 
		    duration: 300, 
		    easing: 'ease-out'
		}
    });
});


//根据加载进度来改变进度条中bar的框width值

$(document).ready(   
function() {
	var oImg = $('img');//获取所有图片
	var num = 0;

	oImg.each(function(i){
	    var cImg = new Image();//新建图像对象
	    cImg.onload = null; //防止重复加载

		cImg.onload = function() {
			num++;
			var progressBar = $( '.progress-bar' );
			var progress = $( '.progress' );

			var scale = parseInt( num / $( 'img' ).length * 100 );//实时更新数据
			progressBar[0].style.width = scale + '%';//设置进度条

			if ( num >= $('img').length ) { //判断是否加载完毕
				setTimeout( function( ) { progress.fadeOut( 200 ) }, 600 ); 
			}
		}
		cImg.src = oImg[ i ].src;//src放在load后面，是防止在IE中出错
	});
}
);



