export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
export const LOAD_POSTS_FOR_CATEGORY = 'LOAD_POSTS_FOR_CATEGORY';
export const LOAD_COMMENT_FOR_POST = 'LOAD_COMMENT_FOR_POST';
export const SORT_POSTS_BY_COMMENT_COUNT = 'SORT_POSTS_BY_COMMENT_COUNT'
export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE'
export const SORT_POSTS_BY_VOTE = 'SORT_POSTS_BY_VOTE'

export function loadAllCategories({ categories }) {
    return {
        type: LOAD_ALL_CATEGORIES,
        categories
    };
}

export function loadAllPosts({ posts }) {
    return {
        type: LOAD_ALL_POSTS,
        posts
    };
}

export function loadPostsForCategory({ posts }) {
    return {
        type: LOAD_POSTS_FOR_CATEGORY,
        posts
    }
}

export function loadCommentsForPost({ postId }) {
    return {
        type: LOAD_COMMENT_FOR_POST,
        postId
    }
}

export function sortPostsByCommentCount() {
    return {
        type: SORT_POSTS_BY_COMMENT_COUNT,
    }
}

export function sortPostsByCommentVote() {
    return {
        type: SORT_POSTS_BY_VOTE,   
    }
}

export function sortPostsByDate() {
    return {
        type: SORT_POSTS_BY_DATE
    }
}

