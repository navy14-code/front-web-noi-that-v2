import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
    return (
        <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20 mt-5'>
            <section className='w-full md:w-1/2 lg:w-[30%] space-y-5'>
                <img src="https://down-vn.img.susercontent.com/file/75eae99fe836cf4ce0a0b3ef4b0fc425.webp" alt="" />

                <div>
                    <div>
                        <p className='font-bold text-xl'>Đèn chùm LED hiện đại</p>
                        <p className='text-lg to-gray-600'>Đèn chùm LED </p>
                    </div>
                    <div>
                        <div className='price flex items-center gap-3 mt-2 text-lg'>

                            <span className='font-sans text-gray-800'>
                                40,000,000 vnđ
                            </span>

                            <span className='line-through text-gray-500'>
                                100,000,000 vnđ
                            </span>

                            <span className='text-primary-color font-semibold'>
                                60%
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            <section className='space-y-5 w-full'>
                {[1, 1, 1, 1].map((item) =>
                    <div className='space-y-3'>
                        <ReviewCard />
                        <Divider />
                    </div>
                )}
            </section>

        </div>
    )
}

export default Review
