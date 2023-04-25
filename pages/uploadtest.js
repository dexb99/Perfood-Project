import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
export default function uploadtest() {
    const [file, setFile] = useState([]);
    const [filePreview, setFilePreview] = useState([]);


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFilePreview(URL.createObjectURL(selectedFile));
        }
        else{
            console.log('pls upload image');
        }
    }
    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', file);
        axios.post('http://localhost:3001/upload', formData)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <input type='file' accept='.jpg,.jpeg,.png' onChange={handleFileChange} />
            {filePreview && <img src={filePreview} />}
            <button onClick={handleUpload}>upload</button>
        </div>
    )
}
