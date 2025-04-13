import mongoose from "mongoose";
interface studentmodel extends Document {
    name: string;
   
    age: number;
    
    class: string;
    
   }

const studentSchema = new mongoose.Schema<studentmodel>({
    name: {
        type: String,
        required: true
    },
  
    age: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true
    }
    
}

);

const student = mongoose.model<studentmodel>('student', studentSchema);

export default student