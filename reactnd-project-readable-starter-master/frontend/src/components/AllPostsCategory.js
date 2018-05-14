import React, {Component} from "react";
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap'
import Post from './Post'

class AllPostsCategory extends Component{

    render(){
        return (
            <div>
                <Grid>
                    {this.props.posts.map((postItem, index) => (
                        <Row className="show-grid" key={index}><Col md={10}><Post post={postItem}/></Col></Row>))}
                    <Post/>
                </Grid>
            </div>        )
    }
}

function mapStateToProps({categoryReducer, postReducer}){
    return {
        posts: postReducer.posts
    }
}

export default connect(
    mapStateToProps,
   // mapDispatchToProps
)(AllPostsCategory);