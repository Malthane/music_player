const img = document.querySelector("img");
const music = document.querySelector("audio");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const previous = document.getElementById("prev");

const songs = [
  {
    name: "music-1",
    title: "Chilled",
    artist: "Jay-z",
    pic: "pix-1",
  },
  {
    name: "music-2",
    title: "Romantic",
    artist: "Linkin Park",
    pic: "pix-2",
  },
  {
    name: "music-3",
    title: "Ghungroo",
    artist: "Arijit-Singh",
    pic: "pix-3",
  },
  {
    name: "music-4",
    title: "Night",
    artist: "Crawler",
    pic: "pix-4",
  },
];

let isPlay = false;

//for play Music
const playMusic = () => {
  ///this function calling right away here
  isPlay = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//for pause music
const pauseMusic = () => {
  isPlay = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

//adding condition if isPlay is true then pauseMusic function
// should work else playMusic function should work
play.addEventListener("click", () => {
  // if(isPlay) {
  //     pauseMusic()
  // } else {
  //     playMusic()
  // }

  isPlay ? pauseMusic() : playMusic();
});


//songs are  getting load from array of objects
const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "audio/" + songs.name + ".mp3";
  img.src = "images/" + songs.pic + ".jpg";
};
songIndex = 0;
// loadSongs(songs[2]);


//play Next song
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
  // initialy songIndex is 0(line no 62) so it adding +1 to it (66),
  // it will become 0+1=1 and 1%3 (3 is song lenght) that is 1 (line no 69)
  //  0 = (0 + 1) = 1 % 3 = 1;
  //      (1 + 1) = 2 % 3 = 2;
  //      (2 + 1) = 3 % 3 = 0
  //
};

//play previous song
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

//on next and previous id we are calling new functions
next.addEventListener("click", nextSong);
// next.addEventListener('click', nextSong());  dont write like this bcz it will call right away here
previous.addEventListener("click", prevSong);
