console.log('Loaded!');
//move
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight() {
     marginLeft = marginLeft + 10;
     if(marginLeft <== 500px)
     {
    img.style.marginLeft = marginLeft + 'px';}
    else
    {
        alert('bas have');
    }
}

img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    
};