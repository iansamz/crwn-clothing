import React from 'react'

const MenuItem = ({ title, imageUrl }) =>{
    
    return (
        <div className="menu-item" style={{
            background: `url(${imageUrl})`
        }}>
            <div className="content">
                <h1 className="title">{ title }</h1>
                <span className="subtitle">BUY NOW</span>
            </div>
    </div>
    )
}

export default MenuItem