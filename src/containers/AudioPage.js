import React from 'react';
import AudioCard from '../components/AudioCard'
import {audio} from '../components/Audio'

const AudioPage = () => {
    
    return (
        <>
            <h1>Audio</h1>
            <h3>Browse songs I've had the pleasure of engineering!</h3><br/>
            <div className="audio-cards">
                { audio.map(a => <AudioCard key={ a.id } { ...a } />) }
            </div><br/><br/>
        </>
    )
}

export default AudioPage