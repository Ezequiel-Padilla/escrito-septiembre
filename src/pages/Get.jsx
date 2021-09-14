import React from 'react';
import MeetingController from '../networking/controllers/MeetingController';

const Get = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    MeetingController.get();
  };
  return (
    <div className="get">
      <form onSubmit={handleSubmit}>
        <button type="submit">Get</button>
      </form>
    </div>
  );
};

export default Get;
