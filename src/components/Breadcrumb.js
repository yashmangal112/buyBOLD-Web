// Breadcrumb.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Breadcrumb({ paths }) {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div className="text-gray-600 ml-7 pl-6 pr-6">
      <ul className="flex items-center space-x-2">
        <li>
          <span
            className="cursor-pointer"
            onClick={() => handleClick('/')}
          >
            Home
          </span>
        </li>
        {paths.map((path, index) => (
          <li key={index}>
            <span className='mx-1'> &gt; </span>
            <span
              className="cursor-pointer"
              onClick={() => handleClick(path.url)}
            >
              {path.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
