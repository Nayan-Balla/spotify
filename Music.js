let txt = document.querySelector("#in");
console.log(txt.value);



let but = document.querySelector("#but");

txt.addEventListener("focus", () => {
    if (txt.value === "Search") {
        txt.value = "";
    }
});

txt.addEventListener("blur", () => {
    if (txt.value === "") {
        txt.value = "Search";
    }
});

but.addEventListener("click", ()=>{
    console.log (txt.value);
    setTimeout(() => {
    but.style.boxShadow="none";
    }, 50);
    setTimeout(() => {
    but.style.boxShadow="1px 1px 1px black";
    }, 200);
})
 
but.addEventListener("mouseenter", ()=>{
let set = document.getElementById("but");
    set.style.boxShadow="1px 1px 1px black";
})

but.addEventListener("mouseleave", ()=>{
let set = document.getElementById("but");
    set.style.boxShadow="none";
})




// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1a40fc294emshfc9773e1672af2fp1d01bcjsn0614663cfa40',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };

// const query = 'arijit'; // Search term (can be dynamic)

// fetch(`https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
//   .then(response => response.json())
//   .then(response => {
//     console.log(response);
    
//     // For example, access top track
//     const track = response.tracks.items[0].data; 
//     console.log("Track Name:", track.name);
//     console.log("Artist:", track.artists.items[0].profile.name);
//     console.log("Name:", track.artists.items[0].profile.url);

//   })
//   .catch(err => console.error(err));

  let Lyrics_ = document.getElementById("Lyrics_");

  if (Lyrics_.innerText !== ""){
    // Lyrics_.style.backgroundColor="white";
  let Lyrics = document.getElementById("Lyrics");
    Lyrics.style.backgroundColor="white";
  

  }
