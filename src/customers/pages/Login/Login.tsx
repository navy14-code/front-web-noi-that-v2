import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Thêm state này

  const handleShowPage = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
  };
  const handleForgotPassword = () => {
    setIsForgotPassword(true); // bật form quên mật khẩu
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#00927c]">
      <section className="hidden md:flex justify-center items-center">
        <img
          className="w-full max-w-[300px] mx-auto lg:w-[400px]"
          src="https://theme.hstatic.net/200000058312/1001080561/14/logo.png?v=472"
          alt="logo"
        />
      </section>

      <section className="flex justify-center items-center">
        <div className="p-10 shadow-lg rounded-md bg-white w-full max-w-[400px]">
          {isForgotPassword ? <ForgotPasswordForm /> : isLogin ? <LoginForm /> : <RegisterForm />}

          {!isForgotPassword && (
            <div className="mt-12 space-y-2 text-center text-sm font-medium">
              {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
              <span
                onClick={handleShowPage}
                className="text-[#00927c] cursor-pointer hover:underline ml-1"
              >
                {isLogin ? 'Đăng ký' : 'Đăng nhập'}
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Login;
