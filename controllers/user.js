
import axios from 'axios';
export const homeController = (req, res) => {
    const myResponse = {
        message: "Yes your are at home route",
        success: true,
    }
    res.json(myResponse);
}

export const getUser = (req, res) => {
    const {userid} = req.params;
    console.log(userid);
    res.json({
        userId: userid,
        success: true
    })
}

export const signup = (req, res) => {

    const {fname, lname, email, password} = req.body;

    console.log(fname, lname, email, password);

    res.json({
       message: "Signup successfully",
       success: true
    })
}


export const getGithubDetails = (req, res) => {
    const {username} = req.params;

    const API = `https://api.github.com/users/${username}`;


    axios.get(API)
    .then((response)=>{
        res.json(response.data);
    })
    .catch((err)=>{
        console.log("Error occured while fetching github details: ", err)

        res.status(400).json({
            message: "Error fetching github details",
            success: false
        });
    })  
}



export const getcountry = (req, res) => {
    const { name } = req.params; 

    const API = `https://restcountries.com/v3.1/name/${name}`; 

    axios.get(API)
        .then((response) => {
            

            const countryData = response.data[0];
            const currencies = countryData.currencies;
            res.json(currencies);
        })
        .catch((err) => {
            console.log("Error occurred while fetching country details: ", err);

            res.status(400).json({
                message: "Error fetching country details",
                success: false
            });
        });
}

export const CityDetails = (req, res) => {
    const { cityname } = req.params; 
    
    const encodedCityName = encodeURIComponent(cityname);
    const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=hi&q=${encodedCityName}&appid=7bb9b35cc693855543828b7927f507f0`;

    axios.get(API)
    .then((response) => {
        
        const cityDetails = response.data;
        const temperature = cityDetails.main.temp;
        const weatherDescription = cityDetails.weather[0].description;
        const humidity = cityDetails.main.humidity;
        
        
        res.json({
            temperature,
            weatherDescription,
            humidity
        });
    })
    .catch((err) => {
        console.log("Error occurred while fetching weather details: ", err);
        res.status(400).json({
            message: "Error fetching weather details",
            success: false
        });
    });
}
export const youtubeDetails = (req, res) => {
    const { keyword } = req.params;
    const array = [];
    const API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&q=${keyword}&type=video&key=${process.env.API_KEY}`;

    axios.get(API)
    .then((response) => {
        const { items } = response.data;
        for (let i = 0; i <= 2 && i < items.length; i++) {
            const { videoId } = items[i].id;
            const { title, channelTitle } = items[i].snippet;
            const url = `https://www.youtube.com/watch?v=${videoId}`;
            array.push(`
                <div>
                    <h3>${title}</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
            `);
        }
        const videosHTML = array.join(''); // Joining the array elements to form a single HTML string
        // Sending HTML response
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>YouTube Videos</title>
            </head>
            <body>
                <h1>YouTube Videos</h1>
                ${videosHTML} // Embedding the videos HTML
            </body>
            </html>
        `);
    })
    .catch((err) => {
        console.log("Error occurred while fetching YouTube details: ", err);
        res.status(400).json({
            message: "Error fetching YouTube details",
            success: false
        });
    });
}