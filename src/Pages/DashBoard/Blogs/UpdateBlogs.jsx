import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../Components/Spinner/Spinner';

const UpdateBlogs = () => {
  const [load,setLoad]=useState(false)
  const [title, setTitle] = useState("")
  const [descreption, setDescreption] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState(null)

  // const { blogs, reLoad, SetReLoad, isLoading, setBlogs } = UseBlogs()
  const navigate = useNavigate()
  const { blogId } = useParams()
  const [blog, setBlog] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blog/${blogId}`).then(res => res.json()).then(data => setBlog(data.data))
  }, [])
  console.log(blog)
  const { refetch } = useQuery('blogs', async()=>{
    const { data } = await axios.get('http://localhost:5000/api/v1/blog')
    return data
})

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    setLoad(true)
    const formData = new FormData()
    formData.append('file', image)
    formData.append("upload_preset","NJ_images")
    formData.append("cloud_name","dya0kqtgi")

    console.log(formData)
    fetch("https://api.cloudinary.com/v1_1/dya0kqtgi/image/upload",{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then(async data => {
        if(data.asset_id){
            const img = data.url
            const blog = {title,dec:descreption,date,img}
            console.log(blog);
            const res =await axios.put(`http://localhost:5000/api/v1/blog/${blogId}`,blog)

            if(res){
                setLoad(false)
                refetch()
                if(res.data.success){
                  toast("update successful")
                }
            }
        }
    })
    .catch((err)=>{
        setLoad(false)
        console.log(err);
    })

    if(load){
      return <Spinner/>
    }
    else{
      navigate('/dash-board/blog')
    }
    //clear all input field
    setTitle('')
    setDate('')
    setDescreption('')
    setImage(null)
  }


  return (
    <div className='container  mx-auto'>
      <h2 className='t-center'>updating blog: {blog.title}</h2>
      <Form onSubmit={handleSubmitUpdate}>
        <Row className="mb-3 ">
          <Form.Group className='col-6 sm-12' controlId="formGridName">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} required type="text" placeholder="Enter Blog Title" />
          </Form.Group>



        </Row>

        <Form.Group className="mb-2 col-6 sm-12" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descreption</Form.Label>
          <Form.Control
            value={descreption}
            onChange={(e) => setDescreption(e.target.value)}
            required as="textarea" rows={3}
          />
        </Form.Group>


        <Row className="mb-3">
          <Form.Group className='col-4 sm-12' controlId="formGridState">
            <Form.Label>Date</Form.Label>
            <Form.Control
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required type='date'
            />
          </Form.Group>


        </Row>
        <Row className="mb-3">
          <Form.Group className='col-4 sm-12' controlId="formGridState">
            <Form.Label>Image</Form.Label>
            <Form.Control
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}

              required type='file'
            />
          </Form.Group>


        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UpdateBlogs