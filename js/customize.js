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