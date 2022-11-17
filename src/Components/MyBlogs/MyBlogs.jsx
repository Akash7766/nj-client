import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import UseBlogs from '../../Hooks/UseBlogs'
import SingleBlog from '../Single-Blog/SingleBlog'
import Spinner from '../Spinner/Spinner'

const MyBlogs = () => {
    const { data:blogs, error, isError, isLoading,refetch } = useQuery('blogs', async()=>{
        const { data } = await axios.get('http://localhost:5000/api/v1/blog')
        return data
    })

    return (

        <div className="tm-blob-column-2 uk-grid-width-1-1 uk-grid-width-small-1-1 uk-grid-width-medium-1-2 uk-grid-width-xlarge-1-3" data-uk-grid="{gutter: 25}">



            {blogs.data.map(blog => <div className='card m- p-1 col'>

                <article className="uk-article uk-article-list">

                    <a className="uk-display-block uk-text-center" href="#"><img style={{ width: '450px', height: '300px' }} alt="" src={` data:image/jpeg;base64,${blog.img}`} /></a>

                    <p className="uk-article-meta">
                        <time datetime="2016-03-11">{blog.date}</time>
                    </p>

                    <h2 className="uk-article-title"><a className="uk-display-block" >{blog.title}</a></h2>


                    <p> {blog.dec.slice(0, 170)}</p>

                    <Link to={`/blog/${blog._id}`} className="tm-animate-button " ><span>Read More</span></Link>
                    <div className="uk-text-center uk-margin-bottom">
                        <ul className="uk-article-navbar">
                            <li className="uk-social-button"><a href="#"><span className="uk-icon-instagram"></span></a></li>
                            <li className="uk-social-button"><a href="#"><span className="uk-icon-github"></span></a></li>
                            <li className="uk-social-button"><a href="#"><span className="uk-icon-linkedin"></span></a></li>

                        </ul>
                    </div>
                </article>
            </div>)}
            {isLoading && <Spinner value='blogs' />}
        </div>






    )
}

export default MyBlogs