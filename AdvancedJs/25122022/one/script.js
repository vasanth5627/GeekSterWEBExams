const img = document.getElementsByTagName('img');
const container = document.getElementsByClassName('container')[0];

init();

function init() {
    fetchApi();
}

let html = "";
async function fetchApi() {
    
    for(let i = 0; i < 9; i++){
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
         const jsonData = await response.json();
         html += `<img src="${jsonData.message}" alt="photo">`
    }
    container.innerHTML = html;
}
