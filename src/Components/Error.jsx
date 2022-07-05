import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error-page'>
            <div class="error-page-content">
                <div className="error-page-main">
                    <h1>Error 404</h1>
                </div>
                <div className="error-page-sub">
                    Maybe this page moved? Got deleted? Never existed in the first place?
                    <p>
                        Let's go
                        <Link to='/' >
                            <span className='error-page-link'>
                                home
                            </span>
                        </Link>
                        and try from there.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Error