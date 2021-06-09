const input = document.getElementById("search-input");
const gifNumber = document.getElementById("number-input");
const button = document.getElementById("search-button");
const gifResults = document.getElementById("gif-results");

function displayGif() {
    if (input.value || gifNumber.value) {
        fetchGif(input.value);
    }
}

button.addEventListener("click", displayGif);

const fetchGif = (searchGif) => {
    const source = new URL('https://api.giphy.com/v1/gifs/search');
    let params;
    if (gifNumber.value) {
        params = { q: searchGif, api_key: 'Cv1beK8icMH4XYsUIo4ycIEfghB6LrpF', limit: inputNumber.value };
    }
    else {
        params = { q: searchGif, api_key: 'Cv1beK8icMH4XYsUIo4ycIEfghB6LrpF' };
    }

    source.search = new URLSearchParams(params).toString();
    fetch(source)
        .then(response => response.json())
        .then(result => {
            gifResults.innerHTML = "";
            result.data.forEach(gif => {
                let imgResult= document.createElement('img');
                imgResult.setAttribute('src', gif.images.original.url);
                const li = document.createElement('li');
                li.appendChild(imgResult);
                gifResults.appendChild(li);
            });
        })
}