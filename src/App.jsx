import './App.css'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import RoutesUser from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <RoutesUser />
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  )
}

export default App
