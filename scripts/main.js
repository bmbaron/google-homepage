d var x = document.getElementById("button1");

x.onclick = function(){
    var search = document.getElementById('searchbox').value;
    window.open("http://www.google.com/"+"search?q="+search);
};

var y = document.getElementById("button2");

y.onclick = function(){
    var search = document.getElementById('searchbox').value;
    window.open("http://www.google.com/"+"search?q="+search+"&btnI=1");    

};
