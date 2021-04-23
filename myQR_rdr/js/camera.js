var dis = "environment";



// Video element
const video = document.querySelector( "#video" );

// On Streaming
function startStreamingVideo(){
if( navigator.mediaDevices.getUserMedia ){
    navigator.mediaDevices.getUserMedia( { 
            video: { facingMode: dis } 
        } )
        .then( ( stream ) => {
            video.srcObject = stream;
        } );
    }
}
startStreamingVideo();

//反転
function flipCamera(){
    if(dis = "environment"){
        var dis = "user";
    }
    else{
        var dis = "environment";
    }
    startStreamingVideo();
}