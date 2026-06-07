* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background: linear-gradient(45deg, #000000, #1a0000);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.contenedor {
    text-align: center;
    position: relative;
}

h1 {
    color: #ff4d6d;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 0 0 15px #ff4d6d;
    animation: latido 1.5s infinite;
}

.corazon {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    animation: flotar 3s ease-in-out infinite;
}

.mensaje {
    color: #ffd6e0;
    font-size: 1.3rem;
    margin-top: 2rem;
    text-shadow: 0 0 8px #ff4d6d;
}

audio {
    position: fixed;
    bottom: 20px;
    opacity: 0.7;
}

@keyframes latido {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes flotar {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.particula {
    position: absolute;
    background: #ff4d6d;
    border-radius: 50%;
    animation: subir 4s linear infinite;
    opacity: 0;
}

@keyframes subir {
    0% { transform: translateY(300px); opacity: 1; }
    100% { transform: translateY(-50px); opacity: 0; }
  }
