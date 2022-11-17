import React, { useEffect, useState } from 'react'

const UseInstagram = () => {
    const [instagramPost, setInstagramPost] = useState([])
    const [reLoad, SetReLoad] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/instagram')
            .then(res => res.json())
            .then(data => (setIsLoading(!isLoading), setInstagramPost(data)))
    }, [reLoad])
    return (
        {instagramPost, reLoad, SetReLoad, isLoading, setInstagramPost}
    )
}

export default UseInstagram