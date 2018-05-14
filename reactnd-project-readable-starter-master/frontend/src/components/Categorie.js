import React, {Component} from "react";
import '../App.css';
import {Label} from "react-bootstrap"
import { connect } from 'react-redux';
import Post from './Post'
import {Grid, Row, Col} from 'react-bootstrap'

class Categorie extends Component {
    render() {  

        console.log(this.props.posts)
        console.log(this.props.category.name)
        console.log(this.props.posts.filter((post) => (post.category == this.props.category.name)))

        return (
            <div>
              <Grid>
                    {this.props.posts.filter((post) => (post.category == this.props.category.name)).map((postItem, index) => (
                        <Row className="show-grid" key={index}><Col md={10}><Post post={postItem}/></Col></Row>))}
                    <Post/>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({categoryReducer, postReducer}){
    return {
        posts: postReducer.posts
    } 
}
export default connect(
    mapStateToProps,
  //  mapDispatchToProps
)(Categorie);