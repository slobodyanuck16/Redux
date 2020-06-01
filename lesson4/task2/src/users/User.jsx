import React, { Component } from "react";

class Users extends Component {
    render() {
        const { users } = this.props;
        <div className="users">
            <button className="users__create-btn">Create user</button>
            <ul className="users__list">
                {users.map((user) => (
                    <li className="users__list-item">
                        <span>{user.name}</span>
                        <button className="users__delete-btn">+</button>
                    </li>
                ))}
            </ul>
        </div>;
    }
}

export default Users;
