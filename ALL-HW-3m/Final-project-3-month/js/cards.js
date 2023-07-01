const cards = document.querySelector('.cards');

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=12';
const fetchData = async () => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);

        data.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card__image');
        cardImage.src = '../img/fall.jpg';
        card.append(cardImage);

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = item.title;
        card.append(cardTitle);

        const cardSpan = document.createElement('span');
        cardSpan.classList.add('card__span');
        cardSpan.textContent = item.body;
        card.append(cardSpan);

        cards.append(card);
        });
    } catch (e) {
        console.error(e, 'Error');
    } finally {
        console.warn('Warning');
    }
};

fetchData();




