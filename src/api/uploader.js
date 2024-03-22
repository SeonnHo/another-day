import axios from 'axios';

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append(
    'upload_preset',
    process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  );

  const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // console.log(res);
  return res.data.url;
}
