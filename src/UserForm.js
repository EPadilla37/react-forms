import React, { useState } from "react";

const UserForm = () => {
    const initialState = {
        username:"",
        email:"",
        password:""
    }

    const[formData, setFormData] = useState(initialState);
    const handleChange = e => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email,password} = formData;
        alert(`Created user: ${username} w/ email ${email} and password ${password}`);
        setFormData(initialState);
    }

    return (
        <form>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
            />
            
        </form>
    )
}

export default UserForm; 