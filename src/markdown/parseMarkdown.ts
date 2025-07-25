// 需要安装 marked: npm install marked
import { marked } from 'marked'
// @ts-expect-error: marked 没有类型声明，忽略类型检查

// 定义 PPT 页面结构类型
export interface PPTPage {
  title: string
  content: string[]
}

/**
 * 解析 Markdown 文本，生成 PPT 页面结构数组
 * @param md Markdown 文本
 * @returns PPT 页面结构数组
 */
export function parseMarkdownToPPTPages(md: string): PPTPage[] {
  const tokens = marked.lexer(md)
  const pages: PPTPage[] = []
  let currentPage: PPTPage | null = null

  tokens.forEach((token: any) => {
    if (token.type === 'heading' && token.depth === 1) {
      // 新建一页
      if (currentPage) pages.push(currentPage)
      currentPage = { title: token.text, content: [] }
    } else if (token.type === 'heading' && token.depth === 2) {
      // 二级标题作为新页面（可根据需求调整）
      if (currentPage) pages.push(currentPage)
      currentPage = { title: token.text, content: [] }
    } else if (token.type === 'paragraph' && currentPage) {
      currentPage.content.push(token.text)
    }
  })
  if (currentPage) pages.push(currentPage)
  return pages
}
