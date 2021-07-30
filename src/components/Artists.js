import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'

export const Artists = () => {
  const [artistName, setArtistName] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const artistsArr = []
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(myJson => {
      for (let i = 0; i < myJson.length; i++) {
        artistsArr.push(myJson[i]["artist"])
      }
      setArtistName(artistsArr)
    })
  }

  const formattedArtists = artistName.map(i => 
    <Link to={`/artists/${i}`} key={i} className="artist-link">
      {i}
      </Link>
    )


  return (
    <div className="main">
      <h2>Artists</h2>
      {formattedArtists}
    </div>
  )
}