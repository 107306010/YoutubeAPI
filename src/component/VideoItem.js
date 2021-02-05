import React from 'react';

const VideoItem = ({ video,onVideoSelect }) => {
    return (
        <div className="list-group-item" onClick={()=>onVideoSelect(video)}>
            <div className="row">
                <div className="col-4 p-0">
                    <img src={video.snippet.thumbnails.medium.url} className="image"/>
                </div>
                            
                <div className="col-8">
                    <h5 className="title">{video.snippet.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default VideoItem