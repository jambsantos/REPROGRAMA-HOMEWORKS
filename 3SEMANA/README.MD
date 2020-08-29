 # Exercício da Semana 3

## Instruções

Antes de começar vamos baixar o readline-sync e criar o package.json

```npm init -y``` para inicializar o package.json

```npm install readline-sync``` para baixar o readline-sync

Crie um arquivo `calculadora-de-media.js`
Dentro dele, crie um programinha que vai receber 6 notas,
calcular a média e dizer
se a aluna foi aprovada, reprovada ou ficou em recuperação.


regras:
* para ser __aprovada__ a média tem que ser maior ou igual 7
* para ser __reprovada__ a média tem que ser menor que 5
* para ir para __recuperação__ a média tem que ser maior ou igual a 5 e menor que 7

Para pegar inputs no terminal precisamos usar o
'readline-sync'

no topo do arquivo do seu código:
````
const input = require("readline-sync");
````

- finalizado o trabalho suba o código:

```
  - git add
  - git commit -m "o que eu fiz"
  - git push origin nome-da-sua-branch
```

- Abra a pull request e coloque o link  no google classroom