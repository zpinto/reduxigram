// increment
export function increment(index) {
    return {
        type: "INCREMENT_LIKES",
        index
    }
}

// add comment
export function addComment(postID, author, comment) {
    return {
        type: "ADD_COMMENT",
        postID,
        author,
        comment
    }
}

//remove comment

export function removeComment(postID, index) {
    console.log("removing");
    return {
        type: 'REMOVE_COMMENT',
        postID,
        index
    }
}