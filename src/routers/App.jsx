import { Suspense, lazy } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { Main } from '../components/container/Main/Main';
import { Header } from '../components/container/Header/Header';
import { Footer } from '../components/container/Footer/Footer';
import { useGetWidthSize } from '../components/hooks/useGetWidthSize';
import '../assets/styles/App.css';

const ScrollTop = lazy(() => import('./ScrollTop'));

function App() {
  const isMobile = useGetWidthSize(768);
  const baseClass =
    'flex justify-center items-center !z-10 !right-2 !bottom-12 border-solid border-2';
  const colorClass =
    '!bg-blue_check border-pure_white hover:!bg-blue_title focus:!bg-blue_title';
  const className = `${baseClass} ${colorClass}`;

  const scrollOptions = {
    smooth: true,
    color: '#fff',
    className
  };

  return (
    <>
      <Suspense>{!isMobile && <ScrollTop />}</Suspense>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop {...scrollOptions} />
    </>
  );
}

export default App;
