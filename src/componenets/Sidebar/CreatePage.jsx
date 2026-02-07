import { useRef, useState } from "react";
import "./CreatePage.scss";

function CreatePage() {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [type, setType] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setType(file.type.startsWith("video") ? "video" : "image");
  };

  return (
    <div className="CreatePage">
      <h2>Create new post</h2>

      {/* Upload box */}
      <div className="UploadBox" onClick={() => fileRef.current.click()}>
        {!preview && (
          <>
            <i className="bi bi-images"></i>
            <p>Click to upload photo or video</p>
            <span>From gallery / file manager</span>
          </>
        )}

        {preview && type === "image" && (
          <img src={preview} alt="preview" />
        )}

        {preview && type === "video" && (
          <video src={preview} controls />
        )}
      </div>

      {/* hidden input */}
      <input
        type="file"
        ref={fileRef}
        hidden
        accept="image/*,video/*"
        onChange={handleFileChange}
      />

      {/* caption */}
      <textarea placeholder="Write a caption..." />

      {/* actions */}
      <div className="CreateActions">
        <button className="CancelBtn" onClick={() => setPreview(null)}>
          Cancel
        </button>
        <button className="ShareBtn">Share</button>
      </div>
    </div>
  );
}

export default CreatePage;
