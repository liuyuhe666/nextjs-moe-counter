export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="mx-auto flex flex-col">
        <div className="m-4">
          <p className="text-2xl mb-2">How to use:</p>
          <p className="font-bold mb-2">SVG address</p>
          <p className="text-gray-500 mb-2">{`https://<your domain>/api/counter?name=<your name>`}</p>
          
          <p className="font-bold mb-2">Img tag</p>
          <p className="text-gray-500 mb-2">{`<img src="https://<your domain>/api/counter?name=<your name>" alt="nextjs-moe-counter" />`}</p>
          
          <p className="font-bold mb-2">Markdown</p>
          <p className="text-gray-500 mb-2">{`![nextjs-moe-counter](https://<your domain>/api/counter?name=<your name>)`}</p>
          
          <p className="font-bold mb-2">eg:</p>
          <p className="mb-2">
            <img src="/api/counter" alt="nextjs-moe-counter" />
          </p>

          <p className="text-red-700">Data can access by anyone, please DO NOT enter personal information.</p>
        </div>
        <div className="m-4">
          <p className="text-2xl mb-2">More theme</p>
          <p className="mb-2">Just use the query parameters theme, like this: <span className="text-gray-500">{`https://<your domain>/api/counter?name=<your name>&theme=moebooru`}</span></p>
          
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
            <img src="/api/counter?theme=rule34" alt="nextjs-moe-counter" />
          </p>
          <p className="font-bold mb-2">gelbooru</p>
          <p className="mb-2">
            <img src="/api/counter?theme=gelbooru" alt="nextjs-moe-counter" />
          </p>
          <p className="font-bold mb-2">gelbooru-h</p>
          <p className="mb-2">
            <img src="/api/counter?theme=gelbooru-h" alt="nextjs-moe-counter" />
          </p>
        </div>
        <div className="m-4">
          <p className="text-2xl mb-2">Credits</p>
          <ul className="list-disc ml-6">
            <li><a href="https://vercel.com/">Vercel</a></li>
            <li><a href="https://space.bilibili.com/703007996">A-SOUL</a></li>
            <li><a href="https://github.com/moebooru/moebooru">moebooru</a></li>
            <li><a href="https://rule34.xxx">rule34.xxx</a></li>
            <li><a href="https://gelbooru.com">gelbooru.com</a></li>
            <li><a href="https://icons8.com/icons/set/star">Icons8</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
