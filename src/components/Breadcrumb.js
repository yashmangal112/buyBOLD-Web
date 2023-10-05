// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ paths }) {
  return (
    <div className="text-gray-600 ml-7 pl-6 pr-6">
      <ul className="flex items-center space-x-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index}>
            <span className='mx-1'> &gt; </span>
            <Link to={path.url}>{path.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
