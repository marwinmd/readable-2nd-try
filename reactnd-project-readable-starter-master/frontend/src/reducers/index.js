import { combineReducers } from 'redux'
import { LOAD_ALL_CATEGORIES, LOAD_ALL_POSTS, LOAD_POSTS_FOR_CATEGORY, SORT_POSTS_BY_COMMENT_COUNT, SORT_POSTS_BY_DATE, SORT_POSTS_BY_VOTE } from "../actions/index";

const initialStateForCategory = {
    categories: []
}

const initialStateForPosts = {
    posts: []
}

function categoryReducer(state = initialStateForCategory, action) {
    switch (action.type) {
        case LOAD_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        default: return state
    }
}
function postReducer(state = initialStateForPosts, action) {
    switch (action.type) {
        case LOAD_ALL_POSTS:
            return {
                posts: action.posts
            };
        case LOAD_POSTS_FOR_CATEGORY: // kann raus
            break;

        case SORT_POSTS_BY_DATE:
            return {
                posts: state.posts.sort((a, b) => a.timestamp - b.timestamp)
            }
        case SORT_POSTS_BY_COMMENT_COUNT:
            return {
                posts: state.posts.sort((a, b) => a.commentCount - b.commentCount)
            }
        case SORT_POSTS_BY_COMMENT_COUNT:
            return {
                posts: state.posts.sort((a, b) => a.voteScore - b.voteScore)
            }
        default:
            return state;
    }
}
export default combineReducers({
    categoryReducer,
    postReducer
})