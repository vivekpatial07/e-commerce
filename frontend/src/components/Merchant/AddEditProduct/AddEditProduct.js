import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactCrop from 'react-image-crop'
import { useDispatch } from 'react-redux'
import { createProdInit } from '../../../redux/actionCreators/merchantCreator'
import './AddEditProduct.css'
const initialState = {
  title: '',
  price: '',
  description: '',
  category: '',
  stockCount: 0,
}

const AddEditProduct = () => {
  
  const [formData, setFormData] = useState(initialState)
  const [upImg, setUpImg] = useState()
  const [crop, setCrop] = useState({ unit: '%', width: 40, aspect: 9 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [showCrop, setShowCrop] = useState(false)
  const [blob, setBlob] = useState(null)
  
  const imgRef = useRef(null)
  const previewCanvasRef = useRef(null)

  const dispatch = useDispatch()

  const onSelectFile = (e) => {
    if(e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setUpImg(reader.result))
      reader.readAsDataURL(e.target.files[0])
      setShowCrop(true)
    }
  }

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [])

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height

    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop])

  const changeHandler = (e) => {
    const obj = {...formData}
    if(e.target.name !== 'image'){
      obj[e.target.name] = e.target.value
      setFormData(obj)
    }
  }

  const finalizeCrop = (canvas, crop) => {
    canvas.toBlob((blob) => {
      const previewUrl = window.URL.createObjectURL(blob)
      setBlob(previewUrl)
      setShowCrop(false)   
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProdInit(formData, blob))

  }

  return (
    <div>
      <form onSubmit={submitHandler} style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
        <input name='title' value={formData.title} onChange={changeHandler} placeholder='title'/>
        <input name='price' value={formData.price} onChange={changeHandler} placeholder='price'/>
        <input name='description' value={formData.description} onChange={changeHandler} placeholder='description'/>
        <input name='category' value={formData.category} onChange={changeHandler} placeholder='category'/>
        <input name='image' onChange={onSelectFile} type='file'/>
        <input name='stockCount' value={formData.stockCount} onChange={changeHandler} placeholder='stockCount'/>
        <button>yo man</button>
      </form>
      {
        showCrop &&
        (
          <div className='modal'>
            <ReactCrop
              src={upImg}
              onImageLoaded={onLoad}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              locked
            />
            <div>
              <canvas
                ref={previewCanvasRef}
                style={{
                  width: Math.round(completedCrop?.width ?? 0),
                  height: Math.round(completedCrop?.height ?? 0)
                }}
              />
              <button onClick={() => finalizeCrop(previewCanvasRef.current, completedCrop)}>Perfect</button>
            </div>
          </div>
        )
      }
        
      </div>
  )
}

export default AddEditProduct
