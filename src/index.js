// for dependencies that are coming from node modules, we don't need relative paths
import React from 'react';
import ReactDom from 'react-dom';

// import CSS, we use relative path because it's not our project's dependency anymore
// it's a .css file and not .js, so we need the extension
import './index.css';

// getting specific pieces of data

// named import
// since it's a .js file, we don't need to have an extension
import { books } from './books';
// default import
import Book from './Book';

// setup vars here if we have them

// stateless functional component, dumb component:
// always return JSX

/* function BookList() {
  return <h4>this is john and this is my first component</h4>;
}  */

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

/* // arrow function implicit return
const Person = () => <h2>john doe</h2>;

// arrow function explicit return
const Message = () => {
  return <p>this is my message</p>;
}; */

// doing it as an arrow function:
// it can take props as an argument
// .createElement takes html node to be created in quotes, props and content to render in our element

/* const BookList = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world')
  );
}; */

ReactDom.render(<BookList />, document.getElementById('root'));
