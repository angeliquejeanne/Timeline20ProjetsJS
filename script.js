const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 30}px`
    cursor.style.left = `${e.pageX - 30}px`
})

const allLinks = document.querySelectorAll("header h1, header p, header span");

allLinks.forEach(link => {

    const location = link.getAttribute('data-loc');

    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        cursor.style.backgroundImage = `url(src/${location}.png)`;
    })

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = `none`;
    })

});