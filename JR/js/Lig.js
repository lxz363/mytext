// JavaScript Document

var t=0;

function lighted(){
	var list=new Array();
			list=document.getElementsByTagName('li');
	var navS=document.getElementById('navSec');
	var tab1=document.getElementById('tab0');
	var tab2=document.getElementById('cldBody');
	if(t==0){
		document.getElementsByTagName('body')[0].style="color:white;background:#36282b;";
		document.getElementsByTagName('header')[0].style="background:#500a16";
		if(tab1!=null){
			tab1.style.background="url('img/bg2.png')";
			
			
        }
		if(navS!=null){
			navS.getElementsByTagName('ul')[0].style="background:#502e16";
		}
		if(tab2!=null){
			tab2.getElementsByTagName('table')[0].style="background:#8E7979";
		}
		
		
		for(var i=0;i<3;i++){
             list[i].style.borderColor="#523B3B"
             list[i].style.backgroundColor = "#500a16"; 
             list[i].onmouseover= function () {
                  this.style.backgroundColor = "#803A3B";
        }
             list[i].onmouseout= function () {
                  this.style.backgroundColor = "#500a16";
        }
		}
		
		document.getElementById('light').textContent="开灯";
        t=1;
	}
	
    else{
		document.getElementsByTagName('body')[0].style="background:#F4C7C8"; 
		document.getElementsByTagName('header')[0].style="background:#c02c38";
		if(navS!=null){
			navS.getElementsByTagName('ul')[0].style="background:#F9A3A5";
		}
		if(tab1!=null){
			tab1.style.background="url('img/bg1.png')";
			
        }
		
	    if(tab2!=null){
			tab2.getElementsByTagName('table')[0].style="background:#FFF0F0";
		}
		
		document.getElementById('light').textContent="关灯";
		for(var i=0;i<3;i++){
            list[i].style.backgroundColor = "#c02c38";
			list[i].style.borderColor="#D26363";
            list[i].onmouseover= function () {
                 this.style.backgroundColor = "#FF7B7E";
        }
            list[i].onmouseout= function () {
                 this.style.backgroundColor = "#c02c38";
        }
		}
        t=0;
	}
}