# Jogo pong com javascript

## Como jogar 

-Utilizando as setas " Para cima" (para subir) e "Para baixo" (para descer)
-Multiplayer: utilizando as teclas "W" (para subir) e "S" (para descer)

## Tipos

- Contra o computador 
- Multiplayer

## Contra o computador 
-Va ao file sketch.js
-Retire o comentario da linha 106:  velocidadeYR2 = yBolinha -yRaquete2 - comprimento / 2 - 30; yRaquete2 += velocidadeYR2 
-deixe como comentario o texto da linha 109-115 :
if (keyIsDown (87)){
    yRaquete2 -= 10;
  }
   if (keyIsDown (83)){
    yRaquete2 += 10;
  } 
}

