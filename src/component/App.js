import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';
require('dotenv').config();

class App extends React.Component{

    state = { videos: [], selectedVideo: null }
    
    componentDidMount() {
        //default search
        this.onTermSubmit("PUI");
    }
    
    onTermSubmit = async (term) => {
        // console.log(term)
        const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: process.env.REACT_APP_KEY,
                q: term,
            }
        })
        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        })
    }

    onVideoSelect = video => {
        //console.log(video)
        this.setState({selectedVideo:video})
    }

    render() {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="card mt-3 shadow-sm">
                    <div className="row">
                        <div className="col-7">
                            <VideoDetail video={ this.state.selectedVideo }/>
                        </div>
                        <div className="col-5">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default App