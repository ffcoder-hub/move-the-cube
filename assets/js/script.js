$( document ).ready(function() {

    if(!localStorage.getItem('ratio') || localStorage.getItem('ratio') == null) {
        localStorage.setItem('ratio', 50);
    }

   let ratio = +(localStorage.getItem('ratio'));
   $('.speed span').text(ratio);
   let left = 0;
   let top = 0;

    $('.box').click(function(){
        $('.result').text('Good! You caught him. Click to restart.');
    });

    $('.btn-restart').click(function(){
        window.location.replace('https://vascodeweb.github.io/move-the-cube/');
    });

    $('.btn-more').click(function(){
        ratio += 10;
        localStorage.setItem('ratio', ratio);
        $('.speed span').text(ratio);
    });

    $('.btn-less').click(function(){
        ratio -= 10;
        localStorage.setItem('ratio', ratio);
        $('.speed span').text(ratio);
    });

    $('.buttons div').mousedown(function(){
        $(this).css('box-shadow', 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset');
    });

    $('.buttons div').mouseup(function(){
        $(this).css('box-shadow', 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset');
    });

   $(document).keyup(function(e) {

        if(e.key == 'ArrowUp') {
            console.log(ratio);
            moveUp = gsap.fromTo('.box', {y: top}, {y: top - ratio, paused: true});
            moveUp.restart();
            top -= ratio;
            
        }
        if(e.key == 'ArrowDown') {
            console.log(ratio);
            moveUp = gsap.fromTo('.box', {y: top}, {y: top + ratio, paused: true});
            moveUp.restart();
            top += ratio;
        }
        if(e.key == 'ArrowLeft') {
            moveLeft = gsap.fromTo('.box', {x: left}, {x: left - ratio, paused: true});
            moveLeft.restart();
            left -= ratio;
        }
        if(e.key == 'ArrowRight') {
            moveRight = gsap.fromTo('.box', {x: left}, {x: left + ratio, paused: true});
            moveRight.restart();
            left += ratio;
        }
    
    });
    
});