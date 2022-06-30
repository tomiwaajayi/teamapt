const coinOne = document.getElementById('coin-1')
const coinTwo = document.getElementById('coin-2')
const coinOneTimeline = gsap.timeline()
const coinTwoTimeline = gsap.timeline()

coinOneTimeline
  .to(coinOne, {
    y: '45',
    opacity: 1,
    delay: 0.4,
    duration: 1,
  })
  .to(coinOne, {
    y: '0',
    repeat: -1,
    duration: 1.5,
    ease: 'power1.inOut',
    yoyo: true,
  });


coinTwoTimeline
  .to(coinTwo, {
    y: '0',
    duration: 1,
    delay: 0.4,
    opacity: 1,
  })
  .to(coinTwo, {
    y: '45',
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  });