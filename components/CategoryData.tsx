import React from 'react';
import {fetchCategories} from '../lib/page';
import { AxiosResponse } from 'axios';
import { ICategory, ICollectionResponse } from '../types/page';
import Image from 'next/image';

interface IPropType{
  categories:ICategory[];
}
const categoryData = async() => {
  const {data:categories}:AxiosResponse<ICollectionResponse<ICategory[]>> =await fetchCategories();
  const data=categories.data;

  console.log(categories.data);
  return (
    <div>
      {
        data.map((category:ICategory)=>(
          <div key={category.id} className='text-center'>
            <h1 className='text-2xl font bold'>{category.attributes.Title}</h1>
            <h2 className='text-normal'>{category.attributes.Slug}</h2>
            <Image src={category.attributes.Image.data.attributes.formats.thumbnail.url} width={200} height={200} alt=""/>

          </div>
        ))
      }
    </div>
  )
}

export default categoryData;