import '../assets/styles/App.css';
import { ScrollTop } from './ScrollTop';
import { Header } from '../components/container/Header/Header';
import { Main } from '../components/container/Main/Main';
import { Footer } from '../components/container/Footer/Footer';

function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
