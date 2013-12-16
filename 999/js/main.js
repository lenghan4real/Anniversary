$(document).ready(function() {
    $('body').css('visibility', 'visible');

    $('#title-line1').lettering();
    $('#title-line2').lettering();

    (new TimelineLite({onComplete: initScrollAnimations}))
        .from($('#title-line1 span'), 0.4, {delay: 1, css: {right: '1000px'}, ease: Back.easeOut})
        .from($('#title-line2'), 0.4, {css: {top: '100px', opacity: '0'}, ease: Expo.easeOut})
        .to($('#title-info'), 0.5, {css: {opacity: 0.99, 'margin-top': 0}, delay: -1, ease: Quad.easeOut});

    function initScrollAnimations() {
        var controller = $.superscrollorama();

        // title
        $('.title-line span').each(function() {
            controller.addTween(10, TweenMax.to(this, 0.5, {
                css: {
                    top: Math.random() * - 200 - 600,
                    left: (Math.random() * 1000) - 500,
                    rotation: Math.random() * 720 - 360,
                    'font-size': Math.random() * 300 + 150
                },
                ease: Quad.easeOut
            }), 200);
        });

        controller.addTween(10, TweenMax.to($('#title-line1'), 0.75, {css: {top: 600}, ease: Quad.easeOut}), 200);
        controller.addTween(10, TweenMax.to($('#title-line2'), 0.75, {css: {top: 200}, ease: Quad.easeOut}), 200);

        // begin
        controller.addTween($('#begin h1'), TweenMax.from($('#begin h1'), 0.75, {css: {letterSpacing: 20, opacity: 0}, ease: Quad.easeOut}), 200);
    }
});