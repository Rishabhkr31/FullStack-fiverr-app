import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post("cloudinary://779467253223976:iR9UWoGzB1s2aVqt_vkyNPRqLCI@dzftcbduv", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;