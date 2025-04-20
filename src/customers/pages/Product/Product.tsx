import React, { useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { Box, Divider, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/* eslint-disable @typescript-eslint/no-explicit-any */


const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [sort, setSort] = useState();
  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  }
  return (
    <div>
      <div className='-z-10 mt-10'>
        <h1 className='text-3xl text-primary-color font-bold text-center pb-5 px-9 uppercase space-x-2'>Đèn chùm LED hiện đại</h1>
      </div>

      <div className='lg:flex lg:gap-5 px-5 lg:px-20'>
        <section className='filter_section hidden lg:block w-[20%]'>
          <FilterSection />
        </section>

        <div className='w-full lg:w-[80%] space-y-5'>
          <div className=' flex items-center justify-between px-9 h-[40px] '>
            <div className='relative w-[50%]'>
              {
                !isLarge && (<IconButton>
                  <FilterAlt />
                </IconButton>)
              }
            </div>
            {
              !isLarge && (<Box>
                <FilterSection />
              </Box>)
            }


            <FormControl sx={{ width: "200px" }} size='small'>
              <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sắp xếp "
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Giá: Thấp - Cao</MenuItem>
                <MenuItem value={"price_high"}>Giá: Cao - Thấp</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider />
          <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <ProductCard />)}
          </section>

        </div>
      </div>

    </div>
  )
}

export default Product
