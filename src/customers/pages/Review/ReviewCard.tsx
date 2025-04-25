import { Comment, Delete } from '@mui/icons-material';
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material';
import { red } from '@mui/material/colors';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-start">
      <Grid container spacing={9}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: '#9155FD' }}>
              NV
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Nam Vu</p>
              <p className="opacity-70">2025-04-21T23:08:15</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p>Giao hàng nhanh đóng gói cẩn thận</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://down-vn.img.susercontent.com/file/75eae99fe836cf4ce0a0b3ef4b0fc425@resize_w72_nl.webp"
              alt=""
            />
          </div>
        </Grid>
      </Grid>

      <div className="flex flex-col">
        <IconButton
          onClick={() => navigate('/reviews/:productId')}
          disableFocusRipple
          sx={{
            p: 0.5, // padding nhỏ lại
            m: 1, // margin nhỏ
            border: 'none', // xoá border
            outline: 'none', // xoá outline
            boxShadow: 'none', // xoá shadow
            '&:focus': { outline: 'none' },
            '&:active': { outline: 'none' },
            '&:hover': { backgroundColor: 'transparent' }, // bỏ luôn nền hover
          }}
        >
          <Comment sx={{ color: '#00927c' }} />
        </IconButton>
        {/* nut xoa */}
        <IconButton
          disableFocusRipple
          sx={{
            p: 0.5, // padding nhỏ lại
            m: 1, // margin nhỏ
            border: 'none', // xoá border
            outline: 'none', // xoá outline
            boxShadow: 'none', // xoá shadow
            '&:focus': { outline: 'none' },
            '&:active': { outline: 'none' },
            '&:hover': { backgroundColor: 'transparent' }, // bỏ luôn nền hover
          }}
        >
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
