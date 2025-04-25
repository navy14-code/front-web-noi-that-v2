/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from '@mui/material';
import { ClearOutlined, FilterOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Divider } from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { brands } from '../../../data/filter/brand';
import { price } from '../../../data/filter/price';
import { useSearchParams } from 'react-router-dom';
import { discount } from '../../../data/filter/discount';

const FilterSection = () => {
  const [expandBrand, setExpandBrand] = useState(false);
  const [expandPrice, setExpandPrice] = useState(false);
  const [expandDiscount, setExpandDiscount] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || '');
  const [selectedPrice, setSelectedPrice] = useState(searchParams.get('price') || '');
  const [selectedDiscount, setSelectedDiscount] = useState(searchParams.get('discount') || '');

  const handleBrandChange = () => {
    setExpandBrand(!expandBrand);
  };
  const handlePriceChange = () => {
    setExpandPrice(!expandPrice);
  };
  const handleDiscountChange = () => {
    setExpandDiscount(!expandDiscount);
  };

  const updateFilterParams = (e: any) => {
    const { name, value } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log('clear all filters', searchParams);
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px]">
        <p className="text-lg font-semibold text-primary-color ">
          <FilterOutlined />
          Bộ lọc sản phẩm
        </p>
        {/* Nút xóa */}
        <Button
          onClick={() => clearAllFilters()}
          size="small"
          variant="text"
          startIcon={<ClearOutlined />}
          className="cursor-pointer font-semibold "
          sx={{
            color: '#0D6EFD',
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        >
          Clear
        </Button>
      </div>
      {/* Lọc sản phẩm */}
      <Divider />
      <div className="px-5 space-y-5">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#00927c !important',
                pb: '14px',
              }}
              className="text-2xl font-semibold "
              id="brand"
            >
              Thương hiệu
            </FormLabel>
            <RadioGroup
              value={selectedBrand}
              onChange={(e) => {
                updateFilterParams(e);
                setSelectedBrand(e.target.value);
              }}
              aria-labelledby="brand"
              name="brand"
            >
              {brands.slice(0, expandBrand ? brands.length : 3).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={
                    <Radio
                      sx={{
                        color: 'black',
                        '&.Mui-checked': {
                          color: '#00972c',
                        },
                      }}
                    />
                  }
                  label={
                    <div>
                      <p>{item.name}</p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={() => handleBrandChange()}
              type="button"
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center gap-2 font-semibold border-none shadow-none focus:outline-none focus:ring-0"
            >
              {expandBrand ? 'Ẩn bớt' : `+${brands.length - 3} Xem thêm`}
            </button>
          </div>
        </section>

        <Divider />

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#00927c!important',
                pb: '14px',
              }}
              className="text-2xl font-semibold "
              id="price"
            >
              Giá sản phẩm
            </FormLabel>
            <RadioGroup
              value={selectedPrice}
              onChange={(e) => {
                updateFilterParams(e);
                setSelectedPrice(e.target.value);
              }}
              aria-labelledby="price"
              name="price"
            >
              {price.slice(0, expandPrice ? price.length : 3).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={
                    <Radio
                      sx={{
                        color: 'black',
                        '&.Mui-checked': {
                          color: '#00972c',
                        },
                      }}
                    />
                  }
                  label={
                    <div>
                      <p>{item.name}</p>
                      <span
                        style={{
                          backgroundColor: item.name === 'Dưới 1 triệu' ? '#00927c' : '#fff',
                        }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === 'Dưới 1 triệu' ? 'bg-[#00927c]' : 'bg-white'
                        }`}
                      ></span>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={() => handlePriceChange()}
              type="button"
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center gap-2 font-semibold border-none shadow-none focus:outline-none focus:ring-0"
            >
              {expandPrice ? 'Ẩn bớt' : `+${price.length - 3} Xem thêm`}
            </button>
          </div>
        </section>

        <Divider />

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#00927c!important',
                pb: '14px',
              }}
              className="text-2xl font-semibold "
              id="discount"
            >
              Giảm giá
            </FormLabel>
            <RadioGroup
              value={selectedDiscount}
              onChange={(e) => {
                updateFilterParams(e);
                setSelectedDiscount(e.target.value);
              }}
              aria-labelledby="discount"
              name="discount"
            >
              {discount.slice(0, expandDiscount ? discount.length : 3).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={
                    <Radio
                      sx={{
                        color: 'black',
                        '&.Mui-checked': {
                          color: '#00972c',
                        },
                      }}
                    />
                  }
                  label={
                    <div>
                      <p>{item.name}</p>
                      <span
                        style={{
                          backgroundColor: item.name === '10% trở lên' ? '#00927c' : '#fff',
                        }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === '10% trở lên' ? 'bg-[#00927c]' : 'bg-white'
                        }`}
                      ></span>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={() => handleDiscountChange()}
              type="button"
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center gap-2 font-semibold border-none shadow-none focus:outline-none focus:ring-0"
            >
              {expandDiscount ? 'Ẩn bớt' : `+${discount.length - 3} Xem thêm`}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
