import React from "react"

const Home = ({ setPage, isFilterOpen }) => {

    return (
            <div style={{ height: isFilterOpen ? '420px' : '480px', overflow: isFilterOpen ? 'auto' : 'none'}} className="Home-nav">
              <div className="Title">
                For You
              </div>
              <div className="Nav-card-section">
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img
                    
                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img

                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img

                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img

                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img

                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img

                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
                  <div onClick={() => setPage("song-info")} className="Nav-card">
                    <div className="Nav-card-img">Cover Img

                    </div>
                    <div className="Song-title">
                      Song
                    </div>
                    <div className="Artist-title">
                      Artist
                    </div>
                  </div>
              </div>

              <div className="Title">
                Popular Artists
              </div>
              <div className="Nav-card-section">
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
                <div onClick={() => setPage("song-info")} className="Nav-card">
                  <div className="Nav-card-img">Cover Img

                  </div>
                  <div className="Artist-title">
                    Artist
                  </div>
                </div>
              </div>
            </div>
    );
}

export default Home

