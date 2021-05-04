import React from 'react';
import Head from 'next/head';
import AboutContent from '../components/AboutContent';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Daytech Dashboard</title>
      </Head>
      <AboutContent />
    </>
  );
}