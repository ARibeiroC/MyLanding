export const data = []

class CardPortfolio {
    constructor(title, url_image, url_git) {
        this.id = id()
        this.title = title
        this.url_image = url_image
        this.url_git = url_git
    }
}

function id() {
    return Math.random().toString(36).substring(2, 9)
}

const card1 = new CardPortfolio("Code Seven Academy", "src/img/works/codeSevenAcademy.png", "https://github.com/aribeiroc/codeSevenAcademy")
const card2 = new CardPortfolio("Montanha Top Team", "src/img/works/montanhatopteam.jpg", "https://github.com/aribeiroc/montanhatopteam")
const card3 = new CardPortfolio("Formulário MultStep - React", "src/img/works/multstep.png", "https://github.com/ARibeiroC/projeto_formulario_multistep")
const card4 = new CardPortfolio("E-Commerce Replica Kabum", "src/img/works/kabum.png", "https://github.com/ARibeiroC/replica_ecommerce_kabum")
const card5 = new CardPortfolio("Projeto em desenvolvimento", "src/img/works/embreve.png")
const card6 = new CardPortfolio("Projeto em desenvolvimento", "src/img/works/embreve.png")

data.push(card1)
data.push(card2)
data.push(card3)
data.push(card4)
// data.push(card5)
// data.push(card6)