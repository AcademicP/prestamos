const express = require("express")
const loanService = require("./services/loanService");
const uri = 'mongodb+srv://silvaiberson3:iberson123@cluster0.j8pegzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { payModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive payments"); })

app.get('/payments', async(req, res)=>{
  const loan = await loanModel.find({});
  res.json( loan );
});
app.get('/payments/:code', async(req, res)=>{
  const loan = await payModel.find({code:req.params.code});
  res.json( loan );
});
app.post('/payments', async(req, res)=>{
  try {
    const {code, loanCode, money, status} = req.body;
    
    const loan=loanService.get(loanCode);
    if(!loan) throw ("LOAN_NOT_FOUND");
    if( loan.status!='PENDING') throw ("LOAN_NOT_PENDING");

    const payment = new payModel({code, loanCode, money, status });
    const data = await payment.save();
    loanService.changeStatus('PAID');
    return res.status(201).json(data);
    

  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

