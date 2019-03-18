function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      console.log("Removing comment");
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postID !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postID]: postComments(state[action.postID], action)
    };
  }
  return state;
}

export default comments;