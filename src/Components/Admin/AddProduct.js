import React, { useState } from 'react'
import './AddProduct.css'
import axios from '../../axios'
import { useForm } from 'react-hook-form'
// import { Image } from 'cloudinary-react'
import Axios from 'axios'
import { Line } from 'rc-progress'
import ReactLoading from 'react-loading'


function AddProduct() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState()
    const [imageDetails, setImageDetails] = useState([])
    const [change, setChange] = useState(true)
    const [progress, setProgress] = useState(0)
    const [uploading, setUploading] = useState(false)
    const [loading, setLoading] = useState(false)



    const config = {
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setProgress(percentCompleted)
        }
    }


    const uploadImage = () => {
        setUploading(true)
        console.log(image)
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "l68cm4ir");

        Axios.put("https://api.cloudinary.com/v1_1/makemycake/image/upload", formData, config).then((res) => {
            setImageDetails(res.data)
            setChange(false)

        }).catch((err) => {
            alert("Error uploading")
            console.log(err)
            setProgress(0)
            setUploading(false)
        })

    }

    const submitForm = (data) => {
        setLoading(true)
        data.image = imageDetails.url
        axios({
            method: 'post',
            url: '/admin/addproduct',
            data: data
        })
            .then((response) => {
                console.log(response);
                alert(data.pname + " - Added")
                window.location.reload()
            })
            .catch((error) => {
                setLoading(false)
                console.log(error);
                alert(error)
            });
    }

    return (
        <div className='admin-add-product-section'>
            <div className="admin-add-product-container">
                <div className="admin-add-product-main">
                    <h2>Add Product</h2>
                    <form id="add-product" encType="multipart/form-data" onSubmit={handleSubmit(submitForm)} >
                        <div className="form-group">
                            <label className='form-control-label' htmlFor="pname">Product name<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" {...register("pname", { required: true })} placeholder="Enter Product Name" />
                            {errors.pname && <p>First name is required</p>}
                        </div>
                        <div className="form-group">
                            <label className='form-control-label' htmlFor="weight">Weight<span className="text-danger">*</span></label>
                            <select type="select" className="form-control select-checkbox" {...register("weight", { required: true })}  >
                                <option value="500 G">500 G</option>
                                <option value="1 KG" >1 KG</option>
                                <option value="2 KG">2 KG</option>
                            </select>
                            {errors.weight && <p>Weight is required</p>}
                        </div>
                        <div className="form-group">
                            <label className='form-control-label' htmlFor="proId">Product-code<span className="text-danger">*</span></label>
                            <input type="number" className="form-control" {...register("proId", { required: true })} placeholder="Product-code" />
                            {errors.proId && <p>Product code is required</p>}
                        </div>
                        <div className="form-group">
                            <label className='form-control-label' htmlFor="price">Price<span className="text-danger">*</span></label>
                            <input type="number" className="form-control" {...register("price", { required: true })} placeholder="Price" />
                            {errors.price && <p>Price is required</p>}
                        </div>
                        <div className="form-group">
                            <label className='form-control-label' htmlFor="image">Image<span className="text-danger">*</span></label>
                            <input type="file" name='image' className="form-control" onChange={(event) => {
                                setImage(event.target.files[0])
                                setChange(true)
                                setProgress(0)
                                setUploading(false)
                            }} />
                            <div className='btn product-upload-button'
                                style={{ backgroundColor: `${change ? 'blue' : '#00a623'}` }}
                                onClick={progress === 0 ? uploadImage : undefined} >
                                {change ? `${uploading ? 'Uploading' : 'Upload'}` : "Done"}
                            </div>
                            <div className="upload-progress">
                                <Line percent={progress}
                                    trailColor={`rgba(188, 188, 188, ${progress / 100})`}
                                    trailWidth='8'
                                    strokeWidth="8"
                                    strokeColor={progress === 100 ? '#37cc4e' : `rgba(62, 152, 199, ${progress / 100})`} />
                                <h4 style={{ color: `${progress === 100 ? '#37cc4e' : `rgba(62, 152, 199, ${progress / 100})`}` }} >{progress}%</h4>
                            </div>
                        </div>
                        <div className="form-group submit-button-container">
                            <button type="submit" className="btn product-submit-button"
                                disabled={change && !loading} >
                                {loading ? <ReactLoading type={'bars'} color={'#fff'} /> : 'SUBMIT'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
