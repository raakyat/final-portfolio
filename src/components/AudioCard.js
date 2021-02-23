import React from 'react'
import parse from 'html-react-parser';

const AudioCard = (props) => {

  const { link, name, recorded, mixed, mastered } = props
  
  return (
    <>
    <div className="audio-card">
      {parse(link)}
      <h2>
        { name }
      </h2>
      <div className="stats-header">
        <h3>
          Recorded
        </h3>
        <h3>
          Mixed
        </h3>
        <h3>
          Mastered
        </h3>
      </div>
      <div className="audio-stats">
        <p>
          { recorded }
        </p>
        <p>
          { mixed }
        </p>
        <p>
          { mastered }
        </p>
      </div>
    </div>
    </>
  )
}

export default AudioCard
