// REG EXP
const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER HW-3.1

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

let currentIndex = 0
let intervalId

const switchTab = () => {
    hideTabContent();
    currentIndex = currentIndex + 1
    if (currentIndex === tabContent.length) {
        currentIndex = 0
    }
    showTabContent(currentIndex)
}

intervalId = setInterval(switchTab, 3000)

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

// MODAL HW-3.2
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


//HW 6.1
const card = document.querySelector('.card')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
let count = localStorage.getItem('count') || 1

const fetchData = async (count) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();
        card.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <br>
        <span>${data.completed}</span>
        `;
        localStorage.setItem('count', count);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);

    }
};

fetchData(count);

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    fetchData(count);
};


btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    fetchData(count);
};

//HW 6.2
const postData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
}

postData()

// Weather

const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    const cityName = document.querySelector('.cityName')
    cityName.oninput = (event) => {
        const cityNameValue = event.target.value
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                city.innerHTML = data?.name || 'City is not found'
                temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg; C' : '.......'
            })
    }
}

citySearch()






