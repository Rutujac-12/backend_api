import express from 'express';
const app = express();
import bodyParser from 'body-parser';



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



const blogs = [
    { id: 1, title: ' Blog 1', image: 'https://tse4.mm.bing.net/th?id=OIP.5KBYLuxJalbZAbs6OkgWoQHaE8&pid=Api&P=0&w=300&h=300', author: 'Rutuja Chaudhari' },
    { id: 2, title: ' Blog 2', image: 'https://tse4.mm.bing.net/th?id=OIP.5KBYLuxJalbZAbs6OkgWoQHaE8&pid=Api&P=0&w=300&h=300', author: 'Manas Chaudhari' },]

app.get('/blogs', (req, res) => {
    res.render('blogs', { blogs });
});

app.get('/create-blog', (req, res) => {
    res.render('create_blog');
});


app.post('/create-blog', (req, res) => {
    const { title, image, author } = req.body;
    const newBlog = {
        id: blogs.length + 1,
        title: title,
        image: image,
        author: author
    };
    console.log(req.body);
    blogs.push(newBlog);
    res.redirect('/blogs');
});


app.listen(5000, ()=>{
      console.log("Server Listening on Port 3000")
     })