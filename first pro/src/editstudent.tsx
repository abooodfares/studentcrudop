import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getstudent, updatestudent } from "./api/studentapi";
import { student } from "./utlis/data";

function Editstudent() {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/`);
  }
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getstudent(id).then((data) => {
        setFormData({
          name: data.name,
          age: data.age,
          email: data.email,
          class: data.class
        });
      });
    }
  }, [id]);

  const [formData, setFormData] = useState<student>({
    name: "",
    age: 0,
    email: "",
    class: 0
  });



  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" || name === "class" ? Number(value) : value
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Call your update API here
    console.log("Submitting: ", formData);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 5 }}
    >
      <TextField
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        name="class"
        label="Class"
        type="number"
        value={formData.class}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        name="age"
        label="Age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        variant="outlined"
      />
      <Button
        type="submit"
        onClick={
          async() => {
           await updatestudent(id!, formData);
           alert("updated")
           handleEdit();

          }
        }
        sx={{ backgroundColor: "green", color: "white" }}
        variant="outlined"
      >
        Update
      </Button>
    </Box>
  );
}

export default Editstudent;
