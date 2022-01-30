fetch('blocknote.json').then(response => {
    response.json().then(result => {
        Add(result.cart1);
        Add(result.cart2);
        Add(result.base64);
    });
});

function Add(url) {
    const img = new Image();
    img.src = url;
    document.querySelector('.cartinki').append(img);
}