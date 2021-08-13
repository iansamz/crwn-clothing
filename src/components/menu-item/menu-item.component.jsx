import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`}
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
