import React, { useEffect, useState } from 'react'

const UseSlider = () => {
    const [slider, setSlider] = useState([])
    const [reLoad, SetReLoad] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/slider')
            .then(res => res.json())
            .then(data => (setIsLoading(!isLoading), setSlider(data)))
    }, [reLoad])
    return (
        { slider, reLoad, SetReLoad, isLoading, setSlider }
    )
}

export default UseSlider