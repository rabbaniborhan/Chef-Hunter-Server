const express =require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const chefdata =require('./chefdata.json')
const port = process.env.PORT || 5000;







app.get('/',(req,res)=>{
    res.send('chef is running')
});

app.get('/chefdata',(req,res)=>{
    res.send(chefdata)
})

app.get('/chefdata/:id',(req,res)=>{
   const id =req.params.id;
   const item = chefdata.find(pd=>pd.id==id)
   console.log(item);
   res.send(item);
})


app.listen(port,()=>{
    console.log(`chef is running on port:${port}`);
})