$(document).ready(function() {
    if(window.chrome != undefined) {
        $('.img').addClass('chrome')
        console.log('Chrome detected')
    }
})