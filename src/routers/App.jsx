import { Suspense, lazy } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { Main } from '../test/container/Main/Main';
import { Header } from '../test/container/Header/Header';
import { Footer } from '../test/container/Footer/Footer';
import { useGetWidthSize } from '../test/hooks/useGetWidthSize';
import '../assets/styles/App.css';

const ScrollTop = lazy(() => import('./ScrollTop'));

function App() {
  const isMobile = useGetWidthSize(768);

  return (
    <>
      <Suspense>{!isMobile && <ScrollTop />}</Suspense>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop
        smooth
        color="#fff"
        className="flex justify-center items-center bg-blue_check border-solid border-2 right-2 bottom-12 border-pure_white hover:bg-blue_title focus:bg-blue_title"
      />
    </>
  );
}

export default App;
