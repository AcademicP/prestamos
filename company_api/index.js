const express = require("express")
const uri = 'mongodb+srv://silvaiberson3:iberson123@cluster0.j8pegzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { companyModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive Company"); })

app.get('/companies', async(req, res)=>{
  const company = await companyModel.find({});
  res.json( company );
});
app.get('/companies/:ruc', async(req, res)=>{
  const person = await companyModel.find({ruc:req.params.ruc});
  res.json( person );
});
app.post('/companies', async(req, res)=>{
  try {
    const ruc = req.body.ruc;
    const businessname = req.body.businessname;
    const legalname = req.body.legalname;
    const address = req.body.address;

    const person = new companyModel({ ruc,businessname,legalname, address});

    const data = await person.save();
    return res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

