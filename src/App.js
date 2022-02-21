import './App.css';
import Layout from './components/layout.js';
import About from './components/about.js';
import Academics from './components/academics.js';
import Portfolio from './components/portfolio.js';
import Utility from './components/utility.js';

function App() {
  return (
    <div className="App">
      <Layout>
        <About/>
        <Academics/>
        <Portfolio/>
        <Utility/>
      </Layout>
    </div>
  );
}

export default App;
