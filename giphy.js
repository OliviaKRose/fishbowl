const apiKey = "VnIf8OBf4s5wH4F2jhlXbulOmjEitmxp";
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function (event) {
    console.log("click");
    myButton.color='red'
    // fetch(`api.giphy.com/v1/gifs/random?tag=fish&api_key=${apiKey}&rating=g`).then(function (response) {
    //     const gif = response.data;
    //     console.log("hello");
    // });
});