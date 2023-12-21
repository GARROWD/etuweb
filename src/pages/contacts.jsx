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

export default function Contacts() {
  return (
    <>
      <Head>
        <title>ETU - Contacts</title>
        <meta
          name="description"
          content="ETU - Contacts"
        />
      </Head>
        <Layout>
      <SimpleLayout
        title="Contacts"
        intro="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.">
        <div className="space-y-20">
          <SpeakingSection title="Frontend">
            <Appearance
              href="https://vk.com/garr1k"
              title="Mkrtchyan Garik"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              event="Lorem"
              cta="More"
            />

            <Appearance
              href="#"
              title="Bla-Bla Bla"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              event="Lorem"
              cta="More"
            />
          </SpeakingSection>
          <SpeakingSection title="Backend">
            <Appearance
              href="https://vk.com/garr1k"
              title="Mkrtchyan Garik"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              event="Lorem"
              cta="More"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
        </Layout>
    </>
  )
}
