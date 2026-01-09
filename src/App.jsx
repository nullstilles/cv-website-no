import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <div className="container layout">
        <Sidebar />
        <main className="main-content">
          <Profile />
          <Education />
          <Experience />
          <Skills />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;