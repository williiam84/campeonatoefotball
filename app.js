
   const link = "https://bit.ly/4uiOGAS";
   const carregamentoBackground = document.getElementById("back_animation");
   const animationLoad = document.getElementById("animation_load");
   
   //FUNÇÃO CARREGAMENTO ANIMAÇÃO
   function mostrarCarregamento() {  
      carregamentoBackground.style.display = "flex";
      animationLoad.style.display = "block";
      
      setTimeout(() => {
        carregamentoBackground.style.display = "none";
        animationLoad.style.display = "none";
      }, 3000);
    }
    //FIM FUNÇÃO CARREGAMENTO ANIMAÇÃO
    //ALERT INICIAL
   const video = document.getElementById("camera");
    const canvas = document.getElementById("canvas");
    const foto = document.getElementById("foto");

    //FUNÇÃO PARA INICIAR A CÂMERA
    async function iniciarCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment"
          },
          audio: false
        });

        video.srcObject = stream;

      } catch (erro) {
        alert("Erro ao acessar câmera: " + erro);
      }
    }

    iniciarCamera();

    //FUNÇÃO PARA TIRAR FOTO
    document.getElementById("tirarFoto").addEventListener("click", () => {

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(video, 0, 0);

      foto.src = canvas.toDataURL("image/png");

      const btnConfirm = document.getElementById("Confirm");
      btnConfirm.style.display = "block";
    });

    //FUNÇÃO PARA INICIAR O FORMULÁRIO
    document.getElementById("init").addEventListener("click", () => {
        mostrarCarregamento();
      //document.querySelector(".camera_div").style.display = "flex";
      document.querySelector(".fomulario").style.display = "flex";
      const btnInit = document.getElementById("init");
      btnInit.style.display = "none";
    });

    //FUNÇÃO PARA ENVIAR O FORMULÁRIO
    const btnEnviar = document.getElementById("enviar_formulario");
    btnEnviar.addEventListener("click", ()=>{
        const nome = document.getElementById("nome").value;
        const selecao = document.getElementById("selecao").value;
        if(nome === "" || selecao === ""){
            alert("Por favor, preencha todos os campos do formulário.");
            return;
        }
        mostrarCarregamento();
        document.querySelector(".camera_div").style.display = "flex";
        document.querySelector(".fomulario").style.display = "none";
    })

    //FUNÇÃO PARA CONFIRMAR FOTO E ABRIR LINK
    function confirmarFoto(){
      alert("Foto confirmada com sucesso!");
      alert("Na sua proxima etapa, você precisará habilitar o acesso à sua camera novamente para tirar uma foto do seu rosto. Por favor, permita o acesso quando solicitado.");
      //window.open("https://bit.ly/4tD1u41", "_blank");

      setTimeout(() =>{
        window.open(link, "_blank");
      })
    }
     const btnConfirm = document.getElementById("Confirm");
    btnConfirm.addEventListener("click", confirmarFoto);

    //FUNÇÃO PARA FECHAR O ALERT DE BOAS VINDAS
    function Ok(){
      const welcomeDiv = document.getElementById("popupwelcome");
      welcomeDiv.style.display = "none";
      alert("Habilitar o acesso à câmera é essencial para tirar a foto. Por favor, permita o acesso quando solicitado.");
    }

    const btnOk = document.getElementById("btnconfirm");
    btnOk.addEventListener("click", Ok);

   