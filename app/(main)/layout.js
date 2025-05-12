import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div className='container mx-auto mt-24 mb-12'>
            {children}
        </div>
    )
}

export default MainLayout;