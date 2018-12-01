var randomAlbums = document.getElementById('secondColumn')
const chooseBtn = document.getElementById('button')

fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function (response) {
        return response.json()
    })
    .then(function (albums) {
        var music = albums.results

        console.log(music);

        for (var i = 0; i < 3; i++) {
            var image = document.createElement('img')
            image.src = "images/" + music[Math.floor(Math.random() * music.length)].cover_art
            image.setAttribute('id', 'covers')
            randomAlbums.appendChild(image)
        }
    })

// chooseBtn.addEventListener('click', function () {
//     console.log('button works!');
//     document.location.href = 'file:///Users/CC/Qtr1_Assessment/playlist/index2.html';
// });



