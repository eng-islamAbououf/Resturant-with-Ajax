function displayContent(){
    document.getElementById("second").style.display = "inline" ;
}

function learnMoreFun(){
    var req = new XMLHttpRequest() ;
    req.onreadystatechange = () => display(req) ;
    req.open("GET","ajax/learn.html",true) ;
    req.send() ;
}

function display(req){
    if(req.status==200 && req.readyState==4){
        document.getElementById('learnMore').innerText = "Learn More" ;
        document.getElementById('discription').innerText = req.responseText;
    }
}