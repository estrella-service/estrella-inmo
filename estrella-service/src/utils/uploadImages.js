import axios from 'axios';

export const uploadImage = async (file) => {
  console.log(file[0], 'file de services');
  console.log(file[1], 'file de services');
  console.log(file[2], 'file de services');
  const imageURLArray = [];

  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    formData.append('file', file[i]);
    formData.append('upload_preset', 'estrella');
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/ddfqhahm4/auto/upload',
        formData
      );
      const uploadedData = response.data.secure_url;
      console.log(uploadedData, 'data de services');
      imageURLArray.push(uploadedData);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(imageURLArray, 'array de services');
  return imageURLArray;
};
