// HW 1 part 1
const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp = /\w+(\.\w+)*@gmail\.com$/

emailCheck.onclick = () => {
    if (regExp.test(emailInput.value) === "") {
        emailResult.innerHTML = "Введите почтовый адрес"
        emailResult.style.color = "red"
    } else if (regExp.test(emailInput.value)) {
        emailResult.innerHTML = 'Правильный почтовый адрес'
        emailResult.style.color = 'green'
    } else {
        emailResult.innerHTML = 'Невалидный почтовый адрес'
        emailResult.style.color = 'red'
    } 
}


// HW 1 part 2

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX <= 449 && positionY <= 0) {
        positionX += 2
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 10)
    } else if (positionX >= 449 && positionY <= 449) {
        positionY += 2
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 10)
    } else if (positionX >= 0 && positionY >= 449) {
        positionX -= 2
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 10)
    } else if (positionX <= 449 && positionY >= 0) {
        positionY -= 2
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 10)
    }
}

moveBlock()


// HW 2 part 1

const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop');
const resumeButton = document.querySelector('.resume')
const clearButton = document.querySelector('.clear')
const counter = document.querySelector('#clock').style.color = 'yellow'

let second = 0;
let interval;

const start = () => {
    const begin = () => {
        second++;
        clock.innerHTML = second;
    }
    begin()
    interval = setInterval(begin, 1000)
}

const clear = () => {
    clearInterval(interval);
    second = 0;
    clock.innerHTML = second;
}

const stop = () => { clearInterval(interval); }
const resume = () => { start() }

startButton.onclick = () => start()
stopButton.onclick = () => stop()
resumeButton.onclick = () => resume()
clearButton.onclick = () => clear()

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

// HomeWork 5

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
        return {};
    }
    };

    const convert = async (element, targetElement, targetElement2) => {
    element.oninput = async () => {
        try {
        const response = await fetchData('change.json');
        if (element === som) {
            targetElement.value = (element.value / response.usd).toFixed(2);
            targetElement2.value = (element.value / response.eur).toFixed(2);
        } else if (element === usd) {
            targetElement.value = (element.value * response.usd).toFixed(2);
            targetElement2.value = (element.value * response.usdToEur).toFixed(2);
        } else if (element === eur) {
            targetElement.value = (element.value * response.eur).toFixed(2);
            targetElement2.value = (element.value * response.euroToUsd).toFixed(2);
        }

        if (element.value === '') {
            targetElement.value = '';
            targetElement2.value = '';
        }
        } catch (error) {
        console.error('Ошибка при получении данных:', error);
        }
    };
};

convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, som, usd);




