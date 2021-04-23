const FACING_MODE_ENVIRONMENT = "environment";
const FACING_MODE_USER = "user";
let gCurrentCameraFacingMode = FACING_MODE_ENVIRONMENT;

//ビデオ要素とりまーす
const video = document.querySelector( "#video" );
video.width = 500;
video.height = 500;

//カメラ映像をストリーミングしまーす
function startStreamingVideo(){
if( navigator.mediaDevices.getUserMedia ){
    navigator.mediaDevices.getUserMedia( { 
            video: { facingMode: gCurrentCameraFacingMode } 
        } )
        .then( ( stream ) => {
            video.srcObject = stream;
        } );
    }
}
startStreamingVideo();

//反転
function flipCamera(){
    if( gCurrentCameraFacingMode === FACING_MODE_ENVIRONMENT ){
        gCurrentCameraFacingMode = FACING_MODE_USER;
    }else{
        gCurrentCameraFacingMode = FACING_MODE_ENVIRONMENT;
    }
    startStreamingVideo();
}