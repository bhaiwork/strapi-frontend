import { ICategory } from '@/types/page';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

interface IPropType{
  categories:ICategory[];
  handleOnSearch:(query:string)=>void;
}

const Tabs = ({categories,handleOnSearch}:IPropType) => {
  const router=useRouter();
  const isActiveLink=(category:ICategory)=>{
    return category.attributes.Slug=== router.query.category;
  };

  // const handleOnSearch=(query:string)=>{
  //   console.log('handling search');
  // }
  return (
    <>
    {/* serach bar */} 
    <div className="flex items-center border-b-2 border-gray-200">
                <svg
                    className="h-4 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="px-2 py-1 ml-1 outline-0"
                    
                />
      </div>
    <div className='px-5  my-5 flex items-center justify-between border-b-2 border-gray-200 font-semibold'>
      <ul className='lg:flex items-center'>
        <li className={'mr-6 pb-4 border-b-4 rounded-sm' +
        `${
          router.pathname ==='/' 
          ? ' border-b-primary-dark text-primary'
          : ' border-b-white text-gray-900'
        }`}>
          <Link href="/" className='font-bold'>Categories</Link>  
        </li>
        {
          
          categories.map(category=>{
            return (
            <li className={'mr-6 pb-4 border-b-4 rounded-sm'+`${
              isActiveLink(category)
              ? ' border-b-primary-dark text-primary'
              : ' border-b-white text-gray-900'
            }`} 
            key={category.id}>
              <Link href={`/category/${category.attributes.Slug}`}>{category.attributes.Title}</Link>
            </li>
            )
        })
        }
      </ul>

      
      </div>
      </>
  )
}

export default Tabs
