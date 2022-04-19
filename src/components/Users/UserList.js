import React from "react";

//import UI components
import Card from "../UI/Card";

//import module css
import classes from "./UserList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}

      {/* 구식문법 { 와 return  */}
      {props.users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        );
      })}
    </Card>
  );
};

export default UsersList;
