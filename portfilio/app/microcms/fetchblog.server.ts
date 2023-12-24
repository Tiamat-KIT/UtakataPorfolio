import { createClient } from 'microcms-js-sdk';
import type {MicroCMSDate,MicroCMSImage} from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: 'tiamat',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'cea0bdf6bfc54fbd8b53f3bfbbdc346710d8',
});

export type BlogData = {
    img: MicroCMSImage
} & Record<"id" | "title" | "body",string> & {category: any} & MicroCMSDate