import { GetServerSideProps } from 'next';
import Head from 'next/head';
import path from 'path';
import fs from 'fs';
import NavBar from '@/app/components/nav';

interface ContactPageProps {
  title: string;
  description: string;
  heading: string;
  body: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Read JSON data from the file in the 'public' directory
  const filePath = await path.join(process.cwd(), 'public', 'sample-data.json');
  const jsonData = await JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return {
     props: {
       title: jsonData.services.meta.title,
      description: jsonData.services.meta.description,
      heading: jsonData.services.content.h1,
      body: jsonData.services.content.description,
    },
  };
};

export default function AboutPage({ title, description, heading, body }: ContactPageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main>
         <NavBar/>
        <h1>{heading}</h1>
        <p>{body}</p>
      </main>
    </>
  );
}
