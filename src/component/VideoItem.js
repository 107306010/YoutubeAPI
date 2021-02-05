import React from 'react';

const VideoItem = ({ video,onVideoSelect }) => {
    return (
        <div className="list-group-item" onClick={()=>onVideoSelect(video)}>
            <div className="row">
                <div className="col-5 p-0 d-flex align-items-center">
                    <img src={video.snippet.thumbnails.medium.url}
                        className="image"
                        alt={video.snippet.title}
                    />
                </div>
                            
                <div className="col-7 d-flex align-items-center">
                    <div className="text">{video.snippet.title}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoItem