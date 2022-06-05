import React from 'react'
import './app.scss'

const Container = ({ children }) => {
    return (
        <div className='container-fluid'>
            <div className='container'>
                { children }
            </div>
        </div>
    )
}

export default Container;