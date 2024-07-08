import React from "react"


const SongInfo = () => {

    return (
        <div>
            <div className="Song-info-container">
                <div className="Song-left-container">
                    <div className="Song-info-player">
                        <div className="Play-button">Play</div>
                        <div>
                            <div className="Song-info-title">
                                Song Title
                            </div>
                            <div className="Artist-info-name">
                                Artist Name
                            </div>
                        </div>
                    </div>
                    <div className="Song-bar-container">
                        <div className="Artist-info-name">
                            0:00
                        </div>
                        <div className="Song-bar"></div>
                        <div className="Artist-info-name">
                            X:XX
                        </div>
                    </div>
                </div>
                <div className="Song-right-container">
                    <div className="Song-cover-prev">Cover Img</div>
                </div>
            </div>

            <div className="Song-lower-container">
                <div className="Song-left-lower-container">
                    <div className="Post-comment-contatiner">
                        <input className="Write-comment" placeholder="Write a comment"></input>
                        <div className="Control-icon">Send</div>
                    </div>
                    <div className="Comment-section">
                        <div className="Comment-container">
                            <div className="Comment-icon">PFP

                            </div>
                            <div className="Comment-content">
                                <div className="Comment-timestamp">
                                    @0:32
                                </div>
                                <div className="Comment-text">
                                    Comment 1
                                </div>
                            </div>
                        </div>
                        <div className="Comment-container">
                            <div className="Comment-icon">PFP

                            </div>
                            <div className="Comment-content">
                                <div className="Comment-timestamp">
                                    @1:46
                                </div>
                                <div className="Comment-text">
                                    Comment 2
                                </div>
                            </div>
                        </div>
                        <div className="Comment-container">
                            <div className="Comment-icon">PFP

                            </div>
                            <div className="Comment-content">
                                <div className="Comment-timestamp">
                                    @2:14
                                </div>
                                <div className="Comment-text">
                                    Comment 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Song-right-lower-container">
                    <div className="Mini-song-card">
                        <div className="Mini-song-cover-prev">Cover Img</div>
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Song 1
                            </div>
                            <div className="Mini-artist-name">
                                Artist 1
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-cover-prev">Cover Img</div>
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Song 2
                            </div>
                            <div className="Mini-artist-name">
                                Artist 2
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-cover-prev">Cover Img</div>
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Song 3
                            </div>
                            <div className="Mini-artist-name">
                                Artist 3
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-cover-prev">Cover Img</div>
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Song 4
                            </div>
                            <div className="Mini-artist-name">
                                Artist 4
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-cover-prev">Cover Img</div>
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Song 5
                            </div>
                            <div className="Mini-artist-name">
                                Artist 5
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default SongInfo