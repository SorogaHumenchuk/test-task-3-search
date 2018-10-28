import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { getValue } from '../../redux/actions/inputAction';
import {filterPosts} from '../../redux/actions/articlesAction';


 const Search = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        props.filterPosts(props.value);
    }
    const getInpValue = (e) => {
        const value = e.target.value;
        props.getValue(value);
    }

    // const filter = () => {
    //     props.articles.filter(el => 
    //         (el.title.includes(props.value) || el.body.includes(props.value)) ?
    //         console.log(el)
    //         : console.log('null')

    //     )
    // }

     return (
     <form onSubmit={onSubmit}>
         <input onChange={getInpValue} type="text"/>
         <button type="submit">Search</button>
     </form>
     )
 }


 function mapStateToProps (state) {
    return {
        value: state.value,
        articles: state.articles,
    }
} 
function mapDispatchToProps (dispatch) {
    return {
        getValue: function(value) {
            dispatch(getValue(value))
        },
        filterPosts: function(filter) {
            dispatch(filterPosts(filter))
        }
    }
}

 export default connect (mapStateToProps, mapDispatchToProps) (Search);