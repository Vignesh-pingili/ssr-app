import { GetServerSideProps } from 'next';
import Head from 'next/head';
import path from 'path';
import fs from 'fs';

interface AboutPageProps {
  title: string;
  description: string;
  heading: string;
  body: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Read JSON data from the file in the 'public' directory
  const filePath = path.join(process.cwd(), 'public', 'sample-data.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return {
    props: {
      title: jsonData.about.meta.title,
      description: jsonData.about.meta.description,
      heading: jsonData.about.content.h1,
      body: jsonData.about.content.description,
    },
  };
};

export default function AboutPage({ title, description, heading, body }: AboutPageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main>
        <h1>{heading}</h1>
        <p>{body}</p>
      </main>
    </>
  );
}
