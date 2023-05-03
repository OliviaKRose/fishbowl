const apiKey = VnIf8OBf4s5wH4F2jhlXbulOmjEitmxp

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function () {
    fetch(`api.giphy.com/v1/gifs/random?tag=fish&api_key=${apiKey}&rating=g`).then(function (response) {
        console.log(response.text());
    });
});