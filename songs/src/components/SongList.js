import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {//props中既有data: state,也有function: action creator
    const renderedList = props.songs.map((song) => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => { props.selectSong(song) }}>
                        Select
                    </button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        );
    })
    return (
        <div className="ui divided list">
            {renderedList}
        </div>
    );
}

const MapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(MapStateToProps, { selectSong: selectSong })(SongList); //connect first argument is a data(state and the second argument is an action creator)
//connnect接收两个参数，一个state,一个是所有的action creators。然后在component中如果调用了action creator然后创造了action.一旦有新出现的action，collect就会将这个action和对应的data传入到对应的reducer中去
//reducer接收到data 和action，就会执行action然后改变state。一旦state改变了，就会自动执行MapStateToProps方法