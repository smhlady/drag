function drag(id){
var obj=document.getElementById(id);
var disX=0;
    var disY=0;
    obj.onmousedown=function  (ev){
����disX=ev.pageX-obj.offsetLeft;
        dis��=ev.page��-obj.offsetTop;



    };
}