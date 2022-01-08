import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
// import { useForm } from 'react-hook-form';
import './AddWatch.css';
import { FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
const AddWatch = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const { register, handleSubmit, reset , errors } = useForm();
    const [user, setUser] = useState(null);
    useEffect(() => {
        // reset form with user data
        reset(user);
    }, [user]);
    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
        document.getElementById('file-label').innerHTML = event.target.files[0].name;
    }
    const onSubmit = () => {
        const formData = new FormData();
        console.log(info);
        console.log(file);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);

        fetch('http://localhost:4000/addWatch', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(error => {
            console.error(error)
        })
        document.getElementsByClassName('form-control')[0].value='';
        document.getElementsByClassName('form-control')[1].value='';
        document.getElementById('file-label').innerHTML = `Upload a image`
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="addWatchPage">
                <form className="watch-form"style={{ width: '50%' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Watch Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Watch Price</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file" id='file-label' class="custom-file-upload">
                            <FaUpload style={{ marginRight: '5px' }} />Upload a image</label>
                        <input onChange={handleFileChange} type="file" id="file" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn-style">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddWatch;