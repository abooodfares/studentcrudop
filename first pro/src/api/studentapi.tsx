import { student } from "../utlis/data";

 export async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/students");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  }
  export async function addstudent(student: student) {
    try {
      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Failed to add student:", error);
      return null;
    }
  }
  
  export async function deletestudent(id: string) {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Failed to delete student:", error);
      return null;
    }
  }
  
  export async function updatestudent(id: string, student: student) {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Failed to update student:", error);
      return null;
    }
  }

  export async function getstudent(id: string) {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Failed to get student:", error);
      return null;
    }
  }