//カメラを映す
const video = document.getElementById("video")

video.width = 360;
video.height = 240;
video.autoplay = true;

navigator.mediaDevices.getUserMedia({
    //映像あり
    video: true,
    //音なし
    audio: false,
}).then(stream => {
    //streamですよー。多分ストリーミング再生のストリーミングと一緒
    video.srcObject = stream;
}).catch(err => {
    //エラーメッセージ
    console.log(err)
})
//https://reffect.co.jp/html/javascript-webcamera
//https://qiita.com/chelcat3/items/02c77b55d080d770530a


//canvas要素の作成
canvas = document.getElementById("canvas");
canvas.width = video.width;
canvas.height = video.height;

//コンテキストを取得（コンテキストとは？）
canvasCtx = canvas.getContext("2d");

//video要素の映像をcanvasに描画
_canvasUpdate();

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
    }
    else{
        setTimeout(() => {_canvasUpdate()},200);z
    }
};