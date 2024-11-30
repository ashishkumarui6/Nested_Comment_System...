import React, { useState } from "react";
import styles from "./index.module.css";
import UseCommentTree from "../../hooks/Use-comment-tree";
import Comment from "../comments";
const NestedComments = ({
  comments,
  onSubmit = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const [comment, setComment] = useState("");

  const { comments: commentData, insertComment } = UseCommentTree(comments);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
  };

  const handleSubmit = () => {
    if (comment) {
      handleReply(undefined, comment);
      setComment("");
    }
  };

  return (
    <>
      <div className={styles.addComment}>
        <textarea
          onChange={handleChange}
          value={comment}
          rows={2}
          cols={50}
          className={styles.comment_textarea}
          placeholder="Add a new comment..."
        />
        <button className={styles.commmentBtn} onClick={handleSubmit}>
          Add Comment
        </button>
      </div>

      {commentData.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReply}
          />
        );
      })}
    </>
  );
};

export default NestedComments;
