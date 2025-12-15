import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="bg-slate-50 min-h-screen font-body text-slate-900 selection:bg-accent selection:text-white">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Skills />
                                <Projects />
                                <Contact />
                            </>
                        } />
                        <Route path="/project/:id" element={<ProjectDetails />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
