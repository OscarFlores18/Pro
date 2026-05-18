<h2>Login Facial</h2>

<video id="video" width="300" autoplay></video>
<br>
<button onclick="capturar()">Ingresar</button>

<canvas id="canvas" style="display:none;"></canvas>

<script>
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    document.getElementById("video").srcObject = stream;
});

function capturar() {
    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    let imagen = canvas.toDataURL("image/png");

    fetch("loginFacial", {
        method: "POST",
        body: imagen
    })
    .then(res => res.text())
    .then(data => {
        if(data === "ok"){
            window.location.href = "Persona/Personahome.jsp";
        } else {
            alert("No reconocido");
        }
    });
}
</script>