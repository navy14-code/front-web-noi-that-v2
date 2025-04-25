import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Thêm state này

  const handleShowPage = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
  };

  return (
    <div className="grid md:gap-2 grid-cols-3 min-h-screen">
      <section className=" lg:col-span-1 md:col-span-1 col-span-3 col-start-3 p-10 shadow-lg rounded-b-md">
        {!isLogin ? <RegisterForm /> : <LoginForm />}

        <div className="mt-12 space-y-2 text-center text-sm font-medium">
          {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
          <span onClick={handleShowPage} className="text-[#00927c] cursor-pointer hover:underline">
            {isLogin ? 'Đăng ký' : 'Đăng nhập'}
          </span>
        </div>
      </section>
      <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="space-y-3 font-bold text-center bg-primary-color">
            <img className=" w-full max-w-[500px] mx-auto lg:w-[400px]" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
