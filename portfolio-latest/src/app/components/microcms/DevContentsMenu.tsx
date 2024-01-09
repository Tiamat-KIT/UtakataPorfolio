import { DevContents_client,DevContentsData } from "./fetchDevContent"
import Image from "next/image"
import { tw } from "typewind"

export default async function DCMenu(){
    const {contents} = await DevContents_client.getList<DevContentsData>({
        endpoint: "dev_data"
      })
    return (
        <ul className={`menu bg-primary-content ${tw.rounded_box.w_64}`}>
          <li>
            <details>
              <summary>DevContents</summary>
              <ul>
                  {contents.map((blog) => {
                    return (
                      <li key={blog.id}>
                        <a className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" /> 
                          <div className={`collapse-title ${tw.text_sm.font_medium}`}>
                            {blog.name}
                          </div>
                          <div className="collapse-content"> 
                            <Image alt={blog.name} width={blog.image.width! / 3} height={blog.image.height! / 3} src={blog.image.url} />
                          </div>
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </details>
          </li>
        </ul>
    )
}