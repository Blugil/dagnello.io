import React from 'react';
import Profile from '../components/profile/profile';

function Blog({ component }: any) {
  return (
    <div className="main">
      <div id="profile">
        <Profile />
      </div>
      <div id="content">{component || 'under construction'}</div>
    </div>
  );
}

export default Blog;
