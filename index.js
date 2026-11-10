// let contrastToggle = false;

// function toggleContrast() {
//   contrastToggle = !contrastToggle;
//   if (contrastToggle) {
//     document.body.classList  += " dark-theme"
//   }
//   else {
//     document.body.classList.remove("dark-theme")
//   }  
// }


// line 1 - 11 can be replaced by this line 16 - 18)

function toggleContrast() {
  document.body.classList.toggle("dark-theme")
}


const scaleFactor = 1 / 20
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  
  for(let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}



function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_hhp4cf8',
      'template_kpks11j',
      event.target,
      '5kydEAIMK_gue1Owp'
    ).then(() => {       
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      setTimeout(()=> {
        success.classList.remove("modal__overlay--visible")
      }, 3000)
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on jnk0909@gmail.com "
      )
    })
}







// this code works//
// let x = false;

// function toggleModal() {
//   x = !x;
//   document.body.classList.toggle("modal--open", x);
//  }

// below  is the same code in Ternary oparation

// let x = false;

// function toggleModal() {
//   x = !x;

//   x
//     ? document.body.classList.add("modal--open")
//     : document.body.classList.remove("modal--open");
// }

// classList.toggle() automatically checks whether the class exists. If it does, JavaScript removes it. If it doesn't, JavaScript adds it

function toggleModal () {
  document.body.classList.toggle ("modal--open")
  
}