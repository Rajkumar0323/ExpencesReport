import react, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

////////////////////////////////////////////////

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAllUsers();
  }, []);

  const DeleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers(token);
    setUsers(response.data);
  };

  ////////////////////////////////////////////////////
  ///////////////////////////////////////////////////

  const GeneratePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    doc.text("##ContactBook##", 10, y);
    doc.text("##############", 10, y + 10);
    users.forEach((item) => {
      doc.text(`Name: ${item.name}`, 10, y + 20);
      doc.text(`UserName: ${item.username}`, 10, y + 30);
      doc.text(`Email: ${item.email}`, 10, y + 40);
      doc.text(`Phone: ${item.phone}`, 10, y + 50);
      doc.text("==============================", 10, y + 60);
      y += 60;
    });
    doc.save("ContactBook.pdf");
  };

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  return (
    <>
      <NavBar />
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TRow key={user?.id}>
              <TableCell>{user?._id}</TableCell>
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.username}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.phone}</TableCell>
              <TableCell>
                {/* ///////////////////// */}
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                {/* change it to user.id to use JSON Server */}
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => DeleteUserDetails(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>

        {/* /////////////////////////////// */}

        <Button
          color="inherit"
          variant="contained"
          onClick={GeneratePDF}
          style={{
            // display: "block",
            margin: "20px auto 0 auto",
            backgroundColor: "yellow",
          }}
        >
          Generate pdf
        </Button>
      </StyledTable>
    </>
  );
};

export default AllUsers;
