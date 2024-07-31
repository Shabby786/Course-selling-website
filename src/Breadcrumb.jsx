// Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="max-w-4xl mx-auto py-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-gray-500">
            Home
          </Link>
          <svg
            className="fill-current w-3 h-3 mx-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M283 293l-91 91c-9 9-24 9-33 0l-90-90c-8-8-8-22 0-31l22-22c8-8 22-8 30 0l37 37V144c0-13 11-24 24-24h16c13 0 24 11 24 24v133l37-37c8-8 22-8 30 0l22 22c9 9 9 23 0 31z"
            />
          </svg>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link to={routeTo} className="text-gray-500">
                    {name}
                  </Link>
                  <svg
                    className="fill-current w-3 h-3 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M283 293l-91 91c-9 9-24 9-33 0l-90-90c-8-8-8-22 0-31l22-22c8-8 22-8 30 0l37 37V144c0-13 11-24 24-24h16c13 0 24 11 24 24v133l37-37c8-8 22-8 30 0l22 22c9 9 9 23 0 31z"
                    />
                  </svg>
                </>
              ) : (
                <span className="text-gray-600">{name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
