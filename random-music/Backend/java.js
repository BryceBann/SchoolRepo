function saveArtist(){
    artist = $("#artistInput").val()
    console.log(artist)
    $("#searchedArtist").text(" " + artist)

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
    

