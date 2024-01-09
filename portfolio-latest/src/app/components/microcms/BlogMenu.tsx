import { client, BlogData } from "./fetchblog"

export default async function BlogMenu(){
    const {contents} = await client.getList<BlogData>({
        endpoint: "blog"
      })
    return (
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
    )
}