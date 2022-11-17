import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const BlogDetails = () => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/blog/${blogId}`).then(res => res.json()).then(data => setBlog(data.data))
    }, [])


    return (
        <div className="container">
            <article class="uk-article uk-article-details">

                <div class="uk-article-content">
                    <div class="uk-article-content-inner">
                        <div class="uk-width-large-5-6 uk-width-xlarge-4-6 uk-container-center uk-padding-bottom">

                            <h1 class="uk-article-title">{blog.title}</h1>
                            <p class="uk-article-introtext"></p>
                            <p class="uk-article-dropcaps">{blog.dec}</p>
                        </div>
                        <div class="uk-text-center uk-width-xlarge-5-6 uk-container-center">
                            <img src={` data:image/jpeg;base64,${blog.img}`} alt="" />
                        </div>


                    </div>
                </div>




            </article>
        </div>

    )
}

export default BlogDetails