import Head from 'next/head'

import {SimpleLayout} from '@/components/layouts/SimpleLayout'
import {Layout} from "@/components/layouts/Layout";
import {news} from "@/components/shared/constants/news"
import {useRouter} from "next/router";

export default function ArticlesIndex() {
    const router = useRouter();
    const { id } = router.query;

    let article = news.find((article) => article.slug === id);

    return (
        <>
            <Head>
                <title>Articles - Spencer Sharp</title>
                <meta
                    name="description"
                    content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
                />
            </Head>
            <Layout>
                <SimpleLayout title={article.title}
                              intro={article.description}>
                </SimpleLayout>
            </Layout>
        </>
    )
}
