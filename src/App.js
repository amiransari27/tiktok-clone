import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot)=>{
      const videos = snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setVideos(videos)
    })
  }, [videos])

  return (
    <div className="app">
      <div className="app__videos">

        {
          videos.map(({ url, channel, description, song, likes, messages, shares }) =>
            (
              <Video
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            )

          )
        }


      </div>

    </div>
  );
}

export default App;
