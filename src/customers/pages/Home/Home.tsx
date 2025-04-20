import React from 'react';
import FanCategory from './FanCategory/FanCategory';
import CategoryGrid from './CategoryGrid/CategoryGrid';
import Deal from './Deal/Deal';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import { Button } from '@mui/material';
import { Storefront } from '@mui/icons-material';


const Home = () => {

    return (
        <>
            <div className="space-y-5 lg:space-y-10 px-5 lg:px-20 relative pb-20">

                <section className='pt-10 lg:px-20 relative h-full lg:h-[550px] object-cover'>
                    <img
                        className='w-full h-full rounded-md'
                        src="https://cdn.ledvietjsc.vn/media/slider/banner-den-trang-tri.jpg"
                        alt="" />
                    <div className='absolute top-3/4 left-4 lg:left-[15rem] transition-transform duration-900 hover:scale-95 
                    font-semibold lg:text-4xl space-y-3 
                    flex flex-col justify-center items-center rounded-md'>
                        <div className='pt-1 flex justify-center'>
                            <Button
                                startIcon={<Storefront />}
                                variant='contained'
                                className=' text-white hover:bg-gray-400'
                                size='large'>
                                Mua ngay
                            </Button>
                        </div>
                    </div>
                </section>

                <FanCategory />

                <CategoryGrid />
                <div className='pt-10'>
                    <h1 className=' text-lg lg:text-4xl font-bold text-primary-color text-center px-5 pb-10'>KHUYẾN MÃI HÔM NAY</h1>
                    <Deal />
                </div>

                <div className='pt-10'>
                    <h1 className=' text-lg lg:text-4xl font-bold text-primary-color text-center px-5 pb-10'>MUA THEO DANH MỤC</h1>
                    <ShopByCategory />
                </div>

            </div>

        </>
    );
}
export default Home;