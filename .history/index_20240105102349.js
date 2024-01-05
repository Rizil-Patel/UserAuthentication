import express from 'express';

const app = express();
const port = 5000;
express.static("./public")
app.set("view engine","ejs");
app.get('/', (req, res) => {
    // res.sendStaus(404);
    // res.json({
    //     "success" : true,
    //     "product" :[]
    // });
    res.render("index", {name :"Rizil"});
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});