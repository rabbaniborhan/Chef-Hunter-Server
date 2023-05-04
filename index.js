const express =require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('chef is running')
});

app.get('/chefdata',(req,res)=>{
    res.send('it is chef data')
})


app.listen(port,()=>{
    console.log(`chef is running on port:${port}`);
})