import React from 'react';
import "98.css";

const Navigation = () => {
    return (
      <div>
        <div className='title-bar'>
            <div className="title-bar-text">A Title Bar</div>
            <div className="title-bar-controls">
            <button aria-label="Close"></button>
            </div>
        </div>
        <ul className="tree-view">
          <li>Table of Contents</li>
          <li>
            <ul>
              <li>HomePage</li>
              <li>Articles</li>
              <li>Categories</li>
            </ul>
          </li>
        </ul>
      </div>
    );
}

export default Navigation;