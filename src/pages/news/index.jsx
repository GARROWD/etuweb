import Head from 'next/head'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/layouts/SimpleLayout'
import {formatDate} from '@/components/shared/constants/formatDate'
import {Layout} from "@/components/layouts/Layout";

function Article({article}) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/news/${article?.slug}`}>
                    {article?.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article?.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article?.date)}
                </Card.Eyebrow>
                <Card.Description>{article?.description}</Card.Description>
                <Card.Cta>Read news</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article?.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(article?.date)}
            </Card.Eyebrow>
        </article>
    )
}

export default function News() {
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

    return (
        <>
            <Head>
                <title>ETU - News</title>
                <meta
                    name="description"
                    content="ETU - News"
                />
            </Head>
            <Layout>
                <SimpleLayout title="News"
                              intro="Bla-bla-bla">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                        <div className="flex max-w-3xl flex-col space-y-16">
                            {news.map((article) => (
                                <Article key={article?.slug} article={article}/>
                            ))}
                        </div>
                    </div>
                </SimpleLayout>
            </Layout>
        </>
    )
}
