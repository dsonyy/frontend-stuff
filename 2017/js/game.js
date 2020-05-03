"use strict";

function runGame() {
     let g = { ctx: null, points: 0, lastUpdate: 0, frames: 1, playerX: 5, playerY: 10, bulletX: 5, bulletY: 10, aliens: [] };
     let logo = document.getElementById("logo");
     logo.innerHTML = "<canvas id='game' width='50' height='50'></canvas>";
     logo.onclick = null;
     let canvas = document.getElementById("game");
     g.ctx = canvas.getContext("2d");
     document.onmousemove = (e) => {g.playerY = Math.round(e.clientY / 6) % 50};
     document.onclick = (e) => {g.bulletX = 5; g.bulletY = g.playerY;};
     window.requestAnimationFrame((e) => {updateGame(e, g)});
}

function closeGame() {
     document.onmousemove = null;
     document.onclick = null;
     let logo = document.getElementById("logo");
     logo.innerHTML = "";
     logo.onclick = runGame;
}

function updateGame(t, g) {
     console.log(g.aliens);
     if (t >= g.lastUpdate + 10) {
          g.lastUpdate = t;

          g.ctx.fillStyle = "#000";
          g.ctx.fillRect(0, 0, 50, 50);

          g.bulletX += 2;
          g.ctx.fillStyle = "#fff";
          g.ctx.fillRect(g.bulletX, g.bulletY, 5, 1);
          
          if (g.frames % 90 == 0 || Math.random() > 0.99) {
               g.aliens.push({y:5 + Math.floor(40 * Math.random()), x:50})
          }
          for (let i=0; i < g.aliens.length; i++) {
               if (g.bulletX >= g.aliens[i].x && g.bulletX < g.aliens[i].x + 8 && 
                   g.bulletY >= g.aliens[i].y && g.bulletY < g.aliens[i].y + 8) {
                    g.aliens.splice(i, 1);
                    g.bulletX = 100;
                    g.points += 100;
                    continue;
               }
               if (g.aliens[i].x <= 0) {
                    document.getElementById("title").innerHTML = "Game over: " + g.points;
                    g.frames++;
                    closeGame()
                    return;
               }
               g.aliens[i].x -= 0.75;
               g.ctx.fillRect(g.aliens[i].x, g.aliens[i].y, 8, 8);
          }

          g.ctx.beginPath();
          g.ctx.moveTo(g.playerX-5, g.playerY-5);
          g.ctx.lineTo(g.playerX+5, g.playerY);
          g.ctx.lineTo(g.playerX-5, g.playerY+5);
          g.ctx.fill();

          document.getElementById("title").innerHTML = g.points;
          g.frames++;
          if (g.frames % 30 == 0) g.points++;
     }
     window.requestAnimationFrame((e) => {updateGame(e, g)});
}
