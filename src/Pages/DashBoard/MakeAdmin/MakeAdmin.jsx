import React from 'react'
import { useState } from 'react'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/api/v1/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setEmail('')
        e.preventDefault()

    }
    return (
        <div className='container mx-auto'>
            <form onClick={handleAdminSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">New Admin Email</label>
                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} className="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Make Admin</button>
            </form>

        </div>
    )
}

export default MakeAdmin