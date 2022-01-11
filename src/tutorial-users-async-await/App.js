import { useState } from 'react';

const URL_ADDRESS = 'https://619b9d0727827600174456df.mockapi.io/users';

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
        const response = await fetch(URL_ADDRESS);
        const data = await response.json();
        if (response.ok) { 
            setUsers(data);
        } else {
            throw Error('Something went wrong...') 
        }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} {user.surname}
        </li>
      ))}
    </div>
  );
}

export default App;
