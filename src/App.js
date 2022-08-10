import React from 'react';
import CardamomLoader from './loader/CardamomLoader';
import Counter from './components/Counter';
import './styles.scss';
import UserForm from './components/UserForm';
import ShowList from './components/ShowList';

export default function App() {
  return (
    <div style={{ backgroundColor: 'white', height: '500px' }}>
      {/* <CardamomLoader /> */}
      {/* <Counter /> */}
      {/* <UserForm /> */}
      <ShowList />
    </div>
  );
}
