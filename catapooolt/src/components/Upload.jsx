// import { useState } from "react";

export default function ImgUpload({
  wid,
  handleImageChange,
  handleUpload,
  url,
}) {
  //   const [file, setFile] = useState("");
  //   const [url, setUrl] = useState("");
  //   const handleChange = (e) => {
  //     setFile(e.target.files[0]);
  //   };
  //   const handleUpload = () => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setUrl(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //       console.log(url);
  //       setImag(url)
  //   };
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {url !== undefined ? <img src={url} alt="" style={{ width: wid }} /> : ""}
      <button onClick={handleUpload}>
        {url !== undefined ? "Upload" : "Load"}
      </button>
    </div>
  );
}
