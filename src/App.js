import './index.css';
import Home from './home';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import TermsAndConditions from './terms';
import CU from './contact';
import privacy from './privacy';
import refund from './refund';

function App() {
  return (
    <div className="App">
      {/* {<TermsAndConditions/>} */}
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/contact-us" Component={CU}/>
          <Route exact path="/terms" Component={TermsAndConditions}/>
          <Route exact path="/privacy" Component={privacy}/>
          <Route exact path="/refund" Component={refund}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;