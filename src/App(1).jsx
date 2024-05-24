import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './components/Form'
import SuccessComponent from './components/SuccessComponent';


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/success" element={<SuccessComponent />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
