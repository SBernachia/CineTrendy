import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const config = {
    params: {
        api_key: "271ce5b25d9b2daf7d96ee075805f9d2",
        language: "es-AR",
    },
}
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const popularList = await axios.get("https://api.themoviedb.org/3/movie/popular", config);
        const estrenosList = await axios.get("https://api.themoviedb.org/3/movie/now_playing", config);
        const genresList = await axios.get("https://api.themoviedb.org/3/genre/movie/list", config);
        const topRatedList = await axios.get("https://api.themoviedb.org/3/movie/top_rated", config)

    
        
        res.render("index.ejs", { 
            popularMovies: popularList.data.results,
            estrenosList: estrenosList.data.results,
            topRatedList: topRatedList.data.results,
            BASE_IMAGE_URL: BASE_IMAGE_URL,
            genresList: genresList.data.genres,
        });
    }
    catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log("server is running in port: " + port);
})