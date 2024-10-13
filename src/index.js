import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Slider from "./components/Player Slider";
import AboutUs from "./components/About Us";
import Schedule from "./components/Schedule";
import NewsSlider from "./components/News Slider";
import History from './components/History';
import Header from "./components/Header";
import SchedulePage from  "./components/Schedule Page";
import NewsPage from "./components/News Page";
<<<<<<< HEAD
import TeamPage from "./components/Team Page";
import Contact from "./components/Contact";
import ClubStuff from "./components/Club Stuff";
import InProgress from "./components/InProgress";
=======
>>>>>>> 5626796 (new commit)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <NewsSlider />
                        <Schedule />
                        <AboutUs />
                        <Slider />
                    </>
                } />

                {/* History Route */}
                <Route
<<<<<<< HEAD
                    path="/historija"
=======
                    path="/history"
>>>>>>> 5626796 (new commit)
                    element={
                        <>
                            <Header />
                            <History />
                        </>
                    }
                />

                {/* Schedule Route */}
                <Route
<<<<<<< HEAD
                    path="/seniorke-raspored"
=======
                    path="/raspored"
>>>>>>> 5626796 (new commit)
                    element={
                        <>
                            <Header />
                            <SchedulePage />
                        </>
                    }
                />
<<<<<<< HEAD
                <Route
                    path="/seniori-raspored"
                    element={
                        <>
                            <Header />
                            <InProgress />
                        </>
                    }
                />
=======
>>>>>>> 5626796 (new commit)

                {/* Schedule Route */}
                <Route
                    path="/novosti"
                    element={
                        <>
                            <Header />
                            <NewsPage />
                        </>
                    }
                />

<<<<<<< HEAD
                {/* Team Route */}
                <Route
                    path="/seniorke"
                    element={
                        <>
                            <Header />
                            <TeamPage />
                        </>
                    }
                />

                <Route
                    path="/seniori"
                    element={
                        <>
                            <Header />
                            <InProgress />
                        </>
                    }
                />

                <Route
                    path="/strucnistab"
                    element={
                        <>
                            <Header />
                            <ClubStuff />
                        </>
                    }
                />
                <Route
                    path="/seniorke-raspored"
                    element={
                        <>
                            <Header />
                            <SchedulePage />
                        </>
                    }
                />

                <Route
                    path="/clanske-karte"
                    element={
                        <>
                            <Header />
                            <InProgress />
                        </>
                    }
                />

                {/* Contact Route */}
                <Route
                    path="/kontakt"
                    element={
                        <>
                            <Header />
                            <Contact />
                        </>
                    }
                />

=======
>>>>>>> 5626796 (new commit)
            </Routes>

            <Footer />  {/* Footer appears on all pages */}
        </Router>
    </React.StrictMode>
);

reportWebVitals();
