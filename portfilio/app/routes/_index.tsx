import type { HeadersFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Carousel from "~/components/Carousel";
import {client, BlogData } from "~/microcms/fetchblog.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=0, s-maxage=60, stale-while-revalidate=60',
  };
};

export const loader: LoaderFunction = async () => {
  const { contents } = await client.getList<BlogData>({
    endpoint: 'blog',
  });
  return contents;
};

export default function Index() {
  const contents = useLoaderData<BlogData[]>()
  const NowYear = new Date().getFullYear()
  const YearList = Array(NowYear - 2003).map((_,index) => {return 2003 + index})
  
  
  return (
    <main className='h-full bg-base-100'>
      <div className="grid grid-cols-4 grid-rows-1">
        <div className="col-span-3">
          <Carousel />
          <article>
            <h3 className="hero text-2xl">使える技術</h3>
            <h5 className="hero text-lg">プログラミング言語</h5>
            <hr />

            {/* <div className="grid grid-cols-5 grid-rows-1">
              <div className="col-span-3">
                
              </div>
              <div className="col-span-2">
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end timeline-box">2003</div>
                  <hr/>
                </li>
                {YearList.fill(2004).map((val,idx) => {
                    if((val + idx) == 2023){
                      return (
                        <li key={idx}>
                          <hr />
                          <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                          </div>
                          <div className="timeline-end timeline-box">{val + idx}</div>
                        </li>
                      )
                    }
                    return (
                        <li key={idx}>
                          <hr />
                          <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                          </div>
                          <div className="timeline-end timeline-box">{val + idx}</div>
                          <hr/>
                        </li>
                    )
                })}
              </ul> 
              </div>
            </div>*/}
          </article>
        </div>
      <div className="border-l-[1.0px] border-black h-full">
        <aside className="container mx-auto px-4">
        <ul className="menu bg-base-200 w-64 rounded-box">
          <li>
            <details>
              <summary>Blog</summary>
              <ul>
                  {contents.map((blog) => {
                    return (
                      <li key={blog.id}>
                        <a>{blog.title}</a>
                      </li>
                    )
                  })}
              </ul>
            </details>
          </li>
        </ul>
        </aside>
      </div>
      </div>
  </main>
  );
}
