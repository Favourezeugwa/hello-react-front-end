// Path: app\javascript\components\greeting.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/greeting/greetingSlice';

const greeting = () => {
  const dispatch = useDispatch();
  const selectMessage = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <>
      <h2>Refresh the page to see a new greeting</h2>
      <ul>
        {selectMessage.slice(0, 1).map((message) => (
          <li key={message.id}>{message.greeting}</li>
        ))}
      </ul>
    </>
  );
};

export default greeting;
