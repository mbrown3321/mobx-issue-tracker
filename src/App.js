import IssueStore from "./IssueStore";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";

import "./App.css";

function App() {
  return (
    <IssueStore>
      <IssueForm />
      <IssueList />
    </IssueStore>
  );
}

export default App;
