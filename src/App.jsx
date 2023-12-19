import { useState, useEffect } from 'react';
import { ContactList } from './components/ContactList';
import { ContactCard } from './components/ContactCard';
import './App.css';

function App() {
  const URL = 'http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users';
  const [userList, setUserList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const rawUserData = await fetch(URL);
        const deserializedUserData = await rawUserData.json();
        return deserializedUserData;
      } catch (e) {
        console.error(e);
      }
    }
    getData().then((response) => setUserList(response));
  }, []);

  useEffect(() => {
    async function getSingleContact() {
      try {
        if (selectedUserId) {
          const selectedUser = await fetch(`${URL}/${selectedUserId}`);
          const deserializedSelectedUser = await selectedUser.json();
          setSelectedUser(deserializedSelectedUser);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getSingleContact();
  }, [selectedUserId]);

  return (
    <>
      {selectedUser ? (
        <div>
          <ContactCard userId={selectedUserId} user={selectedUser} />
          <button onClick={(e) => setSelectedUser(null)}>Return to List</button>
        </div>
      ) : (
        <ContactList setSelectedUserId={setSelectedUserId} users={userList} />
      )}
    </>
  );
}

export default App;
