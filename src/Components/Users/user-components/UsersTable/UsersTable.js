import React, { Component } from "react";

class UsersTable extends Component {
  // Can use a function component here.
  render() {
    return (
      <div className="table">
        <table>
          <tbody>
            {this.props.users.map((user, index) => (
              <tr key={`${user.name}_${index}`}>
                <td>{index+1}</td>
                <td>{user.date}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>
                  <button className="edit1" type='button' onClick={() => this.props.onEditUser(index)}>
                     EDIT
                  </button>
                  <button type='button' onClick={() => this.props.onDeleteUser(index)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UsersTable;
