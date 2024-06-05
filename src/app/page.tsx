'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import cookierCutter from 'cookie-cutter';


export default function Home() {
  const [userGrantId, setGrantId] = useState(null)

  useEffect(() => {
    const grantId = cookierCutter.get('nylas_user_grant_id')
    if (grantId) {
      setGrantId(grantId)
    }
  }, [])

  return (
    <main className="flex w-full h-full flex-col items-center justify-between p-6">
      

      <div className=" justify-center self-center text-center  align-middle">
        <a
          href="/connect/calendar"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            { !!userGrantId ? "Connected! " : "Sign in " }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Oauth Signin using nylas
          </p>
        </a>
      </div>
    </main>
  );
}
