const headerContainer = document.querySelector(".header-container")

headerContainer.innerHTML = `<h2>Testando nosso script</h2>`

window.addEventListener("DOMContentLoaded", () => {

    // vamos preencher o header da pagina, chamamos a funcão getComponent, passando os parametro necessario nessa chamada.
    getComponent("/src/components/header/navbar.html", headerContainer)

    async function getComponent(url, element) {
        try {
            const response = await fetch(`${url}`)
            const responseTxt = await response.text()
            if (response.status === 404) {
                element.innerHTML = responseTxt
                return
            }

            headerContainer.innerHTML = responseTxt
        } catch (error) {
            headerContainer.innerHTML = error
        }
    }
})