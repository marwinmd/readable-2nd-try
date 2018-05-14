import React, { Component } from 'react'
import { DropdownButton, MenuItem, Label } from 'react-bootstrap'
import {sortPostsByCommentCount, sortPostsByCommentVote, sortPostsByDate} from '../actions'
import { connect } from 'react-redux';


class PostSorter extends Component {
    state = {
        buttonText: 'Date'
    }

    sortByDate  = (evt, eventKey) => {
        this.setState({buttonText: 'Date'})
        this.props.sortByDate()
    }

    sortByCommentCount  = (evt, eventKey) => {
        this.setState({buttonText: 'Comments'})
        this.props.sortByCommentCount()
    }

    sortByVoteScore  = (evt, eventKey) => {
        this.setState({buttonText: 'Votes'})
        this.props.sortByVoteScore()

    }
    render() {
        return (
            <div><h3> <Label bsStyle="default">Sorted by: </Label>
                <DropdownButton bsStyle={'default'}
                    id='sortButton'
                    title={this.state.buttonText}>
                    <MenuItem eventKey={1} active onSelect={this.sortByDate}>Date</MenuItem>
                    <MenuItem eventKey={2} onSelect={this.sortByCommentCount}>Comments</MenuItem>
                    <MenuItem eventKey={3} onSelect={this.sortByVoteScore}>Votes</MenuItem>
                </DropdownButton> </h3>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sortByCommentCount: () => dispatch(sortPostsByCommentCount()),
        sortByVoteScore: () => dispatch(sortPostsByCommentVote()),
        sortByDate: () => dispatch(sortPostsByDate())
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
)(PostSorter);