import { useState } from 'react';
import './App.css';
import UserForm from './Components/UserForm/UserForm';
import UserTable from './Components/UserTable/UserTable';

function App() {

  const userData = [
    {id: 1, name: "Raju", userName:"raju"},
    {id: 2, name: "Ahammad", userName:"ahammad"},
    {id: 3, name: "Kabir", userName:"kabir"}
  ]
  
  const [users, setUsers] = useState(userData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="App m-2">
      <h3 className="text-info h2">React Hooks CRUD Apps</h3>
      <div className="row">
        <div className="col-sm-5">
          <h2 className="h4 text-info">Add User</h2>
          <UserForm addUser={ addUser }  />
        </div>
        <div className="col-sm-6 h4">
          <h2 className="h4 text-info">View User</h2>
          <UserTable users= {users} deleteUser = {deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
