import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { student } from "../utlis/data";
import { deletestudent, fetchData } from "../api/studentapi";

interface Props {
  data: student[];
  setstudent: React.Dispatch<React.SetStateAction<student[]>>;
}

function MyTable(props: Props) {
  const navigate = useNavigate();

  function handleEdit(id: string) {
    navigate(`/edit/${id}`);
  }

  async function deletestudents(id: string) {
    try {
      await deletestudent(id);
      const data = await fetchData();
      props.setstudent(data);
    } catch (error) {
      throw error;
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
     
            
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.class}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => deletestudents(row._id as string)}
                  color="error"
                  variant="contained"
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleEdit(row._id as string)}
                  color="success"
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
