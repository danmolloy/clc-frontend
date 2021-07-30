import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'

export const Artists = () => {
  const [artistName, setArtistName] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('https://raw.githubusercontent.com/danmolloy/clc-frontend/main/public/data.json')
    .then(res => res.json())
    .then(myJson => {
      for (let i = 0; i < myJson.length; i++) {
        setArtistName([...artistName, myJson[i]['artist']])
      }
    })
  }

  const formattedArtists = artistName.map(i => 
    <Link to={`/artists/${artistName}`} key={artistName}>{artistName}</Link>
    )



  return (
    <div className="main">
      <h2>Artists</h2>
      {formattedArtists}
    </div>
  )
}