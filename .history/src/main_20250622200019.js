if ("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register("/sw.js")
        .then((reg)=> console.log('Service worker registered!' , reg))
        .catch(err => console.log(err))
    }


    const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => console.error("فشل فتح الكاميرا:", err));
