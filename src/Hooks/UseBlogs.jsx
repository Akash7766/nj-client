import React, { useState, useEffect } from 'react'

const UseBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [reLoad, SetReLoad] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/blog')
            .then(res => res.json())
            .then(data => (setIsLoading(!isLoading), setBlogs(data.data)))
    }, [reLoad])
    return (
        {blogs, reLoad, SetReLoad, isLoading, setBlogs}
    )
}

export default UseBlogs