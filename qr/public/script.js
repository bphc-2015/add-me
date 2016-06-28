function myFunc(){
    var xhttp;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }
    else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var str = document.getElementById("query").value;     //innerHTML not working - changed to .value
    document.getElementById("query").value="";            //str-text from input => can be used to do a query
    xhttp.onreadystatechange=function(){
       if(xhttp.readyState == 4 && xhttp.status == 200){
           document.getElementById("para").innerHTML=xhttp.responseText;
       } 
    };
    xhttp.open("POST", "/qrcode", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({'text': str}));
    
}
