'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store'; // Import hooks từ store.ts

import { fetchUserStart } from '@/reducer/userSlice'; // Import action từ userSlice.ts
import { fetchUser } from '@/reducer/userSlice';
import * as api from '@/utils/api'
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);

  const handleFetchUser = () => {
    dispatch(fetchUser());

    const get_user_info = async () => {
      try {
        const user = await api.get_user_info2(); // Corrected to call the function
        console.log("User:", user);
      } catch (error) {
        console.log('Error:', error);
        // Handle error if necessary
      }
    }
    
    get_user_info();
 
  };

  useEffect(()=>{
    

    console.log("redux",user?.password)
  },[])
  return (
    <div className="sidebar">
      <button onClick={handleFetchUser}>Fetch User</button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {/* Hiển thị thông tin user */}
          {/* {/* <h1>User Name: {user?.name}</h1> */}
          <p>Email: {user?.password}</p> 
        </div>
      )}
    </div>
  );
};

export default Sidebar;
