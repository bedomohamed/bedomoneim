import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Air, M2, 8GB RAM (2023)">
              I was using an Intel-based 15.6” HP Laptop prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Cursor">
              Previously I was using VS Code for coding but now I use Cursor. It
              is AI Powered IDE. I can see almost 50% more productivity in my
              work after using it.
            </Tool>

            <Tool title="OpenAI">
              I leverage OpenAI for various AI and API purposes, enhancing my
              applications with state-of-the-art language models.
            </Tool>

            <Tool title="Replicate">
              A platform that allows me to run machine learning models in the
              cloud, simplifying the process of integrating advanced AI
              capabilities into my projects.
            </Tool>

            <Tool title="Hugging Face">
              An essential resource for AI model development and deployment,
              offering a vast collection of pre-trained models and tools.
            </Tool>

            <Tool title="Vercel">
              A powerful platform for front-end development and deployment,
              enabling seamless integration with frameworks like Next.js.
            </Tool>

            <Tool title="Supabase">
              An open-source Firebase alternative that provides a complete
              backend solution, including database management, authentication,
              and real-time updates.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Todoist">
              Todoist is everything for me. I use it for progress taking mainly. 
              I add my marketing campaign deadlines, project progress, future scopes and product ideas in it. 
            </Tool>

            <Tool title="Google Keep">
              I use Keep for noting my thoughts, new project ideas, and sometimes 
              I use it as my to-do list as well. 
            </Tool>

            <Tool title="Google Calendar">
              My go-to tool for scheduling managing appointments, and
              organizing my time effectively.
            </Tool>

            <Tool title="Cal.com">
              Cal.com saves a lot my time. Instead of constantly communicating on fixing a 
              meeting time now I just send my Cal link to everyone who wants to talk with me.
            </Tool>

            <Tool title="Twitter">
              I am super active on twitter (X). I use it to connect with like minded 
              people building cool stuff just like me. I use twitter to find good 
              coding/designing resources as well. 
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
