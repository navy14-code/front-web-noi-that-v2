import {
  AccountBalanceWallet,
  Add,
  Home,
  IntegrationInstructions,
  Inventory,
  Leaderboard,
  LocalOffer,
  Logout,
  Receipt,
  ShoppingBag,
} from '@mui/icons-material';
import React from 'react';
import DrawerList from '../../../components/DrawerList';

const menu = [
  {
    name: 'Thống kê',
    path: '/admin',
    icon: <Leaderboard className="text-primary-color" />,
    activeIcon: <Leaderboard className="text-white" />,
  },
  {
    name: 'Quản lý đơn hàng',
    path: '/admin/orders',
    icon: <ShoppingBag className="text-primary-color" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: 'Quản lý sản phẩm',
    path: '/admin/products',
    icon: <Inventory className="text-primary-color" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: 'Thêm sản phẩm',
    path: '/admin/add-products',
    icon: <Add className="text-primary-color" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: 'Thanh toán',
    path: '/admin/payment',
    icon: <AccountBalanceWallet className="text-primary-color" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: 'Quản lý giao dịch',
    path: '/admin/transaction',
    icon: <Receipt className="text-primary-color" />,
    activeIcon: <Receipt className="text-white" />,
  },
  {
    name: 'Quản lý mã giảm giá',
    path: '/admin/coupons',
    icon: <IntegrationInstructions className="text-primary-color" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: 'Thêm mã giảm giá',
    path: '/admin/add-coupons',
    icon: <Add className="text-primary-color" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: 'Quản lý trang chủ',
    path: '/admin/homePage',
    icon: <Home className="text-primary-color" />,
    activeIcon: <Home className="text-white" />,
  },
  {
    name: 'Deals',
    path: '/admin/deals',
    icon: <LocalOffer className="text-primary-color" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
  {
    name: 'Fan',
    path: '/admin/fan-category',
    icon: <LocalOffer className="text-primary-color" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
  {
    name: 'Shop by',
    path: '/admin/shop-by-category',
    icon: <LocalOffer className="text-primary-color" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
];
const menu2 = [
  {
    name: 'Đăng xuất',
    path: '/',
    icon: <Logout className="text-primary-color" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const AdminDrawerList = ({ toggleDrawer }: { toggleDrawer: any }) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default AdminDrawerList;
