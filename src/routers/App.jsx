import '../assets/styles/App.css';
import { Laout } from '../components/common/Laout';
import { Header } from '../components/container/Header/Header';
import { Footer } from '../components/container/Footer/Footer';
import { Main } from '../components/container/Main/Main';

function App() {
  return (
    <>
      <Laout>
        <Header />
        <Main />
        <Footer />
      </Laout>
    </>
  );
}

export default App;
