import React from 'react';
import {connect} from 'react-redux';
import './ArticlesList.css';
import Article from '../Article/Article';

 const ArticlesList = (props) => {
     return (
        <ul className = 'articles__list'> {
            Object.keys(props.articles).length > 0 ? props.articles.map(el => 
                <Article
                    title={el.title}
                    body={el.body}
                    key={el.id}
                />
            ) : null }
        </ul>   
     )
 }

 function mapStateToProps (state) {
     return {
        articles: state.articles,
     }
 }

 export default connect (mapStateToProps, null) (ArticlesList);