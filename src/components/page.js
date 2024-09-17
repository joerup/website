import Head from 'next/head'
import Footer from './footer.js'

export default function Page({ children, title, theme }) {

  return (
    <div>
      <h1 className={`text-4xl font-bold ${theme === 'dark' ? "text-white" : "text-gray-900"} mb-6 mt-4`}>{title}</h1>
      <article className={`mb-8 md:mb-20`}>{children}</article>
    </div>
  )
}
