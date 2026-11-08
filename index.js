
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
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on jnk0909@gmail.com "
      )
    })

}

let isModalOpen = false;
function toggleModal() {
  isModalOpen = !isModalOpen
  if (isModalOpen) {
    return document.body.classList.remove("modal--open")
  }
  
  document.body.classList +=  " modal--open";
}