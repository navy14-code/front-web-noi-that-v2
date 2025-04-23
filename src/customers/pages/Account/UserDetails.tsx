import React from 'react';
import ProfileFieldCard from '../../../admin/component/ProfileFieldCard';
import { Divider } from '@mui/material';

const UserDetails = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold to-gray-600">Thông tin cá nhân</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Name" value={`Nam Vu`} />
          <Divider />
          <ProfileFieldCard keys="Email" value={`nam@gmail.com`} />
          <Divider />
          <ProfileFieldCard keys="Phone" value={`0888291733`} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
