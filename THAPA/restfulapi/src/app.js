const express = require("express");
// require("./db/conn");
// const Student = require("./models/students")
// const studentRouter = require ("./routers/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
const sqldblocal = require("./db/sqldb");
// app.use(studentRouter);

// Create a new students

// app.post("/students", (req, res) =>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });


//     // res.send("hello from the other side");
// });


// app.post("/students", async(req, res) => {

//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//         res.status(201).send(createUser);
//     }catch(e){res.status(400).send(e); }
// })


// // read the data of registered students
// app.get("/students", async(req, res) => {
//     try{
//         const studentsData = await Student.find();
//         res.send(studentsData);
//     }catch(e){
//         res.send(e)
//     }
// })

// // get the individual Student data using id

// app.get("/students/:id", async(req, res) => {
//     try{
//         const _id = req.params.id;
//         const studentData = await Student.findById(_id); 

//         if(!studentData){
//             return res.status(404).send();
//         }else{
//             res.send(studentData)
//         }
//     }catch(e){
//         res.status(500).send(e);
//     }
// })

// // get the individual Student data using name

// // app.get("/students/:name", async(req, res) => {
// //     try{
// //         const _name = req.params.name;
// //         const studentnameData = await Student.findOne(_name).exec(); 
// //         console.log(studentnameData);

// //         if(!studentnameData){
// //             return res.status(404).send();
// //         }else{
// //             res.send(studentnameData)
// //         }
// //     }catch(e){
// //         res.status(500).send(e);
// //     }
// // })


// // update the students by its id

// app.patch("/students/:id", async (req, res) => {
//     // console.log("hello");
//     try{
//         const _id = req.params.id;
//         // console.log(_id);
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
//         res.send(updateStudents);
//     }catch(e){
//         res.status(404).send(updateStudents);
//     }
// });


// // update the students by its id

// app.delete("/students/:id", async (req, res) => {
//     try{
//         const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.send(deleteStudent);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })



// // app.patch("/students/:id", async (req, res) => {
// //     console.log("hello");
// //     try {
// //         const _id = req.params.id;
// //         console.log(_id);
// //         const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
// //         res.send(updateStudents);
// //     } catch (e) {
// //         console.error("Error:", e);
// //         res.status(404).send({ error: "Update failed" });
// //     }
// // });

// Query to select all data from the students table
const getAllStudentsQuery = 'SELECT * FROM students';

// Use the pool to query the database
sqldblocal.query(getAllStudentsQuery, (error, results, fields) => {
  if (error) {
    console.log(fields)
    console.error('Error querying the database:', error);
    return;
  }

  // Display the retrieved data
  console.log('All Students:');
  results.forEach(student => {
    console.log(`ID: ${student.student_id}, Name: ${student.first_name} ${student.last_name}, Birth Date: ${student.birth_date}, Enrollment Date: ${student.enrollment_date}`);
  });

  // Close the connection when done
  sqldblocal.end();
});



app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
});