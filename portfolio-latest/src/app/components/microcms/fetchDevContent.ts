import { createClient } from 'microcms-js-sdk';
import type {MicroCMSDate,MicroCMSImage} from "microcms-js-sdk"

export const DevContents_client = createClient({
  serviceDomain: 'mydevelopments',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'IMq4gHXTgzFGFoIdPY9okM76f1q6ndM3h1GH',
});

export type DevContentsData = {
    img: MicroCMSImage
} & Record<"name" | "id" | "repository_url",string> & {image: MicroCMSImage} & MicroCMSDate