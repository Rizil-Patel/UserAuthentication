import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    // res.sendStaus(404);
    // res.json({
    //     "success" : true,
    //     "product" :[]
    // });
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});