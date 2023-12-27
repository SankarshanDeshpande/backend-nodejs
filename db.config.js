const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.zpfki0d.mongodb.net/?retryWrites=true&w=majority`

exports.dbConfig = () => {
    mongoose.connect(uri).then(()=>{
        console.log('Connected to db...')
    }).catch((err)=>{
        console.log(process.env.PASS)
        console.log(`Error connecteing to the db \n${err}`)
    })
}