import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YTapi from './Youtube';

class App extends React.Component{

    state = { videos: [], selectedVideo:null }
    
    onTermSubmit = async (term) => {
        // console.log(term)
        const res = await YTapi.get('/search', {
            params: {
                q: term
            }
        })
        console.log(res)
        this.setState({videos:res.data.items})
    }

    onVideoSelect = video => {
        console.log(video)
        this.setState({selectedVideo:video})
    }

    render() {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App