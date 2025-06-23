import * as components from "./components.js"
 
(async()=>{
 
     if ("serviceWorker" in navigator)
        {
            navigator.serviceWorker.register("/sw.js")
            .then((reg)=> console.log('Service worker registered!' , reg))
            .catch(err => console.log(err))
        }

        const videoElement = document.querySelector(".video-main #video");
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request access to the video stream
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    // Attach the stream to the video element
                    videoElement.srcObject = stream;
                })
                .catch(function(error) {
                    // Handle errors, e.g., user denied permission
                    console.error('Error accessing camera:', error);

                    $(videoElement).after(error)
                });
        }  else {
            $(videoElement).after(components.popUps.error("Error accessing camera"))
        }
})()
