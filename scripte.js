const totop = document.querySelector(".gotopbtn");
	window.addEventListener("scroll",()=>{
		if(window.pageYOffset>100){
			totop.classList.add("active");
		}else{
			totop.classList.remove("active");
		}
	})
	var icon = document.getElementById("icon");
	icon.onclick = function(){
		document.body.classList.toggle("dark-theme");
		if(document.body.classList.contains("dark-theme")){
			icon.src = "images/sun.png";
		}else{
			icon.src = "images/moon.png";
		}
	}