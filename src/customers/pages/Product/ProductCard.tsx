import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { Button } from '@mui/material';
import { ModeComment, ShoppingCart } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../types/ProductTypes';

/* eslint-disable @typescript-eslint/no-explicit-any */

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0); // mặc định là ảnh đầu tiên
  const [isHovered, setIsHovered] = useState(false); // trạng thái hover
  const navigate = useNavigate();
  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length); // tăng chỉ số ảnh hiện tại và quay lại đầu nếu vượt quá số lượng ảnh
      }, 1000); // thay đổi ảnh sau mỗi .. giây
    } else if (interval) {
      clearInterval(interval); // dừng interval khi không hover
      interval = null; // reset interval
    }
    return () => clearInterval(interval); // dọn dẹp interval khi component unmount hoặc khi isHovered thay đổi
  }, [isHovered]);

  return (
    <>
      <div
        onClick={() =>
          navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id}`)
        }
        className="group px-4 relative"
      >
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)} // khi hover vào card
          onMouseLeave={() => setIsHovered(false)} // khi rời khỏi card
        >
          {item.images.map((item, index) => (
            <img
              onClick={() => navigate('/product-details/:categoryId/:name/:productId')}
              className="card-media object-top"
              src={item}
              alt=""
              style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
            />
          ))}

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3  ">
                <Button variant="contained" color="secondary">
                  <ShoppingCart sx={{ color: teal[500] }} />
                </Button>
                <Button
                  onClick={() => navigate('/reviews/:productId')}
                  variant="contained"
                  color="secondary"
                >
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1> </h1>
            <p>{item.title}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">
              {item.price}
              <span className="text-gray-400 text-sm">đ</span>
            </span>
            <span className="thin-line-through text-gray-400">
              {item.discountPrice}
              <span className="text-gray-400 text-sm">đ</span>
            </span>
            <span className="discount text-red-500 font-semibold">{item.discountPercent}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
