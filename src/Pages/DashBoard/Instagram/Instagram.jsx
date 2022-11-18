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
import UseInstagram from '../../../Hooks/UseInstagram'

const Instagram = () => {
  const [load,setLoad]=useState(false)
  const [image, setImage] = useState(null)
  const [postLink, setPostLink] = useState('')
  const [postTitle, setPostTitle] = useState('')

  const { instagramPost, reLoad, SetReLoad, isLoading, setInstagramPost } = UseInstagram()
  const { data:instagram, error, isError,refetch } = useQuery('instagrams', async()=>{
    const { data } = await axios.get('http://localhost:5000/api/v1/instagram')
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
            const instagram = {postTitle,postLink,img}
            console.log(instagram);
            const res =await axios.post("http://localhost:5000/api/v1/instagram",instagram)

            if(res){
                setLoad(false)
                refetch()
                if(res.data.success){
                  toast("Instagram Post added Successfull")

                }
            }
        }
    })
    .catch((err)=>{
        setLoad(false)
        console.log(err);
    })
    //clear all input field
    setPostTitle('')

    setPostLink('')
    setImage(null)

    setIsActive(!isActive)
  }
  const deleteBlog = (id) => {
    setLoad(true)
    fetch(`http://localhost:5000/api/v1/instagram/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
        if(result.success){
            setLoad(false)
            refetch()
            toast("instagram delete successfully")
        }

    })    }

    if(load){
        return <Spinner/>
    }

  return (
    <div className='container'>
      <Button variant="primary" onClick={() => setIsActive(!isActive)}>
        add instagram gallary
      </Button>
      <br />
      <br />
      <div className={isActive ? 'd-block' : 'd-none'}>
        <Form className='m-auto' responsive onSubmit={handleSubmit}>
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
          (instagram?.data?.length > 0) ? <Table responsive>
            <thead>
              <tr>
                <th>Id</th>


                <th> Title</th>

                <th> Action</th>

              </tr>
            </thead>
            <tbody>
              {
                instagram?.data?.map((ip, index) => <tr key={index}><td>{index + 1}</td> <td> <img style={{ width: "40px", height: '35px' }} src={ip.img} /> <h5 className='p-2 d-inline'>{ip.postTitle}</h5></td> <td>
                  <Link to={`/dash-board/instagram/update/${ip._id}`} className="btn btn-primary m-1" ><i class="bi bi-pencil-square"></i></Link>

                  <button className="btn btn-danger" onClick={() => deleteBlog(ip._id)}><i class="bi bi-trash-fill"></i></button></td></tr>)
              }
            </tbody>
          </Table> : ''
        }

      </div>

    </div>


  )
}

export default Instagram