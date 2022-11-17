import axios from 'axios'
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import Form from 'react-bootstrap/Form'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import UseProject from '../../../Hooks/UseProject'

const Projects = () => {
    const [image, setImage] = useState(null)
    const [projectLink, setProjectLink] = useState('')
    const [projectTitle, setProjectTitle] = useState('')
    const imageInputRef = useRef();

    const { projects, reLoad, SetReLoad, isLoading, setProjects } = UseProject()
    const { data:project, error, isError,refetch } = useQuery('projects', async()=>{
        const { data } = await axios.get('http://localhost:5000/api/v1/project')
        return data
    })

    const [isActive, setIsActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(image)
        const formData = new FormData()
        formData.append('title', projectTitle)
        formData.append('link', projectLink)
        formData.append('img', image)

        // post api call
        fetch('http://localhost:5000/api/v1/project', {
            method: 'POST',

            body: formData
        }).then(res => res.json())
            .then(data => (SetReLoad(reLoad + 1), console.log(data)))

        //clear all input field
        setProjectTitle('')

        setProjectLink('')
        imageInputRef.current.value = "";
        setImage(null)

        setIsActive(!isActive)
    }
    const deleteBlog = (id) => {

        fetch(`http://localhost:5000/api/v1/project_delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

            })
        SetReLoad(reLoad + 3)
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
                                    ref={imageInputRef}
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
                                project?.data?.map((project, index) => <tr key={index}><td>{index + 1}</td> <td> <img style={{ width: "40px", height: '35px' }} src={` data:image/jpeg;base64,${project.img}`} /> <h5 className='p-2 d-inline'>{project.title}</h5></td> <td>
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