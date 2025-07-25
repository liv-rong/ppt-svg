import React from 'react'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col font-sans bg-gray-50">
      {/* 顶部工具栏 */}
      <header className="h-14 flex items-center px-6 bg-white border-b shadow-sm">
        <div className="flex gap-4">
          <button className="px-3 py-1 rounded bg-blue-600 text-white">新建</button>
          <button className="px-3 py-1 rounded bg-gray-200">保存</button>
          <button className="px-3 py-1 rounded bg-gray-200">导入</button>
          <button className="px-3 py-1 rounded bg-gray-200">导出</button>
          <button className="px-3 py-1 rounded bg-gray-200">撤销</button>
          <button className="px-3 py-1 rounded bg-gray-200">重做</button>
          <button className="px-3 py-1 rounded bg-gray-200">导入Markdown</button>
        </div>
      </header>
      {/* 主体区域 */}
      <main className="flex flex-1 overflow-hidden">
        {/* 左侧页面缩略图栏 */}
        <aside className="w-36 bg-white border-r flex flex-col items-center py-4 gap-2">
          <div className="font-bold mb-2">页面缩略图</div>
          <div className="flex flex-col gap-2 w-full items-center">
            {/* 占位缩略图 */}
            <div className="w-24 h-16 bg-gray-200 rounded shadow-inner" />
            <div className="w-24 h-16 bg-gray-200 rounded shadow-inner" />
            <button className="w-24 h-8 bg-blue-100 text-blue-700 rounded mt-2">+ 新建页面</button>
          </div>
        </aside>
        {/* 中央SVG画布编辑区 */}
        <section className="flex-1 flex items-center justify-center bg-gray-100">
          <svg
            width="640"
            height="360"
            className="bg-white border shadow rounded"
            style={{ minWidth: 320, minHeight: 180 }}
          >
            <rect
              x="40"
              y="40"
              width="200"
              height="80"
              fill="#e0e7ff"
              stroke="#6366f1"
              strokeWidth="2"
            />
            <text
              x="140"
              y="90"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="20"
              fill="#6366f1"
            >
              SVG 画布区
            </text>
          </svg>
        </section>
        {/* 右侧属性面板 */}
        <aside className="w-64 bg-white border-l flex flex-col p-4 gap-4">
          <div className="font-bold mb-2">属性面板</div>
          <div className="flex flex-col gap-2">
            <div className="h-8 bg-gray-100 rounded" />
            <div className="h-8 bg-gray-100 rounded" />
            <div className="h-8 bg-gray-100 rounded" />
          </div>
        </aside>
      </main>
    </div>
  )
}
