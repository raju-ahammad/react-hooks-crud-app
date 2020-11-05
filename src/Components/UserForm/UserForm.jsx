import React, { useState } from 'react'

const UserForm = ({addUser}) => {
    const initialState = {id:null, name:"", userName:""}

    const [user, setUser] = useState(initialState)

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(event);
        setUser({...user, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.userName) return

        addUser(user)
        setUser(initialState)

    }

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" name="name" value={user.name} onChange={handleChange} className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">UserName</label>
                <div className="col-sm-10">
                <input type="text" name="userName" value={user.userName} onChange={handleChange} className="form-control" id="inputPassword3" />
            </div>
            </div>
            <button className="btn-primary btn" style={{ padding:"0.7rem 5rem" }} >Submit</button>
            </form>
        </div>
        
    )
}

export default UserForm
