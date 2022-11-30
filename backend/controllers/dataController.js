const data = require("../schema/data")
const mongoose = require('mongoose')

module.exports = {
    viewAll: async(req, res) => {
        let datax = await data.find({})
        res.status(200).send(datax)
    },
    getByDate: async(req, res) => {
        let date = req.params.date.split("-")
        console.log(date)
        let [year, month, day] = date
        date = new Date(year, month-1, day, 0, 0, 0, 0)
        // date.setHours(date.getHours()-17)
        let tommorow = new Date(year, month-1, parseInt(day)+1, 0,0,0,0)
        // tommorow.setHours(tommorow.getHours()-17)
        console.log(date)
        console.log(tommorow)
        let datax = await data.find({dateTime : {"$gte": date, "$lt": tommorow}})
        res.status(200).send(datax)
    },
    getById: async(req,res) => {
        let datax = await data.find({_id : mongoose.Types.ObjectId(req.params.id)})
        res.status(200).send(datax)
    },
    postData: async(req, res) => {
        try{let datax = {
            // title : req.body.title,
            gridOne : req.body.gridOne,
            gridTwo : req.body.gridTwo,
            gridThree : req.body.gridThree,
            gridFour : req.body.gridFour,
            gridFive : req.body.gridFive,
            gridSix : req.body.gridSix,
            dateTime : req.body.dateTime
        }
        let a = await data.create(datax)
        if(a) {
            res.status(200).send(a)
        }} 
        catch(err){
            console.log(err)
            res.status(400).send({message : 'fail'})
        }
    },
    deleteData: async(req, res) => {
        try{let datax = {
            // title : req.body.title
            _id : mongoose.Types.ObjectId(req.params.id)
        }
        let a = await data.deleteOne(datax)
        if(a) {
            res.status(200).send(a)
        }} 
        catch(err){
            console.log(err)
            res.status(400).send({message : 'fail'})
        }
    },
    updateData: async(req, res) => {
        try{
            let datax = {
            // title : req.body.title,
            gridOne : req.body.gridOne,
            gridTwo : req.body.gridTwo,
            gridThree : req.body.gridThree,
            gridFour : req.body.gridFour,
            gridFive : req.body.gridFive,
            gridSix : req.body.gridSix,
            dateTime : req.body.dateTime
            }
        // let title = req.body.name
        let a = await data.updateOne({_id : mongoose.Types.ObjectId(req.params.id)}, {$set:datax})
        if(a) {
            res.status(200).send("success")
        }} 
        catch(err){
            console.log(err)
            res.status(400).send({message : 'fail'})
        }
    }
}