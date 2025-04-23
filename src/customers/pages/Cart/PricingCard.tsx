import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
    return (
        <>
            <div className='space-y-3 p-5'>
                <div className='flex justify-between items-center'>
                    <span>Tổng tiền hàng</span>
                    <span>3,000,000 vnđ</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Giảm giá</span>
                    <span>- 500,000 vnđ</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Phí vận chuyển</span>
                    <span className='text-primary-color'>Free</span>
                </div>




            </div>
            <Divider />
            <div className='flex justify-between items-center p-5 text-primary-color'>
                <span >Tổng số tiền</span>
                <span >2,500,000 vnđ</span>
            </div>
        </>
    )
}

export default PricingCard
