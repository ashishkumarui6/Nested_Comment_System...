import React, { useState } from "react";
import styles from "./index.module.css";

const Comment = ({ comment = {}, onSubmitComment = () => {} }) => {
  const [expand, setExpand] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleChange = (e) => {
    setReplyContent(e.target.value);
  };

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleReplySubmit = () => {
    if (replyContent) {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };
  return (
    <div className={styles.comment}>
      <>
        <p className={styles.comment_content}>{comment.content}</p>
        <p className={styles.comment_info}>{comment.votes}</p>
        <p className={styles.comment_info}>
          {new Date(comment.timestamp).toLocaleString()}
        </p>
      </>
      <div className={styles.comment_actions}>
        <button className={styles.comment_button} onClick={toggleExpand}>
          {expand ? "Hide Reply" : " Reply"}
        </button>
        <button className={styles.comment_button}>Edit</button>
        <button className={styles.comment_button}>Delete</button>
      </div>

      {expand && (
        <div className={styles.comment_replies}>
          <div className={styles.addComment}>
            <textarea
              onChange={handleChange}
              value={replyContent}
              rows={1}
              cols={40}
              className={styles.comment_textarea}
              placeholder="Add a new comment..."
            />
            <button className={styles.commmentBtn} onClick={handleReplySubmit}>
              Add Comment
            </button>
          </div>
          {comment?.replies?.map((reply) => {
            return (
              <Comment
                key={reply.id}
                comment={reply}
                onSubmitComment={onSubmitComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
