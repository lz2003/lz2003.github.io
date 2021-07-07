var container = document.querySelector('.landing');

// Gradient
var gradients = {
    start: '#000b2b',
    end: '#240040',
    deg: 0
}

// Gradient animation 
var gradAnimation = anime({
    targets: gradients,
    start: '#000b2b',
    end: '#240040',
    deg: 360,
    duration: 7000,
    delay: 2000,
    easing: 'easeOutQuad',
    round: 1,
    loop: true,
    direction: 'alternate',
    update: function(a) {
      var value1 = a.animations[0].currentValue;
      var value2 = a.animations[1].currentValue;
      var value3 = a.animations[2].currentValue;
      container.style.backgroundImage = 'linear-gradient('+value3+'deg, '+value1+' 0%, '+value2+' 100%)'
    }
});

// Interests
var interests = {
  opacityIn: 1,
  opacityOut: 0,
  translate: ["-1.1em", 0],
  easing: "easeOutExpo",
  durationIn: 750,
  durationOut: 1000,
  delayIn: (el, i) => 50 * i,
  delayOut: 2000
};

/*
var intAnimation = anime.timeline ({loop:true})
  .add({  
  targets: ' .one',
  opacity: interests.opacityIn,
  translateY: interests.translate,
  translateZ: 0,
  duration: interests.durationIn,
  delay: interests.delayIn
  })
  .add ({
    targets: ' .one',
    opacity: interests.opacityOut,
    duration: interests.durationOut,
    easing: "easeOutExpo",
    delay: interests.delayOut
  })
  .add({  
    targets: ' .two',
    opacity: interests.opacityIn,
    translateY: interests.translate,
    translateZ: 0,
    duration: interests.durationIn,
    delay: interests.delayIn
  })
  .add ({
    targets: ' .two',
    opacity: interests.opacityOut,
    duration: interests.durationOut,
    easing: "easeOutExpo",
    delay: interests.delayOut
  })
  .add({  
    targets: ' .three',
    opacity: interests.opacityIn,
    translateY: interests.translate,
    translateZ: 0,
    duration: interests.durationIn,
    delay: interests.delayIn
    })
  .add ({
    targets: ' .three',
    opacity: interests.opacityOut,
    duration: interests.durationOut,
    easing: "easeOutExpo",
    delay: interests.delayOut
  })
*/

var picture = anime({ 
  targets: ".me",
  width: [0, "150px"],
  height: [0, "150px"],
  translateY: ["75px", 0],
  duration: 500,
  easing: "easeInOutQuad",
  loop: false
})