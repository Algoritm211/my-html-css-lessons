

window.addEventListener("DOMContentLoaded", () => {

  // work with tabs
  const tabs = document.querySelectorAll(".tabs__item");

  tabs.forEach((tab) => {
    if (!tab.classList.contains("tabs__item_active")) {
      tab.addEventListener("click", () => {
        tabs.forEach((otherItem) => {
          if (otherItem.classList.contains("tabs__item_active")) {
            otherItem.classList.remove("tabs__item_active");
          }
        });
        tab.classList.add("tabs__item_active");
      });
    }
  });

  // work with photo carousel
  $(".carousel").slick({
    autoPlay: true,
    autoPlaySpeed: 5000,
    prevArrow:
      `<div class="carousel__arrow carousel__prev"><i class="fas fa-chevron-left"></i></div>`,
    nextArrow:
      `<div class="carousel__arrow carousel__next"><i class="fas fa-chevron-right"></i></div>`
  })

  // work with video
  const videos = document.querySelectorAll('#video')


  videos.forEach((video) => {

    const playBtn = video.nextSibling

    playBtn.addEventListener('click', () => {
      video.play()
      video.setAttribute('controls', 'controls')
      playBtn.style.display = 'none'
    })


    video.addEventListener('ended', function () {
      this.src = this.src
      playButton.style.display = 'block'
      video.removeAttribute('controls')
    })
  })

  // work with page block anchors
  const anchors = document.querySelectorAll('.scroll-to')

  for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault()

      const blockId = anchor.getAttribute('href')

      document.querySelector(blockId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  // work with popup window

  function popupOpen() {
    document.querySelector('.popup').classList.add('popup__active')
    document.body.style.overflow = 'hidden'

  }

  function popupClose() {
    document.querySelector('.popup').classList.remove('popup__active')
    document.body.style.overflow = 'visible'
  }

  const buttonSignIn = document.querySelector('.useful__btn')
  const buttonClosePopup = document.querySelector('.popup__close')

  buttonSignIn.addEventListener('click', popupOpen)
  buttonClosePopup.addEventListener('click', popupClose)



})

