
import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
// import Table from 'react-bootstrap/esm/Table'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateProject = () => {
  const [project, setProject] = useState({})
  const [image, setImage] = useState(null)
  const [projectLink, setProjectLink] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const imageInputRef = useRef();
  const { projectId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/add_project/${projectId}`).then(res => res.json()).then(data => setProject(data))
  }, [])


  const handleUpdateProject = (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('title', projectTitle)
    formData.append('link', projectLink)
    formData.append('img', image)

    // post api call
    fetch(`http://localhost:5000/api/v1/update_project/${projectId}`, {
      method: 'PUT',

      body: formData
    }).then(res => res.json())
      .then(data => console.log(data))

    //clear all input field
    setProjectTitle('')
    navigate('/dash-board/project')
    setProjectLink('')
    imageInputRef.current.value = "";
    setImage(null)

  }



  return (
    <div className='container mx-auto'>
      <h2 className='t-center'>updating project: {project.title}</h2>
      <div className="container">
        <Form className='m-auto' responsive onSubmit={handleUpdateProject}>
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
    </div>
  )
}

export default UpdateProject