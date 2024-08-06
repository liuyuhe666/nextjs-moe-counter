import Link from "next/link";

export default function Home() {
  return (
      <div className="mx-auto flex flex-col">
        <div className="m-4">
          <p className="text-2xl mb-2 font-bold">⛏️ How to use</p>
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
            <span className="font-medium">SVG Address: </span> 
            <code>{`https://<your-domain>/api/counter?name=<your-name>`}</code>
          </div>
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
            <span className="font-medium">Img Tag: </span> 
            <code>{`<img src="https://<your-domain>/api/counter?name=<your-name>" alt="nextjs-moe-counter" />`}</code>
          </div>
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
            <span className="font-medium">Markdown: </span> 
            <code>{`![nextjs-moe-counter](https://<your-domain>/api/counter?name=<your-name>)`}</code>
          </div>
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
            <span className="font-medium">Danger alert!</span> The data can be accessed by anyone, please do not enter personal information.
          </div>
          <p className="font-bold mb-2">eg:</p>
          <p className="mb-2">
            <img src="/api/counter" alt="nextjs-moe-counter" />
          </p>
        </div>
        <div className="m-4">
          <p className="text-2xl mb-2 font-bold">✨ More theme</p>
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
            <span className="font-medium">Just use the query parameter theme, like this: </span> 
            <code>{`https://<your-domain>/api/counter?name=<your-name>&theme=moebooru`}</code>
          </div>
          <p className="font-bold mb-2">asoul</p>
          <p className="mb-2">
            <img src="/api/counter?theme=asoul" alt="nextjs-moe-counter" />
          </p>
          <p className="font-bold mb-2">moebooru</p>
          <p className="mb-2">
            <img src="/api/counter?theme=moebooru" alt="nextjs-moe-counter" />
          </p>
          <p className="font-bold mb-2">moebooru-h</p>
          <p className="mb-2">
            <img src="/api/counter?theme=moebooru-h" alt="nextjs-moe-counter" />
          </p>
          <p className="font-bold mb-2">rule34</p>
          <p className="mb-2">
            <img src="/api/counter?theme=rule34" alt="nextjs-moe-counter"/>
          </p>
          <p className="font-bold mb-2">gelbooru</p>
          <p className="mb-2">
            <img src="/api/counter?theme=gelbooru" alt="nextjs-moe-counter"/>
          </p>
          <p className="font-bold mb-2">gelbooru-h</p>
          <p className="mb-2">
            <img src="/api/counter?theme=gelbooru-h" alt="nextjs-moe-counter"/>
          </p>
        </div>
        <div className="m-4">
          <p className="text-2xl mb-2 font-bold">❤️ Credits</p>
          <ul className="list-disc ml-8">
            <li><Link href="https://vercel.com/" className="text-palette-primary font-bold px-1">Vercel</Link></li>
            <li><Link href="https://space.bilibili.com/703007996" className="text-palette-primary font-bold px-1">A-SOUL</Link></li>
            <li><Link href="https://github.com/moebooru/moebooru" className="text-palette-primary font-bold px-1">moebooru</Link></li>
            <li><Link href="https://rule34.xxx" className="text-palette-primary font-bold px-1">rule34.xxx</Link></li>
            <li><Link href="https://gelbooru.com" className="text-palette-primary font-bold px-1">gelbooru.com</Link></li>
            <li><Link href="https://icons8.com/icons/set/star" className="text-palette-primary font-bold px-1">Icons8</Link></li>
          </ul>
        </div>
      </div>
  );
}
