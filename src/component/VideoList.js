import React from 'react';
import VideoItem from './VideoItem';

//ES5 
const VideoList = ({ videos,onVideoSelect }) => {

    const rederedList = videos.map(video => {
        return <VideoItem video={video} onVideoSelect={ onVideoSelect }/>
    })

    return (
        <div className="list-group list-group-flush">
            { rederedList }
        </div>
    )
}

export default VideoList