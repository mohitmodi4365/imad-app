console.log('Loaded!');
//move
var img= document.getElementById('madi');
moveRight() {
    
    
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    img.style.marginLeft='100px';
};