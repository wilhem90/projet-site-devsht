window.onload = function() {
    const boxPost = document.querySelector(".box-post")
    getComponents("./components/CreatePost.html", boxPost)
    
}

async function getComponents(url, component) {
    const response = await fetch(url)
    const responseText = await response.text()
    component.innerHTML = responseText
    
}

