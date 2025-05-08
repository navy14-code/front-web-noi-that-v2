import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { red, teal, yellow } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import '../.././pages/Product/ProductCard.css';
import {
  Add,
  AddShoppingCart,
  LocalShipping,
  Payment,
  Remove,
  ShoppingBag,
  VerifiedUser,
  VolunteerActivism,
} from '@mui/icons-material';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';
import { useNavigate, useParams } from 'react-router-dom';
import store, { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchProductById } from '../../../State/customer/ProductSlice';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product } = useAppSelector((store) => store);
  const [activeImage, setActiveImage] = useState(0);

  // useEffect(()=>{
  //   dispatch(fetchProductById(Number(productId)))
  // },[productId])

  const handleActiveImage = (value: number) => () => {
    setActiveImage(value);
  };
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images.map((item, index) => (
              <img
                onClick={handleActiveImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[80%]">
            <img className="w-full rounded-md" src={product.product?.images[activeImage]} alt="" />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">{product.product?.title}</h1>
          <p className="text-gray-500 font-semibold">{product.product?.description}</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4,5</span>
              <StarIcon sx={{ color: yellow[800], fontSize: '17px' }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 Đánh giá</span>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">{product.product?.discountPrice} vnđ</span>

              <span className="line-through text-gray-500">{product.product?.price} vnđ</span>

              <span className="text-primary-color font-semibold">
                {product.product?.discountPercent}%
              </span>
            </div>
            <p className="text-sm">Miễn phí vận chuyển cho tất cả các đơn hàng</p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: red[500] }} />
              <p>Giao hàng toàn quốc</p>
            </div>

            <div className="flex items-center gap-4">
              <VolunteerActivism sx={{ color: red[500] }} />
              <p>Tặng bóng 3W khi mua tại cửa hàng</p>
            </div>

            <div className="flex items-center gap-4">
              <Payment sx={{ color: red[500] }} />
              <p>Thanh toán tiện lợi</p>
            </div>

            <div className="flex items-center gap-4">
              <VerifiedUser sx={{ color: red[500] }} />
              <p>Bảo hành linh hoạt</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>SỐ LƯỢNG</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                sx={{
                  color: '#00927c',
                  border: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button
                sx={{
                  color: '#00927c',
                  border: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
                onClick={() => setQuantity(quantity + 1)}
              >
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{
                backgroundColor: '#00927c',
                color: '#fff',
                border: '1px solid #00972c',
                py: '1rem',
                '&:hover': {
                  opacity: 0.55,
                },
              }}
            >
              Thêm vào giỏ hàng
            </Button>

            <Button
              onClick={() => navigate('/cart')}
              fullWidth
              variant="contained"
              startIcon={<ShoppingBag />}
              sx={{
                color: '#00927c',
                py: '1rem',
                '&:hover': {
                  background: 'gray-200',
                },
              }}
            >
              Mua Ngay
            </Button>
          </div>

          <div className="mt-5">
            <p className="mb-0 text-center">
              Gọi đặt mua
              <a className="text-primary-color" href="tel:0966.07.85.85">
                {' '}
                0966.07.85.85{' '}
              </a>
              (7:00 AM - 11:00 PM)
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold text-primary-color text-center">Sản phẩm tương tự</h1>
        <div className="mt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
