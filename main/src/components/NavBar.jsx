import React from "react";
import { AppBar, Button, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
  font-size: 20px;
`;

function NavBar(props) {
  return (
    <Header style={{ position: "static" }}>
      <Toolbar>
        <Tabs to="/homepage">ContactBook</Tabs>
        <Tabs to="/add">Add User</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/">
          <Button
            color="inherit"
            style={{
              backgroundColor: "red",
              marginLeft: "50px",
            }}
            onClick={()=>localStorage.removeItem('token')}
          >
            LogOut
          </Button>
        </Tabs>
      </Toolbar>
    </Header>
  );
}

export default NavBar;
