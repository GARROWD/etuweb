import Head from 'next/head'

import {SimpleLayout} from '@/components/layouts/SimpleLayout'
import {Layout} from "@/components/layouts/Layout";
import {useRouter} from "next/router";

export default function ArticlesIndex() {
    const news = [
        {
            slug: 'news-1',
            title: 'Getting Started with React Hooks',
            date: '2023-01-15',
            description: 'Learn the basics of React Hooks and how to use them in your projects.',
        },
        {
            slug: 'news-2',
            title: 'Building Scalable APIs with Node.js',
            date: '2023-02-28',
            description: 'Explore best practices for building scalable and maintainable APIs using Node.js.',
        },
    ];


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
                <SimpleLayout title={article?.title}
                              intro={article?.description}>
                </SimpleLayout>
            </Layout>
        </>
    )
}
