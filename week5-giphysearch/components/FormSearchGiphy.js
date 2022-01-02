setLoading(true);
const encquery = encodeURIComponent(query);
const apikey = "jUjh96cvU4xAlSbEtj6lOlKR6g8GTv1X";
const limit = 25;
const randomd = Math.floor(Math.random() * limit);
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${encquery}`;

fetch(url, {method: 'GET', headers}).then(function(res){
if(res.ok) {

}


})

