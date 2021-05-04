import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';
import MainLayout from '../components/Layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
