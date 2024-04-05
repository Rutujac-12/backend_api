export const getGithubDetails = (req, res) => {
    const {username} = req.params;

    const API = https://api.github.com/users/${username};

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