import React, { useContext, useState } from "react";
import IssueContext from "./IssueContext";

const IssueForm = () => {
  const store = useContext(IssueContext);
  const [issue, setIssue] = useState({
    label: "",
    status: "New",
    priority: "High"
  });

  const handleUpdate = (key, value) =>
    setIssue(prevState => ({
      ...prevState,
      [key]: value
    }));

  const handleCreate = () => {
    store.addIssue(issue);
    setIssue({ label: "", status: "New", priority: "High" });
  };

  return (
    <div className="container">
      <h3>Create Issue</h3>
      <div>
        <label for="issue-label">Label: </label>
        <input
          id="issue-label"
          type="text"
          value={issue.label}
          onChange={event => handleUpdate("label", event.target.value)}
        />
      </div>
      <div>
        <label for="issue-status">Status: </label>
        <select
          id="issue-status"
          value={issue.status}
          onChange={event => handleUpdate("status", event.target.value)}
        >
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div>
        <label for="issue-priority">Priority: </label>
        <select
          id="issue-priority"
          value={issue.priority}
          onChange={event => handleUpdate("priority", event.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default IssueForm;
