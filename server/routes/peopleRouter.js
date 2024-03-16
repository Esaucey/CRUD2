const express = require("express")
const { getPeople, getPerson, createPerson, updatePerson, deletePerson } = require("../controllers/PeopleCtl")

const router = express.Router()

router.get("/", getPeople)
router.get("/:id", getPerson)
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)
router.post("/", createPerson )

module.exports = router