//カメラを映す
const video = document.getElementById("video")

video.width = 360;
video.height = 240;


alert("333");
//映像の設定
navigator.mediaDevices.getUserMedia({
    //映像あり
    video: {
        facingMode: {
        exact: 'environment',
        },
    },
    //音なし
    audio: false,
}).then(stream => {
    //streamですよー。多分ストリーミング再生のストリーミングと一緒
    video.srcObject = stream;
    video.onloadedmetadata = () => {
        video.play()
        _canvasUpdate()
    }
}).catch(() => {
    //エラーメッセージ
    console.log("err")
})

//canvas要素の作成
canvas = document.getElementById("canvas");
canvas.width = video.width;
canvas.height = video.height;

//コンテキストを取得（コンテキストとは？）
canvasCtx = canvas.getContext("2d");

//video要素の映像をcanvasに描画
function _canvasUpdate(){
    //ちなみに、drawImage（要素,x座標,y座標,解像度width,解像度height）
    canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
    //画像化
    const imageData = canvasCtx.getImageData(0, 0, canvas.width, canvas.height);
    //ライブラリのjsQRを使って読み取る
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
        //やったーQRコードが見つかったよー！
        alert(code.data);
        setTimeout(() => {_canvasUpdate()},1000);
    }
    else{
        setTimeout(() => {_canvasUpdate()},200);
    }
};