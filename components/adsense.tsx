"use client"

import Script from "next/script"

export function AdSenseScript() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5344273951045281"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    </>
  )
}
