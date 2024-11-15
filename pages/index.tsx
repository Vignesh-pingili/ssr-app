import { GetServerSideProps } from 'next';
import Head from 'next/head';
import path from 'path';
import fs from 'fs';

interface HomePageProps {
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
      title: jsonData.home.meta.title,
      description: jsonData.home.meta.description,
      heading: jsonData.home.content.h1,
      body: jsonData.home.content.description,
    },
  };
};

export default function Page({ title, description, heading, body }: HomePageProps) {
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