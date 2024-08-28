function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

document.getElementById('encriptar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const textoEncriptado = encriptarTexto(texto);
    document.getElementById('resultado').value = textoEncriptado;
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const textoDesencriptado = desencriptarTexto(texto);
    document.getElementById('resultado').value = textoDesencriptado;
});
