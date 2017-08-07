console.log('Loaded!');
//move
var img= document.getElementById('madi');
moveRight() {
    var marginLeft;
    
    var marginLeft=marginLeft + 10 ;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    
};