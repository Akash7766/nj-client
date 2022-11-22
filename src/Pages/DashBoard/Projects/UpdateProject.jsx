
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
// import Table from 'react-bootstrap/esm/Table'
import Form from 'react-bootstrap/Form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../../Components/Spinner/Spinner'
const UpdateProject = () => {
  const [load,setLoad]=useState(false)
  const [project, setProject] = useState({})
  const [image, setImage] = useState(null)
  const [projectLink, setProjectLink] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const imageInputRef = useRef();
  const { projectId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/project/${projectId}`).then(res => res.json()).then(data => setProject(data))
  }, [])
  const { refetch } = useQuery('projects', async()=>{
    const { data } = await axios.get('http://localhost:5000/api/v1/project')
    return data
})

  const handleUpdateProject = (e) => {
    e.preventDefault();
    setLoad(true)
    const formData = new FormData()
    formData.append('file', image)
    formData.append("upload_preset","NJ_images")
    formData.append("cloud_name","dvmwear6h")

    console.log(formData)
    fetch("https://api.cloudinary.com/v1_1/dvmwear6h/image/upload",{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then(async data => {
        if(data.asset_id){
            const img = data.url
            const newProject = {title:projectTitle,link:projectLink,img}
            console.log(newProject);
            const res =await axios.put(`http://localhost:5000/api/v1/project/${projectId}`,newProject)

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
      navigate('/dash-board/project')
    }
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