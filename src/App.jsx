import './App.css'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import RoutesUser from './routes/routes';

function App() {

  return (
    <>
      <Router>
        <RoutesUser />
      </Router>
    </>
  )
}

export default App
