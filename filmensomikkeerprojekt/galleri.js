// JavaScript Document
var index=1;
document.querySelector("#next").addEventListener("click", next);
function next(){
	if(index<10){
		index++;
	}else{
		index=1;
	}
	document.querySelector("#galleri img").setAttribute("src", "img/fotos/web"+index+".jpg");
}
document.querySelector("#back").addEventListener("click", back);
function back(){
	if(index>1){
		index--;
	}else{
		index=10;
	}
	document.querySelector("#galleri img").setAttribute("src", "img/fotos/web"+index+".jpg");
}