import { useState } from "react";

const UseCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, comment],
        };
      } else if (comment.replies && comment.replies.lenght > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, comment),
        };
      }
      return comment;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      );
    } else {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  };
  return {
    comments,
    insertComment,
  };
};

export default UseCommentTree;
