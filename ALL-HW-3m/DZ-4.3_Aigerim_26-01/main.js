// Home Work -4.1

// const btn = document.querySelector(".btn");
// const cardBox = document.querySelector(".card__box");


// btn.onclick = async () => {
//     try {
//         const response = await fetch('people.json');
//         const peoples = await response.json();
    
//         peoples.forEach((i) => {
//             const card = document.createElement('div');
//             card.innerHTML = `
//             <div class='card'>
//                 <h3>Cards</h3>
//                 <h2>Name: ${i.name}</h2>
//                 <p>age: ${i.age}</p>
//                 <span>nationality: ${i.nationality}</span>
//             </div>`;
//             cardBox.append(card);
//         });
    
//         console.log(peoples);
//     } catch (error) {
//         console.error('Ошибка при выполнении запроса:', error);
//     }
// }

// Home Work- 4.2


// const btn = document.querySelector('.btn');

// const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Ошибка при выполнении GET-запроса:', error);
//         return null;
//     }
// };

// btn.onclick = async () => {
//     try {
//         const data = await fetchData('homework.json');
//         console.log(data);
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// };
