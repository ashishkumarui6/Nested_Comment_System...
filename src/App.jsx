import React from "react";
import NestedComments from "./components/NestedComents";
import { commentData } from "./data/commentData";

const App = () => {
  return (
    <div className="main">
      <div className="top">
        <h1 className="heading-desk">Nested Comment System...</h1>
        <h1 className="heading-mobile">Nested Comment</h1>
        <hr />
        <h1 className="heading-mobile">System...</h1>
      </div>
      <NestedComments
        comments={commentData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onVote={() => {}}
        // onDownvote={() => {}}
      />
    </div>
  );
};

export default App;
