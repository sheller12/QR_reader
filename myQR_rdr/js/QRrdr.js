//canvas要素の作成
canvas = document.getElementById("canvas");

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

_canvasUpdate();