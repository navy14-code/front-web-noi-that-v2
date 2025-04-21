import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { ModeComment, ShoppingCart } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

/* eslint-disable @typescript-eslint/no-explicit-any */


const images = [
  "https://product.hstatic.net/200000058312/product/vlchpl-018_d67f6449a3434436baff70ccf800a65c_grande.png",
  "https://product.hstatic.net/200000058312/product/vlchpl-017_90898b8c3d224a6b83e4294515b93e61_grande.jpg",
  "https://product.hstatic.net/200000072226/product/0808008_58a160847f6a4e378b54550474c983ca_large.png",
  "https://product.hstatic.net/200000058312/product/v75_33587a1fd7a44fc49a3f4fe5154ca4b3_grande.jpg"

]

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0); // mặc định là ảnh đầu tiên
  const [isHovered, setIsHovered] = useState(false); // trạng thái hover

  useEffect(() => {
    let interval: any
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length) // tăng chỉ số ảnh hiện tại và quay lại đầu nếu vượt quá số lượng ảnh
      }, 1000) // thay đổi ảnh sau mỗi .. giây
    }
    else if (interval) {
      clearInterval(interval); // dừng interval khi không hover
      interval = null; // reset interval
    }
    return () => clearInterval(interval); // dọn dẹp interval khi component unmount hoặc khi isHovered thay đổi

  }, [isHovered])
  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'
          onMouseEnter={() => setIsHovered(true)} // khi hover vào card
          onMouseLeave={() => setIsHovered(false)} // khi rời khỏi card
        >

          {images.map((item, index) => <img
            className='card-media object-top'
            src={item} alt=''
            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
          />)}

          {isHovered && <div className='indicator flex flex-col items-center space-y-2'>
            <div className='flex gap-3  '>
              <Button variant='contained' color='secondary'>
                <ShoppingCart sx={{ color: teal[500] }} />
              </Button>
              <Button variant='contained' color='secondary'>
                <ModeComment sx={{ color: teal[500] }} />
              </Button>
            </div>

          </div>
          }

        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name'>
            <h1>Đèn Chùm LED </h1>
            <p>Đèn chùm LED auto</p>

          </div>
          <div className='price flex items-center gap-3'>

            <span className='font-sans text-gray-800'>
              1.200.000<span className='text-gray-400 text-sm'>đ</span>
            </span>
            <span className='thin-line-through text-gray-400'>
              1.500.000<span className='text-gray-400 text-sm'>đ</span>
            </span>
            <span className='discount text-red-500 font-semibold'>
              20%
            </span>

          </div>

        </div>

      </div >
    </>
  )
}

export default ProductCard
