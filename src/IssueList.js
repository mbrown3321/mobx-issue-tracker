import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import IssueContext from "./IssueContext";

const IssueList = () => {
  const store = useContext(IssueContext);

  console.log("store", store.issues);

  return useObserver(() => (
    <div className="container">
      <h3>Create Issues</h3>
      {store.issues.map(issue => (
        <div className="row">
          <div className="cell">
            <strong>Issue: </strong> {issue.label}
          </div>
          <div className="cell">
            <strong>Status: </strong> {issue.status}
          </div>
          <div className="cell">
            <strong>Priority:</strong> {issue.priority}
          </div>
          <div className="cell">
            <button onClick={() => store.removeIssue(issue)}>Delete</button>
          </div>
        </div>
      ))}
      <div>
        <strong>
          Issues Complete: {store.completedIssueCount} / {store.issueCount}
        </strong>
      </div>
    </div>
  ));
};

export default IssueList;
