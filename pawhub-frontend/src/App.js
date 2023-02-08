import './App.css';
import DiscussionList from './components/DiscussionList';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/discussions" element={<DiscussionList />} />
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
