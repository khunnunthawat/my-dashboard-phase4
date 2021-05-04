import Head from 'next/head';
import WidgetContent from '../components/Widgets/WidgetContent';
export default function Home() {
  return (
    <>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WidgetContent />
    </>
  );
}
