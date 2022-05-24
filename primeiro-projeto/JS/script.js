let minhaImagem = document.querySelector("img");

minhaImagem.onclick = function (){
    let meuSrc = minhaImagem.getAttribute("Src");
    if (meuSrc === "IMG/cafe.png"){
        minhaImagem.setAttribute ("src", "IMG/doces-tiramissu.jpg");
    }else{minhaImagem.setAttribute ("src", "IMG/cafe.png");

    }
}