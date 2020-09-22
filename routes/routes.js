const express = require("express")
const router = express();
const axios = require("axios");
const API = require("../confidential/apiKey");

router.get('/', (req, res) =>{
    res.render("home")
})

router.get('/movie/:query', async function(req,res){

    const query = req.params.query;
    const reqURL = `https://api.themoviedb.org/3/search/movie?api_key=${API.key}&language=en-US&query=${query}&page=1&include_adult=false`;

    await axios.get(reqURL)
        .then(function(response){
            res.json(response.data);
        })
        .catch(function(error){
            res.json(error);
        })
})

module.exports = router