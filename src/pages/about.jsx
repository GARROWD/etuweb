import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import {Layout} from "@/components/layouts/Layout";

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>ETU - About</title>
        <meta
          name="description"
          content="ETU - About"
        />
      </Head>
        <Layout>
      <SimpleLayout
        title="About"
        intro="The Saint Petersburg State Electrotechnical University 'LETI' is a prominent institution of higher education in Russia, known for its contributions to the field of electrical engineering and technology. Named after Vladimir Ilyich Lenin, the university has a rich history dating back to its establishment in 1886. Academic Excellence:
Saint Petersburg State Electrotechnical University is renowned for its strong emphasis on academic excellence and innovation in the field of electrical engineering. The university offers a wide range of undergraduate and graduate programs, fostering the development of skilled professionals and researchers.

Research and Innovation:
LETI has a distinguished record in research and innovation, contributing significantly to advancements in electrical engineering, electronics, and related disciplines. The university engages in collaborative projects with industry partners and actively participates in national and international research initiatives.

Web Programming Lesson:
As part of its comprehensive curriculum, Saint Petersburg State Electrotechnical University likely offers courses in web programming. Web programming is a crucial aspect of modern software development, focusing on the creation and maintenance of dynamic and interactive websites. This field encompasses a variety of technologies, including HTML, CSS, JavaScript, and server-side programming languages.">
        <div className="space-y-20">

        </div>
      </SimpleLayout>
        </Layout>
    </>
  )
}
