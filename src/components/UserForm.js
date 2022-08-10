import React, { useState } from 'react';

const UserForm = () => {
  const [userForm, setUserForm] = useState({
    age: '25 - 29',
    gender: 'female',
  });

  const handleSubmitAction = (e) => {
    e.preventDefault();
    console.log('form submitted!!', userForm);
  };

  const handlerFormChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    setUserForm({
      ...userForm,
      [name]: val,
    });
  };

  const handleReset = () => {
    console.log('form reset');
    setUserForm({});
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmitAction} onReset={handleReset}>
        <h2>User Form</h2>
        <div style={{ margin: '10px' }}>
          <label style={{ margin: '15px' }}>Name</label>
          <input name="userName" type="text" onChange={handlerFormChange} />
        </div>
        <div style={{ margin: '10px' }}>
          <label style={{ margin: '15px' }}>Email</label>
          <input name="userEmail" type="email" onChange={handlerFormChange} />
        </div>
        <div style={{ margin: '10px' }}>
          <label style={{ margin: '15px' }}>Phone</label>
          <input name="userPhone" type="tel" onChange={handlerFormChange} />
        </div>
        <div style={{ margin: '10px' }}>
          <label style={{ margin: '15px' }}>Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={handlerFormChange}
            checked={userForm.gender === 'male'}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handlerFormChange}
            checked={userForm.gender === 'female'}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div style={{ margin: '10px' }}>
          <label style={{ margin: '15px' }}>Age</label>
          <select onChange={handlerFormChange} name="age" value={userForm.age}>
            <option value={'20 - 24'} selected>
              20 - 24
            </option>
            <option>25 - 29</option>
            <option>30 - 35</option>
          </select>
        </div>
        <button style={{ margin: '10px' }} type="submit">
          Submit
        </button>
        <button style={{ margin: '10px' }} type="reset">
          Reset
        </button>
      </form>
    </div>
  );
};

export default UserForm;
