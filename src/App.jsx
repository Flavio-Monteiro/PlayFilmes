import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListingHome } from './Components/ListingHome'
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { CommonQuestions } from './Components/CommonQuestions';


function App() {

  return (
    <>
      <Header/>
      <ListingHome/>
      <CommonQuestions/>
      <Footer/>
    </>
  )
}

export default App
