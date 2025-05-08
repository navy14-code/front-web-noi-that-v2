import React, { useEffect, useState } from 'react';
import FilterSection from './FilterSection';
import ProductCard from './ProductCard';
import { Box, Divider, IconButton, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterSectionCheck from './FilterSectionCheck';
import store, { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchAllProducts } from '../../../State/customer/ProductSlice';
import { useParams, useSearchParams } from 'react-router-dom';

/* eslint-disable @typescript-eslint/no-explicit-any */

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector((store) => store);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get('price')?.split('-') || [];
    const brand = searchParams.get('brand');
    const minDiscount = searchParams.get('discount')
      ? Number(searchParams.get('discount'))
      : undefined;
    const pageNumber = page - 1;

    const newFilter = {
      brand: brand || '',
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      pageNumber,
    };

    dispatch(fetchAllProducts(newFilter));
  }, [category, searchParams]);

  return (
    <div>
      <div className="-z-10 mt-1">
        <section className="pt-1 lg:px-20 pb-5 relative h-full lg:h-[400px] object-cover">
          <img
            className="w-[12000px] h-full rounded-md transition-transform duration-300 ease-in-out hover:scale-95 cursor-pointer "
            src="https://file.hstatic.net/200000058312/collection/den_chum_f22da3b2e557455f9c3bfd53653f819a.png"
            alt=""
          />
        </section>
      </div>

      <div className="lg:flex lg:gap-5 px-5 lg:px-20">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
          {/* <FilterSectionCheck /> */}
        </section>

        <div className="w-full lg:w-[80%] space-y-5">
          <div className=" flex items-center justify-between px-9 h-[40px] ">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
            </div>
            {!isLarge && (
              <Box className="block md:hidden">
                <FilterSection />
                {/* <FilterSectionCheck /> */}
              </Box>
            )}

            <FormControl sx={{ width: '200px' }} size="small">
              <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sắp xếp "
                onChange={(e) => handleSortChange(e)}
              >
                <MenuItem value={'price_low'}>Giá: Thấp - Cao</MenuItem>
                <MenuItem value={'price_high'}>Giá: Cao - Thấp</MenuItem>
                <MenuItem value={30}>Mới nhất </MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider />
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {product.products.map((item) => (
              <ProductCard item={item} />
            ))}
          </section>
          <div className="flex justify-center py-12">
            <Pagination
              onChange={(e, value) => handlePageChange(value)}
              count={10}
              variant="outlined"
              shape="rounded"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#00927c',
                  borderColor: '#00927c',
                },
                '& .Mui-selected': {
                  backgroundColor: '#00927c',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#2e7d32',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
