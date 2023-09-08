/* const src = 'https://coverr.co/videos/paragliding-over-muriwai-beach-9vamDDcnAf' */

const src ='../videos/food.mp4'

function Video (){
    return (<video width="150" height="225" controls>
    <source src={src} type="video/mp4"/>Sorry, your browser doesn't support videos.
</video>)}
export default Video;

