import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = function () {
  return (
    <div className="container ui comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:54 pm"
          comment="Nice Blog"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 2:00 pm"
          comment="Intersting"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Today at 9:15 am"
          comment="Kudos for the effort"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>Are you sure ?</div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
