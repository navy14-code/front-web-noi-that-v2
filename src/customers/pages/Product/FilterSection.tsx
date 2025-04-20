
// import { Button } from 'antd'
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ClearOutlined, FilterOutlined } from '@ant-design/icons';
import React from 'react'
import { Divider } from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FilterSection = () => {
    return (
        <div className='-z-50 space-y-5 bg-white'>
            <div className='flex items-center justify-between h-[40px]'>

                <p className='text-lg font-semibold text-primary-color '>
                    <FilterOutlined />
                    Bộ lọc sản phẩm
                </p>
                {/* <Button type='text' icon={<ClearOutlined />} className=' font-semibold text-primary-color'>
                    Clear
                </Button> */}
                <Button size='small' className='cursor-pointer font-semibold' sx={{ color: '#0D6EFD' }}>
                    <CloseIcon />
                    Clear
                </Button>
            </div>

            <Divider />
            <section>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Giá</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </section>

        </div>
    )
}

export default FilterSection