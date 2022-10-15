
function focusLink(x) {
    x.style.color  = 'rgba(0,0,204,0.2)';
    x.style.fontSize = '40px';
}

function unfocusLink(x) {
    x.style.color = 'rgba(51,0,51,0.6)';
    x.style.fontSize = '20px';
}
function appear(x) {
    console.log('appear');
    var dem = 1;
    if (dem % 2 != 0) {
   document.getElementById(x).style.display = "block";
   dem++;
    } else {
        document.getElementById(x).style.display = "none";
        dem++;
    }
}
function hover(x) {
        x.style.display = "none";
}

function appear1(x) {
        document.getElementsByName(x).style.display = "block";
}
function disappear1(x) {
    document.getElementsByClass(x).style.display = "none";
}
 