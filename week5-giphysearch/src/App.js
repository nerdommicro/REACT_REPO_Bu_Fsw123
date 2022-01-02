import { useState } from "react";
import "./App.css";
import {useEffect} from 'react';

function App() {
    return (
        <BrowserRouter>
            <header>
                <ul id="main-menu">
                    <span className="menu-label">Main Menu</span>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dogs">Dogs</Link>
                    </li>
                    <li>
                        <Link to="/cats">Cats</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Routes>
                    <Route exact={true} path="/" element={<HomePage />} />
                    <Route path="/dogs" element={<DogPage />} />
                    <Route path="/cats" element={<CatPage />} />
                    <Route path="/search" element={<SearchGiphyPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
