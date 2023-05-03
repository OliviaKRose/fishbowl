const apiKey = "VnIf8OBf4s5wH4F2jhlXbulOmjEitmxp";

window.addEventListener(
    "DOMContentLoaded", () => {
        const myButton = document.getElementById('myButton')
        myButton.addEventListener('click', function () {
            console.log("click")
            fetch(`https://api.giphy.com/v1/gifs/random?tag=fish&api_key=${apiKey}&rating=g`).then(async function (response) {
                const gif = await response.json();
                const gifLink = gif.data.embed_url
                const gifHome = document.getElementById('homeOfGIFs')
                const gifHolder = document.createElement("span")
                gifHolder.innerHTML = `<iframe src=${gifLink}>`
                gifHome.appendChild(gifHolder)
            });
        });
    }
)
