import "./playlist-view";
import "./player-view";


//playlist view toggle
const playlist = document.querySelector(".playlist");
const hamburger = document.querySelector("#hamburger");
const backButton = document.querySelector("#back-button");
const playlistToggle = () => {
  playlist.classList.toggle("playlist--active")
};
hamburger.addEventListener("click", (event) => {
  event.preventDefault();
  playlistToggle();
});
backButton.addEventListener("click", (event) => {
  event.preventDefault();
  playlistToggle();
});