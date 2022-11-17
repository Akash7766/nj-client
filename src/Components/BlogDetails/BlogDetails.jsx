import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'


const BlogDetails = () => {
    const { blogId } = useParams()
    const [load,setLoad]=useState(true)
    const { data:blog, error, isError, isLoading,refetch } = useQuery('blog', async()=>{
        const { data } = await axios.get(`http://localhost:5000/api/v1/blog/${blogId}`)
        
        setLoad(false)
        return data
    })
    if(load){
        return <Spinner/>
    }

    return (
        <div className="container">
            <article class="uk-article uk-article-details">

                <div class="uk-article-content">
                    <div class="uk-article-content-inner">
                        <div class="uk-width-large-5-6 uk-width-xlarge-4-6 uk-container-center uk-padding-bottom">

                            <h1 class="uk-article-title">{blog?.data?.title}</h1>
                            <p class="uk-article-introtext"></p>
                            <p class="uk-article-dropcaps">{blog?.data?.dec}</p>
                        </div>
                        <div class="uk-text-center uk-width-xlarge-5-6 uk-container-center">
                            <img src={blog?.data?.img} alt="" />
                        </div>


                    </div>
                </div>




            </article>
        </div>

    )
}

export default BlogDetails