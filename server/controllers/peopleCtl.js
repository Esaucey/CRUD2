const mongoose = require("mongoose")
const peopleModel = require("../models/peopleModel")

const getPeople = async (req, res) => {
  const people = await peopleModel.find({}).sort({ createdAt: -1 })

  res.status(200).json(people)
}

const getPerson = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json({ message: "No such id" })
  }

  const person = await peopleModel.findById(id)

  if (!person) {
    return res.json({ message: "no such person" })
  }

  res.status(200).json(person)
}

const createPerson = async (req, res) => {
  const { firstName, lastName,  address, city, zip } = req.body

  const findName = await peopleModel.findOne({ firstName: firstName, lastName: lastName })

  if (findName) {
    return res.json({ message: "person already exist" })
  }

  try {
    const people = await peopleModel.create({ firstName, lastName, address, city, zip })
    res.status(200).json(people)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updatePerson = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json({message: "No such id"})
  }

  try {
    const person = await peopleModel.findByIdAndUpdate({ _id: id }, { ...req.body })

    res.status(200).json(person)
  } catch (error) {
    res.status(400).json({ error: error.message})
  }


}

const deletePerson = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json({message: "id not valid"})
  }

  try {
    const person = await peopleModel.findByIdAndDelete({ _id: id })

    res.status(200).json(person)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { getPeople, getPerson, createPerson, updatePerson, deletePerson }