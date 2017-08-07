console.log('Loaded!');
//move
var img= document.getElementById('madi');
var marginlft=0;
moveRight() {
    var marginLeft=marginLeft + 10 ;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    
};