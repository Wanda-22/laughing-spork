Webcam.attach( '#camera' );

camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function cap() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="pic" src="'+data_uri+'"/>';
    } );
 }

 console.log("ml5 version is",ml5.version);
 x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Kh2psxMX2/model.json',modelloaded);
function modelloaded() {
    console.log("all the models are loaded");
}

function identify() {
    img=document.getElementById('pic');
    x.classify(img,ans);
}
function ans(error,result) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById('objn').innerHTML=result[0].label;
        document.getElementById('acc').innerHTML=Math.floor(result[0].confidence*100)+"%";
    }
}

