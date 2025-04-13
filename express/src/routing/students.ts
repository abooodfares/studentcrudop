import express from 'express';
import studentmodel from "../models/studentmodel";
const rout= express.Router();
rout.get('/', async (req, res) => {
    const students = await studentmodel.find();
    res.send(students);
});
// rout.get('/students/:age', async (req, res) => {
//     const student = await studentmodel.find({"age": req.params.age});
//     if (!student) {
//          res.status(404).send('Student not found');
         
//     }
//     res.send(student);
    
// })
rout.post('/', async (req, res) => {
    const student = new studentmodel(req.body);
    await student.save();
    res.send(student).status(201);
});



rout.put('/:id', async (req, res) => {
    const student = await studentmodel.findByIdAndUpdate(req.params.id,req.body,
        {
            new: true
        }


    );
    if (!student) {
         res.status(404).send('Student not found');
         
    }
    res.status(200).send(student);
 
});
rout.delete('/:id', async (req, res) => {
    const student = await studentmodel.findByIdAndDelete(req.params.id);
    if (!student) {
         res.status(404).send('Student not found');
         
    }
    res.status(200).send(student);
 
});
rout.get('/:age', async (req, res) => {
    //get studnt greater than age
    //iwant just name field
    //just name without id
    const student = (await studentmodel.find({"age": {$gt: req.params.age}}).select('name -_id age').$where('this.age > 19'))
    
    if (!student) {
         res.status(404).send('Student not found');
         
    }
    res.send(student );
    
})
rout.get('/:id', async (req, res) => {
    const student = await studentmodel.findById(req.params.id);
    if (!student) {
         res.status(404).send('Student not found');
         
    }
    res.send(student);
    
})




export default rout