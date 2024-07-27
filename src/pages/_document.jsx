import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="title"
          content="Abdelrahman Abdelmoneim - Full Stack Developer/Software Engineer "
        />
        <meta
          name="description"
          content="I'm Abdelrahman, full stack developer/software engineer. I am on my journey to exploring the world of Softwares and AI."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kathann.vercel.app/home" />
        <meta
          property="og:title"
          content="Abdelrahman Abdelmoneim - Full Stack Developer/Software Engineer "
        />
        <meta
          property="og:description"
          content="I'm Abdelrahman, full stack developer/software engineer.I am on my journey to exploring the world of Softwares and AI."
        />
        <meta
          property="og:image"
          content=""
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bedomoeim.vercel.app/home" />
        <meta
          property="twitter:title"
          content="Abdelrahman Abdelmoneim - Full Stack Developer/Software Engineer "
        />
        <meta
          property="twitter:description"
          content="I'm Abdelrahman, full stack developer/software engineer. I am on my journey to exploring the world of Softwares and AI."
        />
        <meta
          property="twitter:image"
          content=""
        />

        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
