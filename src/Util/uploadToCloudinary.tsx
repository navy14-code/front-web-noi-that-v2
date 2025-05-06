export const uploadToCloudinary = async (pics: any) => {
  const cloud_name = 'dqevdkdio';
  const upload_preset = 'upload-gdsjo6n0';
  if (pics) {
    const data = new FormData();
    data.append('file', pics);
    data.append('upload_preset', upload_preset);
    data.append('cloud_name', cloud_name);
    const res = await fetch('https://api.cloudinary.com/v1_1/dqevdkdio/image/upload', {
      method: 'POST',
      body: data,
    });

    const fileData = await res.json();
    return fileData.url;
  } else {
    console.log('Lỗi: Không tìm thấy ảnh');
  }
};
