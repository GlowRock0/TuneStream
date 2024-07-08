import './App.css';
import './css/SongInfo.css';
import './css/Login.css';
import './css/Signup.css';
import React, {useState} from "react"
import Home from './components/Home.js';
import SongInfo from './components/SongInfo.js'
import Login from './components/Login.js'
import Signup1 from './components/Signup1.js'
import Signup2 from './components/Signup2.js'
import Signup3 from './components/Signup3.js'

function App() {

  const [page, setPage] = useState("home")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <div className="App">
      <div className="Main-container">
        <div className="UserHome-container">
          <div className="User-container">
            <div className="User-card">
              <div className="User-title">
                Likes
              </div>
              <div className="User-song-list">
                <div className="Song-list-item">
                  Song 1
                </div>
                <div className="Song-list-item">
                  Song 2
                </div>
                <div className="Song-list-item">
                  Song 3
                </div>
                <div className="Song-list-item">
                  Song 4
                </div>
                <div className="Song-list-item">
                  Song 5
                </div>
                <div className="Song-list-item">
                  Song 6
                </div>
                <div className="Song-list-item">
                  Song 7
                </div>
                <div className="Song-list-item">
                  Song 8
                </div>
              </div>
            </div>
            <div className="User-card">
              <div className="User-title">
                Playlists
              </div>
              <div className="User-song-list">
                <div className="Song-list-item">
                  Playlist 1
                </div>
                <div className="Song-list-item">
                  Playlist 2
                </div>
                <div className="Song-list-item">
                  Playlist 3
                </div>
                <div className="Song-list-item">
                  Playlist 4
                </div>
                <div className="Song-list-item">
                  Playlist 5
                </div>
                <div className="Song-list-item">
                  Playlist 6
                </div>
                <div className="Song-list-item">
                  Playlist 7
                </div>
                <div className="Song-list-item">
                  Playlist 8
                </div>
              </div>

            </div>
            <div>[TuneStream Logo]</div>

          </div>
          
          <div className="Home-container">
          
              <div className="Header-nav">
              <div className={`Search-nav ${isFilterOpen ? 'expanded' : ''}`}>
                <input type="text" placeholder="Search" className="Search-bar"></input>
                <div className="Filter-tab" onClick={toggleFilter}>Filter</div>
                {isFilterOpen && (
                  <div>
                  <div className="Filter-option-1">Genre 1</div>
                  <div className="Filter-option-2">Genre 2</div>
                  <div className="Filter-option-3">Genre 3</div>
                  </div>
                )}
              </div>
                <div className="Home-button-container">
                  <div onClick={() => setPage("home")} className="Home-button">Home</div>
                </div>
                <div className="Login-card">
                  <div onClick={() => setPage("login")} className="Login-btn">Login</div>
                  <div onClick={() => setPage("signup1")} className="Signup-btn">Sign Up</div>
                  <div className="User-page-btn">PFP</div>
                </div>
              </div>

            {page === "home" &&
              <Home setPage={setPage} isFilterOpen={isFilterOpen}/>
            }
            {page === "song-info" &&
              <SongInfo isFilterOpen={isFilterOpen}/>
            }
            {page === "login" &&
              <Login setPage={setPage}/>
            }
            {page === "signup1" &&
              <Signup1 setPage={setPage}/>
            }
            {page === "signup2" &&
              <Signup2 setPage={setPage}/>
            }
            {page === "signup3" &&
              <Signup3 setPage={setPage}/>
            }
          </div>
        </div>
        <div className="Song-control-container">
          <div className="First-control-icon">Prev</div>
          <div className="Control-icon">Play</div>
          <div className="Control-icon">Next</div>
          <div className="Song-control-start-time">
            0:00
          </div>
          <div className="Song-time-bar">
            
          </div>
          <div className="Song-control-end-time">
            X:XX
          </div>
          <div className="Control-icon">Cover Img
            
          </div>
          <div className="Song-info">
            <div className="Song-control-title">
              Song Name
            </div>
            <div className="Artist-control-title">
              Artist Name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;