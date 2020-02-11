/* Mobile Menu */

function openNav() {
  	document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
  	document.getElementById("mySidenav").style.right = "-250px";
}

/* Galler */

function toggleGallery() {
	document.getElementsByClassName("gallery-container")[0].classList.toggle("show");
	if(document.getElementById("toggle").innerText === 'MORE NEWS'){
		document.getElementById("toggle").innerText = "LESS NEWS";
	}

	else{
		document.getElementById("toggle").innerText = "MORE NEWS";
	}
}

/* slider */

var slider = document.getElementById("carousel-wrapper");

var next = document.getElementById("next");
next.addEventListener("click", slider3);

var prev = document.getElementById("prev");
prev.addEventListener("click", slider1);

var slide1 = document.getElementById("dot-1");
slide1.addEventListener("click", slider1);

var slide2 = document.getElementById("dot-2");
slide2.addEventListener("click", slider2);

var slide3 = document.getElementById("dot-3");
slide3.addEventListener("click", slider3);

function slider3(){
	var slideWidth = document.getElementById("slider-wrap").clientWidth;
	slideWidth = slideWidth*2;
	slider.style.transform = `translate(-${slideWidth}px)`;
	slide3.classList.add("active");
	slide1.classList.remove("active");
	slide2.classList.remove("active");
}

function slider2(){
	var slideWidth = document.getElementById("slider-wrap").clientWidth;
	slider.style.transform = `translate(-${slideWidth}px)`;
	slide2.classList.add("active");
	slide1.classList.remove("active");
	slide3.classList.remove("active");
}

function slider1(){
	slider.style.transform = "translateX(0)";
	slide1.classList.add("active");
	slide2.classList.remove("active");
	slide3.classList.remove("active");
}