import Head from 'next/head'
import {Container} from '@/components/layouts/Container'
import {Layout} from "@/components/layouts/Layout";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>ETU - Home</title>
                <meta
                    name="description"
                    content="ETU - Home"
                />
            </Head>

            <Layout>
                <Container className="mt-10 sm:mt-20 sm:px-8">
                    <Hero/>
                </Container>
            </Layout>
        </>
    )
}
