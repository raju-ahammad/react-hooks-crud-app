import { useState } from 'react';
import './App.css';
import EditUserFomrs from './Components/UserForm/EditUserFomrs';
import UserForm from './Components/UserForm/UserForm';
import UserTable from './Components/UserTable/UserTable';

function App() {

  const userData = [
    {id: 1, name: "Raju", userName:"raju"},
    {id: 2, name: "Ahammad", userName:"ahammad"},
    {id: 3, name: "Kabir", userName:"kabir"}
  ]
  const initialFormState = { id: null, name: '', userName: '' }


  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)
  const [curretUser, setCurretUser] = useState(initialFormState)

  const editUser = (user) => {
    setEditing(true)
    setCurretUser({ id: user.id, name: user.name, userName: user.userName })
  }
  

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser: user)))
  }

  

  return (
    <div className="App m-2">
      <h3 className="text-info h2">React Hooks CRUD Apps</h3>
      <div className="row">
        <div className="col-sm-5">
          {
            editing ? (
              <div>
                <h2 className="h4 text-danger">Edit User</h2>
              <EditUserFomrs setEditing={setEditing} updateUser={updateUser} currentUser={curretUser} />
              </div>
            ):(
              <div>
                <h2 className="h4 text-info">Add User</h2>
                <UserForm addUser={ addUser }  />
              </div>
              
            )
          }
          
        </div>
        <div className="col-sm-6 h4">
          <h2 className="h4 text-info">View User</h2>
          <UserTable users= {users} deleteUser = {deleteUser} editUser={editUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
