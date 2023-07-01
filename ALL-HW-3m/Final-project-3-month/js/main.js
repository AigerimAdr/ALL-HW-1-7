// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => javaScript.style.color = event.target.innerHTML
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide()

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 6000)
}
autoSlider()

// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}

const openEndScroll = () => {
    const scrollPosition = document.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    if (scrollPosition + windowHeight >= fullHeight) {
        openModal()
    }
}

window.addEventListener('scroll', openEndScroll)
setTimeout(openModal, 10000)
modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()
