import React from 'react';
import { useState, useEffect } from 'react';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 S3에 업로드하고 URL을 획득
    // DB에 새로운 제품을 추가함

  }

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if(name === 'file'){
      setFile(files && files[0]);
      console.log(files[0])
      return;
    }
    setProduct(product => ({...product, [name]: value}))
  }

  return <section className='w-full text-center'>
    <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
    {file && <img src = {URL.createObjectURL(file)} alt = 'local file'></img> }
    <form onSubmit={handleSubmit}>
      <input 
      type='file' 
      accept='image/*' 
      name='file' 
      required
      onChange={handleChange}
      ></input>
      <input 
      type='text' 
      name='title'
      value = {product.title ?? ''}
      placeholder='제품명'
      required
      onChange={handleChange}
      ></input>
      <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='옵션들(콤마(,)로 구분)'
          required
          onChange={handleChange}
        />
    </form>
  </section>;
}
