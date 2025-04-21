import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React, { useState } from 'react'

const CartItem = () => {
    const handleUpdateQuantity = () => {

    }
    return (
        <div className='border rounded-md relative'>

            <div className='p-5 flex gap-3'>

                <div>
                    <img
                        className='w-[90px] rounded-md'
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8sn8x1afhbic1@resize_w80_nl.webp" alt="" />
                </div>
                <div className='space-y-2'>
                    <h1 className='font-semibold text-lg'>Đèn chùm LED hiện đại</h1>
                    <p className='text-gray-600 font-medium text-sm'>Đèn thả thông tầng khung Inox mạ đồng, ống thủy tinh 25cm (trong hoặc đục) </p>
                    <p className='text-gray-400 text-xs'><strong>Phân loại</strong> Đèn chùm LED hiện đại</p>
                    <p className='text-sm'> Đổi/Trả hàng trong vòng 7 ngày lỗi do nhà sản xuất</p>
                    <p className='text-sm text-gray-500'><strong>Số lượng : </strong>5</p>

                </div>

            </div>
            <Divider />
            <div className='flex items-center justify-between'>
                <div className='px-5 py-2 items-center justify-between'>

                    <div className='flex items-center gap-2 w-[140px] justify-between'>
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
                                }
                            }}
                            disabled={true}
                            onClick={() => handleUpdateQuantity()}>
                            <Remove />
                        </Button>
                        <span>
                            {5}
                        </span>
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
                                }
                            }}
                            onClick={() => handleUpdateQuantity()}>
                            <Add />
                        </Button>
                    </div>
                </div>
                <div className='pr-5'>
                    <p className='text-gray-700 font-medium'>3,000,000 vnđ</p>
                </div>
            </div>
            <div className='absolute top-1 right-1'>
                <IconButton
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
                        }
                    }}>
                    <Close />
                </IconButton>
            </div>

        </div>
    )
}

export default CartItem
