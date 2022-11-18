import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import axios from 'axios';
import Spinner from '../../../Components/Spinner/Spinner';

const UpdateSlider = () => {
  const [image, setImage] = useState(null)
  const [load,setLoad]=useState(false)
  const [sliderTitle, setSliderTitle] = useState('')
  const [sliderDesc, setSliderDesc] = useState('')
  const imageInputRef = useRef();
  const navigate = useNavigate()
  const [slider, setSlider] = useState({})
  const { sliderId } = useParams()


  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/slider/${sliderId}`).then(res => res.json()).then(data => setSlider(data.data))
  }, [])
  const {refetch } = useQuery('sliders', async()=>{
    const { data } = await axios.get('http://localhost:5000/api/v1/slider')
    return data
})
  const handleUpdateSlider = (e) => {
    e.preventDefault();
    setLoad(true)
    console.log(image)
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
            const slider = {sliderTitle,sliderDesc,img}
            console.log(slider);
            const res =await axios.put(`http://localhost:5000/api/v1/slider/${sliderId}`,slider)

            if(res){
                setLoad(false)
                refetch()
                console.log(res);
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
    setSliderTitle('')
    navigate('/dash-board/slider')
    setSliderDesc('')
    imageInputRef.current.value = "";
    setImage(null)
  }

  return (
    <div className='container mx-auto'>
      <h2 className='t-center'>Updating Slider:{slider.sliderTitle}</h2>
      <div className="container">
        <Form onSubmit={handleUpdateSlider}>
          <Row className="mb-3 ">
            <Form.Group className='col-6 sm-12' controlId="formGridName">
              <Form.Label>Title</Form.Label>
              <Form.Control value={sliderTitle} onChange={(e) => setSliderTitle(e.target.value)} required type="text" placeholder="Enter slider Title" />
            </Form.Group>



          </Row>

          <Form.Group className="mb-2 col-6 sm-12" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descreption</Form.Label>
            <Form.Control
              value={sliderDesc}
              onChange={(e) => setSliderDesc(e.target.value)}
              required as="textarea" rows={3}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group className='col-4 sm-12' controlId="formGridState">
              <Form.Label>Image</Form.Label>
              <Form.Control
                ref={imageInputRef}
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
  )
}

export default UpdateSlider