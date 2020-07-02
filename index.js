ScrollReveal().reveal('.views__column1', {
    delay: 500,
    duration: 1000,
    reset: true,
    distance: '50px',
     origin: 'left' 
});
ScrollReveal().reveal('.views__video', {
    delay: 1000,
    duration: 1000,
    reset: true,
    distance: '50px',
    origin: 'right' 
});
ScrollReveal().reveal('.views__item', {
    delay: 500,
    duration: 1000,
    reset: true,
    distance: '50px',
     origin: 'right' 
});
ScrollReveal().reveal('.description__heading', {
    delay: 500,
    duration: 2000,
    reset: true,
    distance: '50px',
     origin: 'left' 
});
ScrollReveal().reveal('.heading-3', {
    delay: 500,
    duration: 2000,
    reset: true,
    distance: '50px',
     origin: 'top' 
});
ScrollReveal().reveal('.about__column1', {
    delay: 500,
    duration: 1500,
    reset: true,
    distance: '50px',
     origin: 'left' 
});
ScrollReveal().reveal('.about__column2', {
    delay: 1000,
    duration: 1500,
    reset: true,
    distance: '50px',
     origin: 'right'  
});
ScrollReveal().reveal('.trends__header', {
    delay: 1000,
    duration: 2500,
    reset: true,
    distance: '50px',
     origin: 'right' 
});
ScrollReveal().reveal('.cta__container', {
    delay: 1000,
    duration: 2500,
    reset: true,
    distance: '50px',
     origin: 'left' 
});


document.querySelector('.button').addEventListener('click', function(){
    document.querySelector('.slidemenu').classList.toggle('hidden');
    // document.querySelector('.nav__logo').classList.toggle('hide');
    // document.querySelector('.logo').style.filter= "brightness(50)";
    // document.querySelector('.logo').classList.toggle('filter');
    document.querySelector('.nav__text').classList.toggle('hide');
    document.querySelector('.button-change').classList.toggle('nav__button1');
    document.querySelector('.button-change').classList.toggle('nav__hide1');
    document.querySelector('.button-change2').classList.toggle('nav__button2');
    document.querySelector('.button-change2').classList.toggle('nav__hide2');
    const element = document.querySelector("#slidemenu");

      if(element.classList.contains("hidden")) {
        document.querySelector('.container').style.overflow = 'visible';
} else {
    document.querySelector('.container').style.overflow = 'hidden';

}


})
let prevScrollpos = window.pageYOffset;
 window.onscroll = function (){
    let currentScrollPos = window.pageYOffset;

   if (prevScrollpos > currentScrollPos  ) {
    if (currentScrollPos === 0 || prevScrollpos === 0 ) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.remove("nav__black");
      document.querySelector('.nav__text').style.color = "black";
      document.querySelector('.nav__button1').style.backgroundColor= "black";
      document.querySelector('.nav__button2').style.backgroundColor= "black";
   
      document.querySelector('.logo').style.filter= "brightness(0)";
      // document.querySelector('::before').style.backgroundColor= "black";
      document.querySelector('.nav__container').style.height = "10rem";


      // prevScrollpos = currentScrollPos;
    } else if (prevScrollpos > currentScrollPos && prevScrollpos > 0) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.add("nav__black");
      document.querySelector('.nav__text').style.color = "white";
      document.querySelector('.nav__button1').style.backgroundColor= "white";
      document.querySelector('.nav__button2').style.backgroundColor= "white";
      document.querySelector('.logo').style.filter= "brightness(50)";
      // document.querySelector('.nav__button').style.backgroundColor = "white";
    //   document.querySelector('.nav__button::before').style.backgroundColor= "white";
    document.querySelector('.nav__container').style.height = "7rem";

      prevScrollpos = currentScrollPos;
    }
   
  } else if (prevScrollpos < currentScrollPos )  {
     if (currentScrollPos <= 130) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.add("nav__black");
      document.querySelector('.nav__text').style.color = "white";
      document.querySelector('.nav__button1').style.backgroundColor= "white";
      document.querySelector('.nav__button2').style.backgroundColor= "white";
      document.querySelector('.logo').style.filter= "brightness(50)";

      // document.querySelector('.nav__button').style.backgroundColor = "white";
      document.querySelector('.nav__container').style.height = "7rem";

      prevScrollpos = currentScrollPos;
     }else if (prevScrollpos < currentScrollPos && currentScrollPos > 100)  {
   
      document.querySelector('.nav').style.top = "-70px";
      document.querySelector('.nav__container').classList.remove("nav__black");
      document.querySelector('.nav__text').style.color = "black";
      // document.querySelector('.nav__button').style.backgroundColor = "black";  
      document.querySelector('.nav__container').style.height = "10rem";
      document.querySelector('.nav__button1').style.backgroundColor= "white";
      document.querySelector('.nav__button2').style.backgroundColor= "white";
      document.querySelector('.logo').style.filter= "brightness(0)";



    //   document.querySelector('.nav__text').style.color = "white";
      prevScrollpos = currentScrollPos;
      
      
    }
    
    
    
  } 
   
    


  
  


}