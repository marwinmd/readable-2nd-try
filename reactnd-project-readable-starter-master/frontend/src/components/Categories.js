import React, { Component } from "react";
import { fetchAllCategories, fetchAllPosts } from "../utils/api";
import { LOAD_ALL_CATEGORIES, LOAD_ALL_POSTS, loadAllPosts } from "../actions/index";
import { connect } from 'react-redux';
import { loadAllCategories } from '../actions';
import { Tab, Tabs, Grid, Row, Col } from 'react-bootstrap';
import AllPostsCategory from "./AllPostsCategory";
import Categorie from "./Categorie";
import PostSorter from "./PostSorter"

class Categories extends Component {

    constructor(props) {
        super(props);

        fetchAllCategories().then((data) => {
            var obj = { type: LOAD_ALL_CATEGORIES, categories: data }
            this.props.getCategories(obj);
        });

        fetchAllPosts().then((data) => {
            var obj = { type: LOAD_ALL_POSTS, posts: data }
            this.props.getAllPosts(obj);
        });
    }

    render() {
        return (
            <div>
                <Grid> <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Tabs defaultActiveKey={0} id="tabbar">
                            {<Tab eventKey={0} title="All"><AllPostsCategory /></Tab>}
                            {this.props.categories.map((categorie, index) => (
                                <Tab eventKey={index + 1} title={categorie.name} key={index + 1}>
                                    <Categorie category={categorie} /></Tab>))}
                        </Tabs>
                    </Col>
                    <Col xs={6} md={4}>
                        <PostSorter />
                    </Col></Row></Grid>



            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: (data) => dispatch(loadAllCategories(data)),
        getAllPosts: (data) => dispatch(loadAllPosts(data))
    }
}

function mapStateToProps({ categoryReducer, postReducer }) {
    return {
        categories: categoryReducer.categories,
        posts: postReducer.posts
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);