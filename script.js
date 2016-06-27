function myFunc(){
    var xhttp;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }
    else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange=function(){
       if(xhttp.readyState == 4 && xhttp.status == 200){
           var str = document.getElementById("query").innerHTML;
           document.getElementById("query")="";
           document.getElementById("para").innerHTML=xhttp.responseText;
       } 
    };
    xhttp.open("GET", "text.txt", true);
    xhttp.send();
}