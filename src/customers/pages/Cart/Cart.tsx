import React, { useState } from 'react'
import CartItem from './CartItem'
import { Close, LocalOffer } from '@mui/icons-material'
import { Button, IconButton, TextField } from '@mui/material'

const Cart = () => {

    const [couponCode, setCouponCode] = useState("");

    const handleChange = (e: any) => {
        setCouponCode(e.target.value);
    }
    return (
        <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='cartItemSection lg:col-span-2 space-y-3'>

                    {[1, 1, 1, 1, 1].map((item) => <CartItem />)}

                </div>

                <div className='col-span-1 text-sm space-y-3 '>

                    <div className='border rounded-md px-5 py-3 space-y-5'>
                        <div className='flex gap-3 text-sm items-center'>
                            <div className='flex gap-3 text-sm items-center'>
                                <LocalOffer sx={{ color: '#00927c', fontSize: "20px" }} />
                            </div>
                            <span>Apply Voucher</span>
                        </div>
                        {false ? <div className='flex gap-2 items-center '>
                            <TextField
                                onChange={(e) => handleChange(e)}
                                id='outlined-basic'
                                placeholder='Coupon code'
                                size='small'
                                variant='outlined' />
                            <Button

                                sx={{
                                    color: 'white',
                                    border: 'none',
                                    boxShadow: 'none',
                                    background: '#00927c',
                                    '&:focus': {
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }
                                }}>
                                Apply
                            </Button>
                        </div>
                            : <div className='flex'>
                                <div className='p-1 pl-5 border rounded-md flex gap-2 items-center'>
                                    <span className=''>Applied</span>
                                    <IconButton size='small'>
                                        <Close className='text-red-600' />
                                    </IconButton>
                                </div>
                            </div>}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart
