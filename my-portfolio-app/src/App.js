import "./App.css";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import WorkExperience from './components/workexperience/WorkExperience'

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
