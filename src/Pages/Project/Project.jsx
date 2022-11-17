import React from 'react'
import { useState } from 'react'

const Project = () => {
  const handleSubmit=(e)=>{
    e.preventDefault( )
    const image = e.target.img.files[0]
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","NJ_images")
    data.append("cloud_name","dya0kqtgi")
    fetch("https://api.cloudinary.com/v1_1/dya0kqtgi/image/upload",{
      method:"POST",
      body:data
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h1>projects</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name='img'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Project