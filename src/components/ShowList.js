import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowList = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log('error occured');
        setUsers([]);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {/* {JSON.stringify(users)} */}
      <ul style={{ margin: '10px' }}>
        {users.map((item) => {
          return (
            <li style={{ padding: '5px', border: '1px solid', margin: '10px' }}>
              {item.name} -- {item.email}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShowList;
