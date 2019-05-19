require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

function Search(song, concert, movie, whatever) {
  this.song = song;
  this.concert = concert;
  this.movie = movie;
  this.whatever = whatever;
}