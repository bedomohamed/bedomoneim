import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Abdelrahman Abdelmoneim</title>
        <meta
          name="description"
          content="I'm Abdelrahman Abdelmoneim. A leader, founder, and software engineer in Silicon Valley, CA."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Abdelrahman. A leader, founder, and software enthusiast in
              Silicon Valley.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Highly skilled Software Engineering professional with <b>4+ years of experience </b> building dynamic and responsive websites. Proven ability to develop parallel processing applications and integrating DevOps practices to streamline workflows. Adept at task prioritization using proactive approach to overcome data-related challenges. An entrepreneur who has <b>launched SaaS products </b>and built <b>over 50 open-source projects.</b> A quick learner able to easily pick up new skills and thrive in challenging solutions. Holds a <b> Computer Sciene Degree </b> from University of Michigan. 
              </p>
              <p>
                <b>Fluent</b> in English, Arabic, <b>beginner in Spanish.</b>

              </p>
              <p><b>
                Areas of Expertise:

                </b>

              </p>
              <p>
              Software Engineering, Full Stack Development, Frontend Development, Web Development, Backend Development, AI, Data Engineering, DevOps, Cloud Computing.
              </p>
              <p>
                <b>Industry Experience:</b>
              </p>
              <p>
              Software as a Service (SaaS), Fintech, Information Technology, Consulting 
              </p>
              <p>
              Feel free to reach out to me.  


              </p>
              <p>
              Have a great day! 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/bedomohamed"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/abdelmon/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:abdel@glitchfi.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                abdel@glitchfi.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
