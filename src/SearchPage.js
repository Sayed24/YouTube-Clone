import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import './SearchPage.css';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuj4K5b155xlwsAepRLLixOd5vQpf5ZH12qQ&usqp=CAU"
                channel="Beauty of Nature"
                verified
                subs="862K"
                noOfVideos={460}
                description="Nature is defined as the natural Earth and the things on it, or the essence of a person or thing. The trees, forests, birds and animals are all an example of nature. If someone is inherently evil, this is an example of a person who has an evil nature."
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="589K"
                description="Do you like nature, if yes you are in the right place and you are going to like and enjoy our channel."
                timestamp="57 seconds ago"
                channel="Beauty of nature"
                title="let Enjoy nature and watch this video"
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*"
            />
            <VideoRow
                views="1.4M"
                subs="589K"
                description="Do you like nature, if yes you are in the right place and you are going to like and enjoy our channel."
                timestamp="57 seconds ago"
                channel="Beauty of nature"
                title="let Enjoy nature and watch this video"
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*"
            />
        </div>
    );
}

export default SearchPage;
