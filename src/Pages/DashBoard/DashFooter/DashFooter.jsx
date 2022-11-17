import React from 'react'

const DashFooter = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container-fluid mx-auto">
                    <div className="row">
                        <div className="col-sm-6">
                            {new Date().getFullYear()} © NJ Abaacorp
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default DashFooter