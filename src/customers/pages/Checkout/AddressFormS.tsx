import React, { useState } from 'react';
import { TextField, MenuItem, Grid, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as vietnam from 'vietnam-provinces';

const AddressFormS = () => {
    const [districts, setDistricts] = useState<{ name: string; code: string; wards: { name: string; code: string }[] }[]>([]);
    const [wards, setWards] = useState<{ name: string; code: string }[]>([]);

    const formik = useFormik({
        initialValues: {
            state: '',
            city: '',
            localCity: '',
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const provinces = Object.values(vietnam);

    const handleProvinceChange = (e: any) => {
        const selectedProvince = provinces.find((p: any) => p.name === e.target.value);
        setDistricts(selectedProvince?.districts || []);
        setWards([]);
        formik.setFieldValue('state', e.target.value);
        formik.setFieldValue('city', '');
        formik.setFieldValue('localCity', '');
    };

    const handleDistrictChange = (e: any) => {
        const selectedDistrict = districts.find(d => d.name === e.target.value);
        setWards(selectedDistrict?.wards || []);
        formik.setFieldValue('city', e.target.value);
        formik.setFieldValue('localCity', '');
    };

    const handleWardChange = (e: any) => {
        formik.setFieldValue('localCity', e.target.value);
    };

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    {/* Tỉnh / Thành phố */} // Ignore spelling errors
                    <Grid size={{ xs: 4 }}>
                        <TextField
                            select
                            fullWidth
                            label="Tỉnh / Thành phố"
                            name="state"
                            value={formik.values.state}
                            onChange={handleProvinceChange}
                        >
                            {provinces.map((province: any) => (
                                <MenuItem key={province.code} value={province.name}>
                                    {province.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Quận / Huyện */} // Ignore spelling errors
                    <Grid size={{ xs: 4 }}>
                        <TextField
                            select
                            fullWidth
                            label="Quận / Huyện"
                            name="city"
                            value={formik.values.city}
                            onChange={handleDistrictChange}
                            disabled={!districts.length}
                        >
                            {districts.map((district) => (
                                <MenuItem key={district.code} value={district.name}>
                                    {district.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Phường / Xã */} // Ignore spelling errors
                    <Grid size={{ xs: 4 }}>
                        <TextField
                            select
                            fullWidth
                            label="Phường / Xã"
                            name="localCity"
                            value={formik.values.localCity}
                            onChange={handleWardChange}
                            disabled={!wards.length}
                        >
                            {wards.map((ward) => (
                                <MenuItem key={ward.code} value={ward.name}>
                                    {ward.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default AddressFormS;
