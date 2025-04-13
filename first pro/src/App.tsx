
import MyTable from "./commponets/mytable"
import Addstudent from "./commponets/addstudent"
import {  student } from "./utlis/data"
import { useEffect, useState } from "react";

import {fetchData} from "./api/studentapi";
import { createBrowserRouter } from "react-router-dom";



function App() {

const [students, setStudents] = useState<student[]>([]);
useEffect(() => {
  fetchData()
    .then((data) => {
      if (data) {
        setStudents(data);
      }
    })
    .catch((error) => {
      alert(error);
    });
}, []); // ✅ Only run once


  return (
    < >
   
    <MyTable data={students} setstudent={setStudents}  />
<Addstudent students={students} setstudent={setStudents} />

    
    </>
  )
}

export default App 
