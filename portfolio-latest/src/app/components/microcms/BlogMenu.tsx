import { client, BlogData } from "./fetchblog"
import { tw } from "typewind"

export default async function BlogMenu(){
    const {contents} = await client.getList<BlogData>({
        endpoint: "blog"
      })
    return (
        <ul className={`menu ${tw.bg_base_200.w_64.rounded_box}`}>
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
    )
}