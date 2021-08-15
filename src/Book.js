import React from 'react';

const Book = (props) => {
  const { img, title, author, goodreads } = props;

  // attribute, eventHandler
  // onClick, onMouseOver
  return (
    <article className='book'>
      <a href={goodreads} target='_blank' rel='noreferrer'>
        <img
          src={img}
          alt=''
          onMouseOver={(e) => {
            e.target.style.border = '8px solid #617d98';
            e.target.style.borderRadius = '35%';
            e.target.style.width = '250px';
          }}
          onMouseOut={(e) => {
            e.target.style.border = '0px';
            e.target.style.borderRadius = '0%';
            e.target.style.width = '200px';
          }}
        />
      </a>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <p>{}</p> */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

// default export
export default Book;
