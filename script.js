function addToCart() {
    window.open('cart.html', '_blank');
}
function changeImage(imageSrc) {
    document.querySelector('.large-image').src = imageSrc;
    function proceedToCheckout() {
        window.location.href = 'payment.html';
    }
function changeImage(thumbnail) {
    var largeImage = document.querySelector('.large-image');
    largeImage.src = thumbnail;
}
function addToCart() {
    window.location.href = 'cart.html';
}
  
}
