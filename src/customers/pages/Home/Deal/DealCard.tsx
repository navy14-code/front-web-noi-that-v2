import React from 'react'

const DealCard = () => {
    return (
        <div className='transition-transform duration-900 hover:scale-95 w-[10rem] cursor-pointer '>
            <img
                className="border-x-[7px] border-t-[7px] border-b-[5px] border-primary-color w-full h-[12rem] object-cover object-top"
                src="https://product.hstatic.net/200000058312/product/vlthpl-742-aa__2__e9e3425cef6c4e78a8af46e7c3ef9acf_medium.jpg"
                alt=""
            />
            <div className="border-4 border-primary-color bg-gray-300 text-primary-color p-2 text-center">
                <p className='text-lg font-semibold '>Đèn thả</p>
                <p className='text-2xl font-bold'>20% OFF</p>
                <p className='text-balance text-lg'>Mua ngay</p>
            </div>
        </div>
    )
}

export default DealCard