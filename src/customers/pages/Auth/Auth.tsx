import React, { useState } from 'react';
import LoginOtp from './LoginOtp';
import RegisterOtp from './RegisterOtp';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[80vh] rounded-md shadow-lg">
        <div className="bg-primary-color  flex justify-center">
          <img className="rounded-md w-[320px]  " src="/images/logo.webp" alt="" />
        </div>

        <div className="mt-8 px-10">
          {isLogin ? <LoginOtp /> : <RegisterOtp />}
          <div className="flex items-center gap-1 justify-center mt-5">
            {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#00927c] cursor-pointer hover:underline ml-1"
            >
              {isLogin ? 'Đăng ký' : 'Đăng nhập'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
