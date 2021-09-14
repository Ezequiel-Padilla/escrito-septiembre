import React, { useState } from 'react';
import MeetingController from '../networking/controllers/MeetingController';

const Register = () => {
  const type = 2;
  const [topic, setUsername] = useState('');
  const [startTime, setPassword] = useState('');
  const [duration, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    MeetingController.register(type, topic, startTime, duration);
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic">
          Topic:
          <input type="text" id="topic" value={topic} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="startTime">
          Start time:
          <input type="datetime-local" id="startTime" value={startTime} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label htmlFor="duration">
          Duration:
          <input type="number" id="duration" value={duration} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
