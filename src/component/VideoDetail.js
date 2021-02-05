import React from 'react';

const VideoDetail = ({ video }) => {
    //no results 
    if (!video) {
        return <div>Loading...</div>
    }

    const src = `https://www.youtube.com/embed/${video.id.videoId}`
    
    return (
        <div className="h-100 m-3">
            <iframe title="video-player" src={src} className="w-100 h-50"></iframe>
            <div className="card">
                <div className="card-body">
                    <div className="fw-bold card-title">{video.snippet.title}</div>
                    <p className="description">{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail