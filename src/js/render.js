export function render(name_project) {
    const portfolioContainer = document.querySelector('#portfolio-container');
    const containerItem = document.createElement('div');
    const containerItemBg = document.createElement('div');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');

    containerItem.classList.add('container-item');
    containerItemBg.classList.add('container-item-bg');

    h3.innerText = `${name_project}`;
    button.innerText = 'Acessar';

    containerItemBg.appendChild(h3);
    containerItemBg.appendChild(button);

    containerItem.appendChild(containerItemBg);

    portfolioContainer.appendChild(containerItem)
    console.log(containerItem)
}