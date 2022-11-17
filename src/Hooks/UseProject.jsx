import React, { useEffect, useState } from 'react'

const UseProject = () => {
    const [projects, setProjects] = useState([])
    const [reLoad, SetReLoad] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/project')
            .then(res => res.json())
            .then(data => (setIsLoading(!isLoading), setProjects(data)))
    }, [reLoad])
    return (
        {projects, reLoad, SetReLoad, isLoading, setProjects}
    )
}

export default UseProject