import React from 'react';
import { ContactRow } from './ContactRow';

export function ContactList({ users, setSelectedUserId }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {users.map((user) => {
          return (
            <ContactRow
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              id={user.id}
              setSelectedUserId={setSelectedUserId}
            />
          );
        })}
      </tbody>
    </table>
  );
}
