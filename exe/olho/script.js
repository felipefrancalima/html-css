document.addEventListener('mousemove', (e) => {
    const eye = document.querySelector('.eye');
    const eyeball = document.querySelector('.eyeball');
    
    // Obtém a posição do mouse dentro do olho
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    // Calcula o ângulo do olho com base na posição do mouse
    const angle = Math.atan2(e.pageY - eyeCenterY, e.pageX - eyeCenterX);
    
    // Calcula a posição da pupila
    const maxDistance = eyeRect.width / 4; // Distância máxima que a pupila pode se mover
    const mouseXFromCenter = e.pageX - eyeCenterX;
    const mouseYFromCenter = e.pageY - eyeCenterY;
    const distance = Math.min(Math.sqrt(mouseXFromCenter ** 2 + mouseYFromCenter ** 2), maxDistance);
    
    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;
    
    // Aplica a transformação para mover a pupila
    eyeball.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});
