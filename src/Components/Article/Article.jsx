import React from 'react';
import './Article.css';

 const Article = (props) => {
     return (
        <li className='articleList__item'>
            <article className='article'>
                <h3 className='article__title' >{props.title}</h3>
                <p className='article__text' >{props.body}</p>
            </article>
        </li>
     )
 }
 export default Article;