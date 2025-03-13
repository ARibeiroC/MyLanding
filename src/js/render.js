export function render(database) {


    database.forEach(card => {
        const portfolioContainer = document.querySelector('#portfolio-container')
        const containerItem = document.createElement('div')
        const containerItemBg = document.createElement('div')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const button = document.createElement('button')
        const filter = document.createElement('div')

        containerItem.classList.add('container-item')
        containerItemBg.classList.add('container-item-bg')
        filter.classList.add('filter')

        h3.innerText = `${card.title}`
        h4.innerText = 'EM DESENVOLVIMENTO'
        button.innerText = 'Acessar'
        button.setAttribute('id', `${card.id}`)

        containerItemBg.appendChild(filter)
        filter.appendChild(h3)
        filter.appendChild(h4)
        filter.appendChild(button)

        containerItem.appendChild(containerItemBg)
        containerItemBg.style.backgroundImage = `url(${card.url_image})`
        portfolioContainer.appendChild(containerItem)


        console.log(card.id)
    });
}