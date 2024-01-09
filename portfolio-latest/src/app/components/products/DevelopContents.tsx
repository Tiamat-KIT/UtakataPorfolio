import { tw } from "typewind"

export default function DevContents(){
    return(
        <ul className={`menu ${tw.bg_base_200.w_64.rounded_box}`}>
          <li>
            <details>
              <summary>Develop-Contents</summary>
              <ul>
                <li>
                    <a></a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
    )
}