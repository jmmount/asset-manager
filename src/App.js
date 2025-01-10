// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// (Optional) Import Bootstrap JavaScript if needed
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Main from './pages/Home.jsx'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/api/" element={<PracticeAPI />} />
        <Route path="/api/" element={<PracticeAPI />} />
        <Route path="/api/" element={<PracticeAPI />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

