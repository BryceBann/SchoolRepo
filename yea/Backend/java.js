function saveArtist(){
    artist = $("#artistInput").val()
    console.log(artist)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d1c2d7f67mshddf82a9182fa081p19577ajsn1520b3beb5fa',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/artist?${artist}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    
    $("#search-button").on("click",saveArtist)
    

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3d1c2d7f67mshddf82a9182fa081p19577ajsn1520b3beb5fa',
// 		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify81.p.rapidapi.com/tracks', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     const choice = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3d1c2d7f67mshddf82a9182fa081p19577ajsn1520b3beb5fa',
//             'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://spotify81.p.rapidapi.com/top_200_tracks', choice)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3d1c2d7f67mshddf82a9182fa081p19577ajsn1520b3beb5fa',
// 		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify81.p.rapidapi.com/artist_related?id=${artist}', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));