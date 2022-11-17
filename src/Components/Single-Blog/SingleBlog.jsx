import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlog = ({ blog }) => {
    return (
        <div>
            <div className="card col-3">
                <img className='card-img-top m-auto' style={{ width: '250px', height: '200px' }} src={` data:image/jpeg;base64,${blog.img}`} alt="" />
                <div className="card-body m-2">
                    <h4 className='t-center'> {blog.title}</h4>
                    <br /><p className='p-1'>{blog.dec.slice(0, 150)} .  .  .  .</p>
                    <br />
                    <button className='btn btn-danger'><Link to={`/blog/${blog._id}`}>read more ...</Link></button>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog