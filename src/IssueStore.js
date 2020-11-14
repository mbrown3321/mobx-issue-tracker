import React from "react";
import { useLocalObservable } from "mobx-react";
import IssueContext from "./IssueContext";

const IssueStore = ({ children }) => {
  const issueStore = useLocalObservable(() => ({
    issues: [],
    addIssue: issue => {
      issueStore.issues.push(issue);
    },
    removeIssue: issue => {
      issueStore.issues = issueStore.issues.filter(i => i !== issue);
    },
    get issueCount() {
      return issueStore.issues.length;
    },
    get completedIssueCount() {
      return issueStore.issues.filter(i => i.status === "Done").length;
    }
  }));

  return (
    <IssueContext.Provider value={issueStore}>{children}</IssueContext.Provider>
  );
};

export default IssueStore;
