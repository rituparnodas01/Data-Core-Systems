const express  = require ("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/students", async(req, res) => {

    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){res.status(400).send(e); }
})


// read the data of registered students
router.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e)
    }
})

// get the individual Student data using id

router.get("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id); 

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData)
        }
    }catch(e){
        res.status(500).send(e);
    }
})

// get the individual Student data using name

router.get("/students/:name", async(req, res) => {
    try{
        const _name = req.params.name;
        const studentnameData = await Student.findOne(_name).exec(); 
        console.log(studentnameData);

        if(!studentnameData){
            return res.status(404).send();
        }else{
            res.send(studentnameData)
        }
    }catch(e){
        res.status(500).send(e);
    }
})


// update the students by its id

router.patch("/students/:id", async (req, res) => {
    // console.log("hello");
    try{
        const _id = req.params.id;
        // console.log(_id);
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(updateStudents);
    }
});


// update the students by its id

router.delete("/students/:id", async (req, res) => {
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
})



// router.patch("/students/:id", async (req, res) => {
//     console.log("hello");
//     try {
//         const _id = req.params.id;
//         console.log(_id);
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
//         res.send(updateStudents);
//     } catch (e) {
//         console.error("Error:", e);
//         res.status(404).send({ error: "Update failed" });
//     }
// });



module.exports = router;


