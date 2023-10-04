import { API_URL } from "../Uttils/constants";

export const getComments = () => {
  return fetch(`${API_URL}/comments`)
    .then((res) => res.json())
    .then((result) => result)
    .catch((err) => alert(err));
};

export const createComment = () => {
  // create the comment with POST method
};

export const deleteComment = () => {
  // deleting comment with DELETE method
};
