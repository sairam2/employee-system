import React from 'react'
import Header from './Header'
import Artwork from './Artwork'

function Main() {
    return (
        <>
            <Header/>
            <h2 className='align-center'>Dashboard</h2>
            <Artwork />
        </>
    )
}

export default Main