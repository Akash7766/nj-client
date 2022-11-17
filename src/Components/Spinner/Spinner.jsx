import React from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';

const Spinner = (props) => {
    const value = props.value;
    return (

        <div className='text-center mt-5'>
            <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    )
}

export default Spinner