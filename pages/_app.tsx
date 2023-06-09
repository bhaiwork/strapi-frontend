import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import TopHeader from '@/components/TopHeader'
import '@/styles/globals.css'
import { ICartItem } from '@/types/page';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
export default function MyApp({ Component, pageProps }:AppProps) {

  useEffect(()=>{
    console.log("running");
  })
    const [cart,setCart]=useState<ICartItem[]>([]);
    const [reloadKey,setReloadKey]=useState<number>(1);
    const [productQty,setProductQty]=useState<number>(1);
    const [subtotal,setSubtotal]=useState<number>(0);

  return <>
  {/* container mx-auto  */}
  <div className='container px-10 mx-auto font-mono'>
  <NavBar key={reloadKey} cart={cart}/>
  <TopHeader/>

  <main className='pb-32'>
  <Component cart={cart} setCart={setCart} subtotal={subtotal}  setSubtotal={setSubtotal} productQty={productQty}  setProductQty={setProductQty} {...pageProps} />
  </main>
  <Footer/>
  </div>
  </> 
}
