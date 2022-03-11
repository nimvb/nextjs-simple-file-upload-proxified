import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);


  const update = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
    }
  };

  const upload = async (event) => {
    const body = new FormData();
    body.append("file", file);
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };

  return (
    <div>
      <div>
        <h4>Select file</h4>
        <input type="file" name="userFile" onChange={update}/>
        <button
          type="submit"
          onClick={upload}
        >
          Send
        </button>
      </div>
    </div>
  )
}
