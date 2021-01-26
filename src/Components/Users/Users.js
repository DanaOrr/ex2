import React, { Component } from "react";
import usersData from "../../Data/data.json";
import UserForm from "./user-components/UserForm/UserForm";
import UsersTable from "./user-components/UsersTable/UsersTable";

class Users extends Component {
  state = {
    users: [],
    button: "save",
    id: -1
  };
  componentDidMount() {
    this.setState({ users: usersData });
  }
  addUserHandler = (user) => {
    if(this.state.button === 'save'){
      const { users } = this.state;
      const updatedUsers = [...users, user];
      return this.setState({ users: updatedUsers });
    }
    else {
      this.setState(prevState => ({
          users: prevState.users.map(
              user => user.id !== this.id ? user : {...user,
              date:user.date,
              name:user.name,
              city:user.city

          }
          )
      }))
  }


  };
  removeUserHandler = (userIndex) => {
    const { users } = this.state;
    const updatedUsers = users.filter((user, index) => index !== userIndex);
    this.setState({ users: updatedUsers });
  };
  editUserHandler = (userIndex) => {
    this.setState({ button: 'update', id: userIndex });
  } 

  render() {
    return (
      <div className="background">
        <UsersTable
          users={this.state.users}
          onDeleteUser={this.removeUserHandler}
          onEditUser={this.editUserHandler} 
          
        />
        <UserForm onAddUser={this.addUserHandler} 
          button = {this.state.button}
        />
      </div>
    );
  }
}
export default Users;
