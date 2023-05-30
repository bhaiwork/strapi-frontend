import CategoryData from '@/components/CategoryData';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Strapi Frontend <br/>
      {/*@ts-ignore*/}
      <CategoryData/>
    </div>
  )
}
