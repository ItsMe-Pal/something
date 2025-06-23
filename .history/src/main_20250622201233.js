(async()=>{

    if ("serviceWorker" in navigator)
        {
            navigator.serviceWorker.register("/sw.js")
            .then((reg)=> console.log('Service worker registered!' , reg))
            .catch(err => console.log(err))
        }
    
    
        const video = document.getElementById('video');
        $("body bg").append("<h1>Camera not recognized!</h1>")
        const status = await navigator.permissions.query({name: "camera"});
        status.addEventListener("change", (evt) => {
          // request again
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(handleStream)
            .catch(handleDeny =>{
        
            })
        }, { once: true });
})()
