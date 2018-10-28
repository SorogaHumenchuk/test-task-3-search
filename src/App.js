import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postsList} from './redux/actions/articlesAction';
import {articlephotos} from './redux/actions/articlePhotosAction';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import Search from './Components/Search/Search';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.postsList();
    this.props.articlephotos();
  }

  render() {
    return (
      <div className='app__wrraper'> 
        <div className='app__container'> 
          <Search/>
          <ArticlesList/>
        </div>
      </div>
    );
  }
}
function MSTP (state) {
  return {
    articles: state.articles
  }
}
function MDTP (dispatch) {
  return {
    postsList: function() {
      dispatch(postsList())
    },
    articlephotos: function() {
      dispatch(articlephotos())
    }

  }
}


export default connect(MSTP, MDTP) (App);
