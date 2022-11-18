import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
// import Table from 'react-bootstrap/esm/Table'
import Form from 'react-bootstrap/Form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const UpdateInstagram = () => {
  const [load,setLoad]=useState(false)
  const [instagram, setInstagram] = useState({})
  const [image, setImage] = useState(null)
  const [postLink, setPostLink] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const imageInputRef = useRef();
  const { instagramId } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/instagram/${instagramId}`).then(res => res.json()).then(data => setInstagram(data))
  }, [])

  const { data,refetch } = useQuery('instagrams', async()=>{
    const { data } = await axios.get('http://localhost:5000/api/v1/instagram')
    return data
})
  const handleUpdateInstagram = (e) => {

    e.preventDefault();
    setLoad(true)
    const formData = new FormData()
    formData.append('file', image)
    formData.append("upload_preset","NJ_images")
    formData.append("cloud_name","dya0kqtgi")

    // post api call
    console.log(formData)
    fetch("https://api.cloudinary.com/v1_1/dya0kqtgi/image/upload",{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then(async data => {
        if(data.asset_id){
            const img = data.url
            const instagram = {postTitle,postLink,img}
            console.log(instagram);
            const res =await axios.put(`http://localhost:5000/api/v1/instagram/${instagramId}`,instagram)

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
    //clear all input field
    setPostTitle('')
    navigate('/dash-board/instagram')
    setPostLink('')
    imageInputRef.current.value = "";
    setImage(null)
  }
  return (
    <div className='container mx-auto'>

      <h2 className='t-center'> updating instagram: {instagram.title}</h2>
      <Form className='m-auto' responsive onSubmit={handleUpdateInstagram}>
        <Row>
          <Col xs={12} md={6}>    <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Post Title</Form.Label>
            <Form.Control value={postTitle} onChange={(e) => setPostTitle(e.target.value)} required type="text" placeholder="Enter instagram post title" />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label> Post Link </Form.Label>
              <Form.Control value={postLink} onChange={(e) => setPostLink(e.target.value)} required type="text" placeholder="Post Link" />
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
  )
}

export default UpdateInstagram