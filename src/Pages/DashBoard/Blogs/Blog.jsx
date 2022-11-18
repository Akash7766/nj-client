import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import UseBlogs from '../../../Hooks/UseBlogs';
import Spinner from '../../../Components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';


const Blog = () => {
    const [load,setLoad]=useState(false)
    const [addBtnActive, setAddBtnActive] = useState(false)
    const [title, setTitle] = useState("")
    const [descreption, setDescreption] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState(null)
    const {  reLoad, SetReLoad, setBlogs } = UseBlogs()
    const { data:blogs,  isLoading,refetch } = useQuery('blogs', async()=>{
        const { data } = await axios.get('http://localhost:5000/api/v1/blog')
        return data
    })




    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true)
        const formData = new FormData()
        formData.append('file', image)
        formData.append("upload_preset","NJ_images")
        formData.append("cloud_name","dya0kqtgi")

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
            const res =await axios.post("http://localhost:5000/api/v1/blog",blog)

            if(res){
                setLoad(false)
                refetch()
                if(res.data.success){
                    toast("Blog Post added Successfull")
  
                  }
            }
        }
    })
    .catch((err)=>{
        setLoad(false)
        console.log(err);
    })

            
            

        //clear all input field
        setTitle('')
        setDate('')
        setDescreption('')
        setImage(null)


    }

    const deleteBlog = (id) => {
        setLoad(true)

        fetch(`http://localhost:5000/api/v1/blog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    setLoad(false)
                    refetch()
                    toast("Blog delete successfully")
                }

            })    }

            if(load){
                return <Spinner/>
            }
    return (
        <div className="container">

            <Button variant="primary" onClick={() => setAddBtnActive(!addBtnActive)}>
                add blogs
            </Button>
            <br />
            <br />

            <div className="">
                <div className={addBtnActive ? 'd-block' : 'd-none'}>
                    <Form onSubmit={handleSubmit}>
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
            </div>
            <br /><br />
            <div className="container blog-manage-section">
                {isLoading ? <Spinner /> : <div className="container">
                    {
                        (blogs?.data?.length > 0) ? <Table responsive>
                            <thead>
                                <tr>
                                    <th>Id</th>


                                    <th> Description</th>

                                    <th> Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs?.data?.map((blog, index) => <tr key={index}><td>{index + 1}</td> <td> <img style={{ width: "40px", height: '35px' }} src={blog.img} /> <h5 className='p-2 d-inline'>{blog.title}</h5></td> <td>
                                        <Link to={`/dash-board/blog/update/${blog._id}`} className="btn btn-primary m-1" ><i class="bi bi-pencil-square"></i></Link>

                                        <button className="btn btn-danger" onClick={() => deleteBlog(blog._id)}><i class="bi bi-trash-fill"></i></button></td></tr>)
                                }
                            </tbody>
                        </Table> : ''
                    }


                </div>}

            </div>
        </div>
    )
}

export default Blog