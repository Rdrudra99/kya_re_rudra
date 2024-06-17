// utils/markdownToHtml.js
import { remark } from 'remark';
import html from 'remark-html';

export async function markdownToHtml(markdown:any) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}