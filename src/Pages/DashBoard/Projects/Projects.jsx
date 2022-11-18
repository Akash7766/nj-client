import axios from 'axios'
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import Form from 'react-bootstrap/Form'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../../Components/Spinner/Spinner'
import UseProject from '../../../Hooks/UseProject'

const Projects = () => {
    const [load,setLoad]=useState(false)
    const [image, setImage] = useState(null)
    const [projectLink, setProjectLink] = useState('')
    const [projectTitle, setProjectTitle] = useState('')

    const { projects, reLoad, SetReLoad, isLoading, setProjects } = UseProject()
    const { data:project, error, isError,refetch } = useQuery('projects', async()=>{
        const { data } = await axios.get('http://localhost:5000/api/v1/project')
        return data
    })

    const [isActive, setIsActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true)
        const formData = new FormData()
        formData.append('file', image)
        formData.append("upload_preset","NJ_images")
        formData.append("cloud_name","dya0kqtgi")

        // post api call
        fetch("https://api.cloudinary.com/v1_1/dya0kqtgi/image/upload",{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then(async data => {
        if(data.asset_id){
            const img = data.url
            const project = {title:projectTitle,link:projectLink,img}
            console.log(project);
            const res =await axios.post("http://localhost:5000/api/v1/project",project)

            if(res){
                setLoad(false)
                refetch()
                if(res.data.success){
                    toast("project Post added Successfull")

                  }
            }
        }
    })
    .catch((err)=>{
        setLoad(false)
        console.log(err);
    })
        //clear all input field
        setProjectTitle('')

        setProjectLink('')
        setImage(null)

        setIsActive(!isActive)
    }
    const deleteBlog = (id) => {
        setLoad(true)
        fetch(`http://localhost:5000/api/v1/project/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    setLoad(false)
                    refetch()
                    toast("project delete successfully")
                }

            })
    }

    if(load){
        return <Spinner/>
    }

    return (
        <div className='container'>
            <Button variant="primary" onClick={() => setIsActive(!isActive)}>
                add a new Project
            </Button>
            <br />
            <br />
            <div className={isActive ? 'd-block' : 'd-none'}>
                <Form className='m-auto' responsive onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12} md={6}>    <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Label>Project Title</Form.Label>
                            <Form.Control value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} required type="text" placeholder="Enter new project title" />
                        </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupText">
                                <Form.Label> Project Link </Form.Label>
                                <Form.Control value={projectLink} onChange={(e) => setProjectLink(e.target.value)} required type="text" placeholder="Enter project Link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupFile">
                                <Form.Label> Image </Form.Label>
                                <Form.Control
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])}

                                    required type='file'
                                />
                            </Form.Group></Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <br />
            <div className="manage-instagram-post">
                {
                    (project?.data.length > 0) ? <Table responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th> Title</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                project?.data?.map((project, index) => <tr key={index}><td>{index + 1}</td> <td> <img style={{ width: "40px", height: '35px' }} src={`${project.img}`} /> <h5 className='p-2 d-inline'>{project.title}</h5></td> <td>
                                    <Link to={`/dash-board/project/update/${project._id}`} className="btn btn-primary m-1" ><i class="bi bi-pencil-square"></i></Link>
                                    <button className="btn btn-danger" onClick={() => deleteBlog(project._id)}><i class="bi bi-trash-fill"></i></button></td></tr>)
                            }
                        </tbody>
                    </Table> : ''
                }

            </div>

        </div>


    )
}

export default Projects