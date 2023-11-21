import mainLogo from '/assets/img/main.jpg';
import '../assets/css/index.css';
import {ChakraProvider} from "@chakra-ui/react";
import { FeedbackForm } from '../components/FeedbackForm';
import { FeedbackApi } from '../services/api/feedbackApi';


function App() {

  const api = new FeedbackApi();

  return (
    <>
    <ChakraProvider>
        <div className='container'>
            <div className='left'>
              <img src={mainLogo} alt={'asd'}/>
            </div>
            <div className='right'>
                <FeedbackForm api={api} />
            </div>
        </div>
        </ChakraProvider>
    </>
  )
}

export default App
