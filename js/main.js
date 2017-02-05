function getE(id){
return document.getElementById(id);
}
 var x=[],y=[];
var kil;
getE('createel').onclick=function(){
//   var el = document.createElement('div');
//    el.style.width="100px";
//    el.style.background="gray";
//    el.style.height="100px";
//    main.appendChild(el);
    getE('some').style.display="block";
}


getE('width').onblur=function(){
    getE('some').style.width=this.value+"px";
}

getE('height').onblur=function(){
    getE('some').style.height=this.value+"px";
}

getE('b1').onclick=function(){
    getE('some').style.background="red";
}
getE('b2').onclick=function(){
    getE('some').style.background="green";
}
getE('b3').onclick=function(){
    getE('some').style.background="blue";
}

getE('koord').onclick=function(){
     kil=prompt("введіть кількість пар координат");
   
    for(var i=0;i<kil;i++){
        x[i]=prompt("введіть координати по осі Х у %");
    }
     for(var i=0;i<kil;i++){
        y[i]=prompt("введіть координати по осі Y у %");
    }
  
  getE('block').style.display="none";
}


var ch=0;
getE('some').onmouseover=function(){
    
    getE('some').style.marginLeft=x[ch]+"%";
    getE('some').style.marginTop=y[ch]+"%";
    ch++;
    if(ch==kil){
        ch=0;
    }
}

