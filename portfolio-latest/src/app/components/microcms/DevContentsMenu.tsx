import { DevContents_client,DevContentsData } from "./fetchDevContent"

export default async function DCMenu(){
    const {contents} = await DevContents_client.getList<DevContentsData>({
        endpoint: "dev_data"
      })
    return (
        <ul className="menu bg-primary-content w-64 rounded-box">
          <li>
            <details>
              <summary>DevContents</summary>
              <ul>
                  {contents.map((blog) => {
                    return (
                      <li key={blog.id}>
                        <a className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" checked="checked" /> 
                          <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                          </div>
                          <div className="collapse-content"> 
                            <a>{blog.name}</a>
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