/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
    Button, Divider, Chip, Stack,
    Checkbox, FormGroup, FormControlLabel,
    FormLabel, FormControl,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { ClearOutlined, FilterOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';

import { brands } from '../../../data/filter/brand';
import { price } from '../../../data/filter/price';
import { discount } from '../../../data/filter/discount';

const FilterSectionCheck = () => {
    const [expandBrand, setExpandBrand] = useState(false);
    const [expandPrice, setExpandPrice] = useState(false);
    const [expandDiscount, setExpandDiscount] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const getParamArray = (name: string) => searchParams.getAll(name);

    const [selectedBrands, setSelectedBrands] = useState<string[]>(getParamArray("brand"));
    const [selectedPrices, setSelectedPrices] = useState<string[]>(getParamArray("price"));
    const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>(getParamArray("discount"));

    const toggleFilterValue = (
        key: string,
        value: string,
        selected: string[],
        setSelected: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        let updated: string[];
        if (selected.includes(value)) {
            updated = selected.filter(item => item !== value);
        } else {
            updated = [...selected, value];
        }

        setSelected(updated);

        searchParams.delete(key);
        updated.forEach(val => searchParams.append(key, val));
        setSearchParams(searchParams);
    };

    const clearAllFilters = () => {
        searchParams.delete("brand");
        searchParams.delete("price");
        searchParams.delete("discount");
        setSearchParams(searchParams);
        setSelectedBrands([]);
        setSelectedPrices([]);
        setSelectedDiscounts([]);
    };

    // map value => label
    const getLabel = (key: string, value: string) => {
        if (key === 'brand') return brands.find(b => b.value.toString() === value)?.name || value;
        if (key === 'price') return price.find(p => p.value.toString() === value)?.name || value;
        if (key === 'discount') return discount.find(d => d.value.toString() === value)?.name || value;
        return value;
    };

    const handleRemoveFilter = (key: string, value: string) => {
        if (key === 'brand') toggleFilterValue(key, value, selectedBrands, setSelectedBrands);
        if (key === 'price') toggleFilterValue(key, value, selectedPrices, setSelectedPrices);
        if (key === 'discount') toggleFilterValue(key, value, selectedDiscounts, setSelectedDiscounts);
    };

    return (
        <div className='-z-50 space-y-5 bg-white'>
            <div className='flex items-center justify-between h-[40px]'>
                <p className='text-lg font-semibold text-primary-color '>
                    <FilterOutlined /> Bộ lọc sản phẩm
                </p>
            </div>

            <Divider />

            {/* HIỂN THỊ FILTER ĐÃ CHỌN */}
            <div className="px-5">
                {(selectedBrands.length > 0 || selectedPrices.length > 0 || selectedDiscounts.length > 0) && (
                    <>
                        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1} mb={2} alignItems="flex-start">
                            {selectedBrands.map(value => (
                                <Chip
                                    key={`brand-${value}`}
                                    label={getLabel('brand', value)}
                                    onDelete={() => handleRemoveFilter('brand', value)}
                                    deleteIcon={<CancelIcon sx={{ color: 'red' }} />}
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'green',
                                        color: 'red',
                                        borderRadius: '20px',
                                        fontWeight: 500,
                                        height: 25, // Chiều cao đồng nhất
                                        paddingY: 0, // Đảm bảo không bị lệch do padding
                                    }}
                                />
                            ))}
                            {selectedPrices.map(value => (
                                <Chip
                                    key={`price-${value}`}
                                    label={getLabel('price', value)}
                                    onDelete={() => handleRemoveFilter('price', value)}
                                    deleteIcon={<CancelIcon sx={{ color: 'red' }} />}
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'green',
                                        color: 'red',
                                        borderRadius: '20px',
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                            {selectedDiscounts.map(value => (
                                <Chip
                                    key={`discount-${value}`}
                                    label={getLabel('discount', value)}
                                    onDelete={() => handleRemoveFilter('discount', value)}
                                    deleteIcon={<CancelIcon sx={{ color: 'red' }} />}
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'green',
                                        color: 'red',
                                        borderRadius: '20px',
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Stack>
                        <Button
                            onClick={clearAllFilters}
                            startIcon={<ClearOutlined />}
                            size='small'
                            variant='text'
                            className='cursor-pointer font-semibold'
                            sx={{
                                color: '#0D6EFD',
                                border: 'none',
                                boxShadow: 'none',
                                '&:hover': { backgroundColor: 'transparent' },
                                '&:focus': { outline: 'none', boxShadow: 'none' }
                            }}
                        >
                            Xoá tất cả
                        </Button>
                    </>
                )}
            </div>

            <Divider />
            <div className='px-5 space-y-5'>
                {/* BRAND FILTER */}
                <section>
                    <FormControl>
                        <FormLabel sx={{ fontSize: '16px', fontWeight: 600, color: '#00927c !important', pb: '14px' }}>
                            Thương hiệu
                        </FormLabel>
                        <FormGroup>
                            {brands.slice(0, expandBrand ? brands.length : 3).map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    control={
                                        <Checkbox
                                            checked={selectedBrands.includes(item.value.toString())}
                                            onChange={() => toggleFilterValue("brand", item.value.toString(), selectedBrands, setSelectedBrands)}
                                            sx={{
                                                color: 'black',
                                                '&.Mui-checked': { color: '#00972c' }
                                            }}
                                        />
                                    }
                                    label={item.name}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <button
                        onClick={() => setExpandBrand(!expandBrand)}
                        type='button'
                        className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center gap-2 font-semibold border-none shadow-none focus:outline-none focus:ring-0'
                    >
                        {expandBrand ? "Ẩn bớt" : `+${brands.length - 3} Xem thêm`}
                    </button>
                </section>

                <Divider />

                {/* PRICE FILTER */}
                <section>
                    <FormControl>
                        <FormLabel sx={{ fontSize: '16px', fontWeight: 600, color: '#00927c !important', pb: '14px' }}>
                            Giá sản phẩm
                        </FormLabel>
                        <FormGroup>
                            {price.slice(0, expandPrice ? price.length : 3).map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    control={
                                        <Checkbox
                                            checked={selectedPrices.includes(item.value.toString())}
                                            onChange={() => toggleFilterValue("price", item.value.toString(), selectedPrices, setSelectedPrices)}
                                            sx={{
                                                color: 'black',
                                                '&.Mui-checked': { color: '#00972c' }
                                            }}
                                        />
                                    }
                                    label={item.name}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <button
                        onClick={() => setExpandPrice(!expandPrice)}
                        type='button'
                        className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center gap-2 font-semibold border-none shadow-none focus:outline-none focus:ring-0'
                    >
                        {expandPrice ? "Ẩn bớt" : `+${price.length - 3} Xem thêm`}
                    </button>
                </section>

                <Divider />

                {/* DISCOUNT FILTER */}
                <section>
                    <FormControl>
                        <FormLabel sx={{ fontSize: '16px', fontWeight: 600, color: '#00927c !important', pb: '14px' }}>
                            Giảm giá
                        </FormLabel>
                        <FormGroup>
                            {discount.slice(0, expandDiscount ? discount.length : 3).map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    control={
                                        <Checkbox
                                            checked={selectedDiscounts.includes(item.value.toString())}
                                            onChange={() => toggleFilterValue("discount", item.value.toString(), selectedDiscounts, setSelectedDiscounts)}
                                            sx={{
                                                color: 'black',
                                                '&.Mui-checked': { color: '#00972c' }
                                            }}
                                        />
                                    }
                                    label={item.name}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <button
                        onClick={() => setExpandDiscount(!expandDiscount)}
                        type='button'
                        className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center gap-2 font-semibold border-none shadow-none focus:outline-none focus:ring-0'
                    >
                        {expandDiscount ? "Ẩn bớt" : `+${discount.length - 3} Xem thêm`}
                    </button>
                </section>
            </div>
        </div>
    );
};

export default FilterSectionCheck;
