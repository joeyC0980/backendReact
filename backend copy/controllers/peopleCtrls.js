const db =require("../models")
console.log(db)

const getPeople = (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    db.People.find({})
    .then((foundPeople) => {
        if(!foundPeople){
            res.status(404).json({message: 'Cannot find People'})
        } else {
            res.status(200).json({data: foundPeople})
        }
    })
}

const createPeople = (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    db.People.create(req.body)
    .then((createdPerson) => {
        if(!createdPerson){
            res.status(400).json({message: 'Cannot create People'})
        } else {
            res.status(201).json({data: createdPerson, message: 'Person created'})
        }
    })
}

const updatePerson = (req, res) => {
    db.People.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPerson) => {
        if(!updatedPerson){
            res.status(400).json({Message: 'Could not update person'})
        } else {
            res.status(200).json({data: updatedPerson, Message: "Person updated"})
        }
    })
}

const deletePerson = (req, res) => {
    db.People.findByIdAndDelete(req.params.id)
    .then((deletedPerson) => {
        if(!deletedPerson){
            res.status(400).json({Message: 'Could not delete person'})
        } else {
            res.status(200).json({data: deletedPerson, Message: "Person deleted"})
        }
    })
}

module.exports = {
    getPeople,
    createPeople,
    updatePerson, 
    deletePerson
}