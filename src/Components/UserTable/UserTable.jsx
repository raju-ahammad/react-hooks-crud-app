import React from 'react'

const UserTable = ({users, deleteUser}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">UserNo</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td> {user.name} </td>
                                <td> {user.userName} </td>
                                <td><div className="row">
                                        <div className="col-sm">
                                            <button className="btn btn-outline-success mx-2"  >Edit</button>
                                            <button className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ) )
                    ): (
                        <tr>
                            <td colSpan={3}>No users data</td>
                        </tr>
                    )
                }
                
                
            </tbody>
        </table>
    )
}

export default UserTable
