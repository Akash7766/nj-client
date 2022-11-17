import React from 'react'

const SingleProject = ({ project }) => {
    const img = ` data:image/jpeg;base64,${project.img}`;
    return (

        <li
            className="uk-width-1-1 uk-width-small-1-2 uk-width-medium-1-2 uk-width-large-1-3 uk-width-xlarge-1-3">
            <a href={project.link}><img
                src={img}
                alt="" /></a>
        </li>

    )
}

export default SingleProject