import express from 'express';

const app = express();


const userData = [
    { id: 1, name: "Rutuja", RollNo: "1", city: "Shirpur" },
    { id: 2, name: "Punam", RollNo: "2", city: "Shirpur" },
    { id: 3, name: "Gayatri", RollNo: "3", city: "Pune" },
    { id: 4, name: "dipashri", RollNo: "4", city: "Nashik" },
    { id: 5, name: "anushka", RollNo: "5", city: "Nashik" },
    { id: 6, name: "pruthviraj", RollNo: "5", city: "Nashik" },
];

app.get('/', (req, res) => {
    const myResponse = {
        message: "Yes you are at home route",
        success: true,
    };
    res.json(myResponse);
});

app.get('/api/getuser/:userid', (req, res) => {
    const { userid } = req.params;
    console.log(userid);


    const user = userData.find(user => user.id === parseInt(userid));
    if (user) {
        res.json({
            success: true,
            userDetails: user
        });
    } else {
        res.json({
            success: false,
            message: "User not found"
        });
    }



res.json({
    success:true
})
    
})

app.listen(3000, () => {
    console.log("Server is listening");
});