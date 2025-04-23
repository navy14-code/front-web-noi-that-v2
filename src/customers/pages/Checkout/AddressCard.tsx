import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange = (event: any) => {
        console.log(event.target.value)
    }
    return (

        <div className='p-5 border rounded-md flex'>
            <div className=''>
                <Radio
                    checked={true}
                    onChange={(event) => { handleChange(event) }}
                    value=""
                    name='radio-button'
                    sx={{
                        color: 'black',
                        '&.Mui-checked': {
                            color: '#00927c',
                        },
                    }}
                />
            </div>
            <div className='space-y-3 pt-3'>
                <p>Như Quỳnh</p>
                <p className='w-[320px]'>55/64 Kim Giang, Phường Kim Giang, Quận Thanh Xuân, Hà Nội</p>
                <p><strong>SĐT:</strong> 0888291733</p>
            </div>
        </div>
    )
}

export default AddressCard
