import Carousel from './components/Carousel'
import BlogMenu from './components/microcms/BlogMenu'
import DCMenu from './components/microcms/DevContentsMenu'
import { tw } from 'typewind';

export default async function Home() {
  
  return (
    <main className='h-full bg-base-100'>
      <div className="grid grid-cols-4 grid-rows-1">
        <div className="col-span-3">
          <Carousel />
          <article>
           
          </article>
        </div>
      <div className="border-l-[1.0px] border-black h-full">
        <aside className="container mx-auto px-4">
        <BlogMenu />
        <span className={tw.p_10} />
        <DCMenu />
        </aside>
      </div>
      </div>
  </main>
  )
}
