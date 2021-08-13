import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`menu-item ${size}`}
    style={{
      background: `url(${imageUrl})`,
    }}
  >
    <div className="content">
      <h1 className="title">{ title }</h1>
      <span className="subtitle">BUY NOW</span>
    </div>
  </div>
);

export default MenuItem;
