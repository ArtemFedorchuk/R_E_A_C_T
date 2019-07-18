import React from 'react';
import m from './../Music/Music.module.css';

const Music = (props) => {
    return(
        <div className={m.music}>
            <h1>Music</h1>
            <audio src="https://z1.fm/song/24522784" controls></audio><br/>
            <audio src="https://sefon.me/artist/6632-zivert/" controls></audio><br/>
            <audio src="https://sefon.me/artist/6632-zivert/" controls></audio><br/>
            <audio src="https://sefon.me/artist/6632-zivert/" controls></audio>
        </div>
    );
}

export default Music;