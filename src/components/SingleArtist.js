import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const SingleArtist = () => {
  const [albums, setAlbums] = useState(null)
  const [members, setMembers] = useState(null)
  const { artistName } = useParams();

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    fetch('https://raw.githubusercontent.com/danmolloy/clc-frontend/main/public/data.json')
    .then(res => res.json())
    .then(myJson => {
      for (let i = 0; i < myJson.length; i ++) {
        if (myJson[i]["artist"] === artistName) {
          setAlbums(myJson[i]["albums"])
          setMembers(myJson[i]["members"])
        }
      }
    })
  }

  const renderedAlbums = () => {
    return albums.map(i => 
      <p key={i[1]}>
        {`${i[1]} (${i[0]})`}
      </p>
      )
  }
  

  const renderedMembers = () => {
    let aAcuteRegEx = /&aacute;/
    while (aAcuteRegEx.test(members)) {
      let valIndex = members.match(aAcuteRegEx).valIndex
      let arrMembers = members.split('')
      arrMembers.splice(valIndex, 8, 'á')
      setMembers(arrMembers.join(''))
    }
  }


  return (
    <div className="main">
      <h2>{artistName}</h2>
      <h3>Albums:</h3>
      <p>{albums !== null ? renderedAlbums() : null}</p>
      <h3>Members:</h3>
      <p>{members}</p>
    </div>
  )
}
