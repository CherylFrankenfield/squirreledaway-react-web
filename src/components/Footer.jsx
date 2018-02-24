import React from 'react';

function Footer() {
  const footerStyles ={
    backgroundColor: '#AD9329'
  }
  return(
    <div style={footerStyles}>
      <ul>
        <li>Bucket List</li>
        <li>Search</li>
        <li>New</li>
        <li>Calendar</li>
        <li>Account</li>
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
          }
          li {
            list-style: none;
            margin-right: 20px;
          }
            `}
      </style>
    </div>
  );
}

export default Footer;
