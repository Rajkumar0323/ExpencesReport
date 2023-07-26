import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../Service/api";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const token = localStorage.getItem("token");
function AddUser(props) {
  const [user, setUser] = useState(initialValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    const token = localStorage.getItem("token");
    const response = await addUser(user, token);
    navigate("/all");
  };

  return (
    <>
      <NavBar />
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={onValueChange} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={onValueChange} name="phone" />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addUserDetails()}
          >
            Add User
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default AddUser;
