import React from 'react';

const ForgotPasswordForm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Quên mật khẩu</h2>
      <p className="text-sm text-center mb-6">Nhập email để lấy lại mật khẩu của bạn</p>
      <form className="space-y-4">
        <input type="email" placeholder="Nhập email" className="w-full border px-4 py-2 rounded" />
        <button
          type="submit"
          className="w-full bg-[#00927c] text-white py-2 rounded hover:bg-[#007a66]"
        >
          Gửi email xác nhận
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
