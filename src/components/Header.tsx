import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="border-b">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="text-2xl font-semibold">Next.js Moe Counter</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="https://github.com/liuyuhe666/nextjs-moe-counter" target="_blank" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Source</Link>
              </li>
              <li>
                <Link href="https://github.com/liuyuhe666" target="_blank" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
