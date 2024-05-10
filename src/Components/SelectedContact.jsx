export default function SelectedContact({ contact }) {
    return (
      <div>
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        {/* Display other details here */}
      </div>
    );
  }
