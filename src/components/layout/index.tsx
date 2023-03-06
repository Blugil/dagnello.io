import React from 'react';
import Profile from '../profile/profile';

const Blog = ({ component }: any) => {
  return(
    <div className='main'>
      <div id='profile'>
        <Profile />
      </div>
      <div id='content'>
          {component ? component : "under construction"}
      </div>
    </div>
  )
}

export default Blog;
