import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Golden Gate Bridge in 2020"
                    views="3M Views"
                    timestamps="6 days ago"
                    channelImage="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
                    channel="San Francisco Tour"
                    image="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Golden-Gate-Bridge-cover-img.jpg"                
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamps="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg"
                    channel="SayedRahim Sadat"
                    image="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg"                
                />
                <VideoCard
                    title="Best and Happiest Couple in the World"
                    views="8M Views"
                    timestamps="5 weeks ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
                    channel="Be Happy"
                    image="https://xdesktopwallpapers.com/wp-content/uploads/2012/07/Artistic%20Couple%20Hugging%20On%20A%20Beach.jpg"                
                />
                <VideoCard
                    title="Awesome Beach Views in the SF"
                    views="1M Views"
                    timestamps="5 days ago"
                    channelImage="https://avatars0.githubusercontent.com/u/56288293?s=400&u=2022febaa8bf8f24e3401f5300cc2d062875884e&v=4"
                    channel="Great Views"
                    image="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"                
                />
                <VideoCard
                    title="Nice View of Land"
                    views="588K Views"
                    timestamps="4 days ago"
                    channelImage="https://lh3.googleusercontent.com/proxy/r2YF2wTpQgzTyqTFBL9PD4eAw9mW_UL52JcV3-Mc4JXA-EZQsbdQTH6i1CvYzQ3EE93yyH2p0oKgSiQJt96RskqoXJxYl85Wc4oiuS01h1Z6eDCK3AgcJZhRnb9LB27LVhvEapmxuOrefLo"
                    channel="Green View"
                    image="https://www.wallpaperflare.com/static/175/569/92/this-heaven-animal-livestock-green-field-wallpaper.jpg"                
                />
                <VideoCard
                    title="The Lovely of Night View from the Moon"
                    views="245K Views"
                    timestamps="1 month ago"
                    channelImage="https://previews.123rf.com/images/alexis84/alexis841404/alexis84140400557/27773925-planet-earth-and-blue-human-eye-elements-of-this-image-furnished-by-nasa-.jpg"
                    channel="Night Sky"
                    image="https://lh3.googleusercontent.com/proxy/ixO09fRtbiiV2_Eho2W-WNZva71fIMhqVctfeFCu_H_yUMk9ixfC5icmkhOvZ6GLrQYOD0wJp5QCm09U-7wZ9j1QNmyVw60b5-owIylKY5t7N6MpMmNTvvCB5GyhAlnasC8Jz1r8rOxBpjUoBorcYs_S"                
                />
                <VideoCard
                    title="Business Growth between 2010/2019"
                    views="2M Views"
                    timestamps="6 days ago"
                    channelImage="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    channel="Development"
                    image="https://goldmediakit.com/wp-content/uploads/2020/05/double-exposure-image-business-profit-growth_31965-3022.jpg"                
                />
                <VideoCard
                    title="Animals in Nature are Awesome"
                    views="864K Views"
                    timestamps="2 months ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&usqp=CAU"
                    channel="Animals Nature"
                    image="https://html5box.com/html5gallery/images/Swan_1024.jpg"                
                />
                <VideoCard
                    title="How Robots Developed in the Years of | 2010/2020"
                    views="8M Views"
                    timestamps="5 days ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU"
                    channel="Robots"
                    image="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"                
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;
