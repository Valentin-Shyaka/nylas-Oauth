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
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
         
         <button className="gsi-material-button">
  <div className="gsi-material-button-state"></div>
  <div className="gsi-material-button-content-wrapper">
    <div className="gsi-material-button-icon">
      <a href="/connect/calendar">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            { !!userGrantId ? "Connected! " : "Sign in " }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
      </a>
    </div>
    <span className="gsi-material-button-contents">Sign in with Google</span>
    <span style={{"display": "none"}}>Sign in with Google</span>
  </div>
</button>
        </a>
      </div>
    </main>
  );
}
