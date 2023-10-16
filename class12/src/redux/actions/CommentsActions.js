import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../../constants/CommentsConstants";

export const fetchCommentsSuccess = (comments) => {
  // the json with all the comments
  console.log("sync action with success");
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchCommentsRequest = () => {
  console.log("inside fetch comments request async");
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => dispatch(fetchCommentsSuccess(json))) // call is successfull, we have the json with the comments
      .catch((err) => dispatch(fetchCommentsFail(err))); // if the call is not successfull we have the error as response
  };
};
