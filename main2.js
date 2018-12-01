const albumBox = document.getElementById('album_box')

fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJason) {
        let albumResults = myJason.results;
        // console.log(albumList);

        for (var i = 0; i < albumResults.length; i++) {
            // console.log(albumResults[i].cover_art);
            let albumCover = albumResults[i].cover_art;
            // console.log(albumCover);
            const artist = albumResults[i].artist;
            let divvy = document.createElement('div')
            divvy.classList.add('album_card')

            // let albumCard = document.createElement('div')
            // albumCard.classList.add('album_card')

            let img = document.createElement('img')
            img.src = `images/${albumCover}`;
            img.classList.add('album_card');
            img.id = artist; // or replace with artist ( which gives the exact artist name)

            albumBox.appendChild(divvy);
            divvy.appendChild(img);

            const bottomBox = document.querySelector('.bottom_box')

            img.addEventListener('click', function (e) {
                // console.log(e.target.id);
                e.preventDefault();
                const newDiv = document.createElement('div')
                newDiv.className = 'inner_box';
                newDiv.id = 'artistname';
                var newDivText = document.createTextNode(`${artist}`);
                // newDiv.textContent = newDivText.value
                // console.log(newDivText);

                bottomBox.appendChild(newDiv);

                newDiv.appendChild(newDivText);
                var itemList = document.getElementById('inner_box');
                var clearBtn = document.getElementById('clear_button');

                clearBtn.addEventListener('click', function (e) {
                    console.log("button works!")
                    bottomBox.removeChild(newDiv);

                })
            })

        }


    });
let newPost = {
    title: "hello world",
    body: "that's really something"
}

// fetch(, {
//     method: 'post',
//     body: JSON.stringify(newPost)
// })
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function(data) {
//         console.log('post request response data', data)
//     })


