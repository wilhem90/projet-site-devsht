const headerContainer = document.querySelector(".header-container")
const centerContainer = document.querySelector(".center-container")


window.addEventListener("DOMContentLoaded", () => {

    // vamos preencher o header da pagina, chamamos a funcão getComponent, passando os parametro necessario nessa chamada.
    getComponent("./src/components/header/navbar.html", headerContainer)
    getComponent("./src/components/main/center/center.html", centerContainer)

})

async function getComponent(url, element) {
    try {
        const response = await fetch(`${url}`)
        const responseTxt = await response.text()
        if (response.status === 404) {
            element.innerHTML = responseTxt
            return
        }

        element.innerHTML = responseTxt
    } catch (error) {
        element.innerHTML = error
    }
}