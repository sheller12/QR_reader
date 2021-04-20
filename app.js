//QR読み取り機
function qrParse(video){
    const canvas = new OffscreenCanvas(240, 320);
    const render = canvas.getContext("2d");

    return new Promise(function(res){
        const loop = setInterval(function(){
            render.drawImage(video, 0, 0, canvas.width, canvas.height);

            const img = render.getImageData(0, 0, canvas.width, canvas.height);
            const result = jsQR(img.data, img.width, img.height);

            if(result){
                clearInterval(loop);
                return res(result.data);
            }
        }, 100);
    });
}