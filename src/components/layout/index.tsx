import React from 'react';
import Profile from '../profile/profile';

const Blog: React.FC<any> = ({ component }) => {
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
