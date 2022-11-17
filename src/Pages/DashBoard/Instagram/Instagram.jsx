import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import UseInstagram from '../../../Hooks/UseInstagram'

const Instagram = () => {
  const [image, setImage] = useState(null)
  const [postLink, setPostLink] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const imageInputRef = useRef();

  const { instagramPost, reLoad, SetReLoad, isLoading, setInstagramPost } = UseInstagram()

  const [isActive, setIsActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image)
    const formData = new FormData()
    formData.append('title', postTitle)
    formData.append('link', postLink)
    formData.append('img', image)

    // post api call
    fetch('http://localhost:5000/api/v1/instagram', {
      method: 'POST',

      body: formData
    }).then(res => res.json())
      .then(data => (SetReLoad(reLoad + 3), console.log(data)))

    //clear all input field
    setPostTitle('')

    setPostLink('')
    imageInputRef.current.value = "";
    setImage(null)

    setIsActive(!isActive)
  }
  const deleteBlog = (id) => {

    fetch(`http://localhost:5000/api/v1/instagram_delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)

      })
    SetReLoad(reLoad + 2)
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
          (instagramPost.length > 0) ? <Table responsive>
            <thead>
              <tr>
                <th>Id</th>


                <th> Title</th>

                <th> Action</th>

              </tr>
            </thead>
            <tbody>
              {
                instagramPost.map((ip, index) => <tr key={index}><td>{index + 1}</td> <td> <img style={{ width: "40px", height: '35px' }} src={` data:image/jpeg;base64,${ip.img}`} /> <h5 className='p-2 d-inline'>{ip.title}</h5></td> <td>
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