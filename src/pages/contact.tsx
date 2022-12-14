import StyledText from '$components/text/StyledText';
import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="A sample description about the page"
        />
      </Head>
      <div className="flex-1 flex flex-col items-center justify-center select-none space-y-4 text-5xl">
        <h1 className="text-6xl font-bold">
          This is the <StyledText>Contact</StyledText> page
        </h1>
      </div>
    </>
  );
};

export default Contact;
