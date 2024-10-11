import { render } from "./render.js"
import { data } from "./database.js"
import { body, header } from "./elementsHtml.js"
render(data)


document.addEventListener('scroll', () => {
    if(body.getBoundingClientRect().top < -200){
        body.style.backgroundColor = "rgba(5,5,5,1)"
        header.style.backgroundColor = "rgba(5,5,5,.8)"
    } else {
        body.style.backgroundColor = "rgba(5,5,5,.8)"
        header.style.backgroundColor = "rgba(5,5,5,0)"
    }
}) 

document.addEventListener('click', e => {
    data.forEach(card => {
        if(e.target.id == card.id){
            window.open(card.url_git, "_blank")
        }
    })

})
