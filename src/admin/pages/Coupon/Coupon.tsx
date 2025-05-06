import { Delete } from '@mui/icons-material';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';

const couponStatues = [
  { status: 'ACTIVE', title: 'Hoat dong', description: 'blabla' },
  { status: 'BACTIVE', title: 'Hoat dong', description: 'blabla' },
  { status: 'aACTIVE', title: 'Hoat dong', description: 'blabla' },
  { status: 'dACTIVE', title: 'Hoat dong', description: 'blabla' },
  { status: 'eACTIVE', title: 'Hoat dong', description: 'blabla' },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00927c',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('hihi', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Coupon = () => {
  const [couponStatus, setCouponStatus] = useState('ACTIVE');
  const handleChange = (event: any) => {
    setCouponStatus(event.target.value);
  };
  return (
    <>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel>Trạng thái</InputLabel>
          <Select labelId="" id="" value={couponStatus} label="Trạng thái" onChange={handleChange}>
            {couponStatues.map((item) => (
              <MenuItem value={item.status}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Code</StyledTableCell>
              <StyledTableCell>Ngày bắt đầu</StyledTableCell>
              <StyledTableCell>Ngày kết thúc</StyledTableCell>
              <StyledTableCell>Giá trị tối thiểu</StyledTableCell>
              <StyledTableCell>% chiết khấu</StyledTableCell>
              <StyledTableCell>Trạng thái</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
                <StyledTableCell>
                  <Button color="error">
                    {' '}
                    <Delete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coupon;
