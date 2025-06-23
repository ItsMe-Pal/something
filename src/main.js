import * as components from "./components.js"
 
(async()=>{
 
     if ("serviceWorker" in navigator)
        {
            navigator.serviceWorker.register("/sw.js")
            .then((reg)=> console.log('Service worker registered!' , reg))
            .catch(err => console.log(err))
        }

        const videoElement = document.querySelector(".video-main #video");
        navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment" } // للكاميرا الخلفية
            // أو video: { facingMode: "user" } للكاميرا الأمامية
        })
        .then(function(stream) {
            videoElement.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing camera:', error);
            $(videoElement).after(components.popUps.error("Error accessing camera"));
        });
})()
