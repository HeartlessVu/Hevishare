console.clear();
location.reload();
document.writeln('|');
var f = 49;
for(var i = f;i>=f && i <= f+15;i++){
    var ifrm = document.createElement("iframe");
    var src = "https://www.flickr.com/photos/stock-preset-vn/albums/72157712561536072"+"/page"+i
    ifrm.setAttribute("src", src);
    ifrm.style.width = "320px";
    ifrm.style.height = "240px";
    ifrm.id = "ifrm" + i
    document.body.appendChild(ifrm);
}
var f = 17;
for(var i = f;i>=f && i <= f+15;i++){
    var id = 'ifrm'+i;
    document.getElementById(id).contentWindow.scrollTo(0,100000);
}