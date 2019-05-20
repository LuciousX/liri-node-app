var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "77fd7cbbba5e5fb2059dbfea63d177e9",
  secret: "d3b2b7c9c2fe496d2cd306b4ab3fcs22";
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });