import "./App.css";
import { useState } from "react";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="container">
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
