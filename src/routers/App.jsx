import { Suspense, lazy } from 'react';
import { Main } from '../test/container/Main/Main';
import { Header } from '../test/container/Header/Header';
import { Footer } from '../test/container/Footer/Footer';
import { useGetWidthSize } from '../test/hooks/useGetWidthSize';
import '../assets/styles/App.css';

const ScrollTop = lazy(() => import('./ScrollTop'));

function App() {
  const isMobile = useGetWidthSize(768)

  return (
    <>
      <Suspense>
        {!isMobile && <ScrollTop />}
      </Suspense>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
