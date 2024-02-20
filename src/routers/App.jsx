import '../assets/styles/App.css';
import { Laout } from '../components/common/Laout';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { Main } from '../components/common/Main';

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
