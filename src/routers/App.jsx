import '../assets/styles/App.css';
import { ScrollTop } from './ScrollTop';
import { Header } from '../test/container/Header/Header';
import { Main } from '../test/container/Main/Main';
import { Footer } from '../test/container/Footer/Footer';

function App() {
  return (
    <>
      {/* <ScrollTop /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
