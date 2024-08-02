// Obtener el elemento canvas y su contexto de dibujo
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Dibujar un rectángulo
ctx.fillStyle = '#0000FF'; // Color de relleno
ctx.fillRect(20, 20, 150, 100); // (x, y, width, height)

// Dibujar un círculo
ctx.beginPath();
ctx.arc(240, 160, 50, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
ctx.fillStyle = '#00FF00'; // Color de relleno
ctx.fill();

// Dibujar una línea
ctx.beginPath();
ctx.moveTo(300, 300); // Punto de inicio
ctx.lineTo(400, 400); // Punto final
ctx.strokeStyle = '#FF0000'; // Color de la línea
ctx.stroke();