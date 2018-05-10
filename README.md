# itelios-frontend-challenge

## Sobre mim

  - Rodrigo Vallades [rodrigo.vallades@gmail.com]
  - GitHub: https://github.com/rodrigovallades
  - Linkedin: http://lnkd.in/p9wz2A

## Tecnologias, técnicas e boas práticas

- [x] ES6
- [x] Webpack + Babel
- [x] Código modular (ES6 modules)
- [x] Pré-processamento SASS
- [x] BEM CSS
- [x] Mobile-first
- [x] Nenhuma framework! Somente JS vanilla
- [x] Única biblioteca é o carousel Glide.js (npm package - dependency free - pure JS)

## Comentários (IMPORTANTE!)

- As imagens fornecidas no 'products.json' não funcionam. Coloquei um ícone representando imagens quebradas.
- A única diferença em relação ao layout proposto é a quantidade de bullets abaixo do carousel. Isso porque o biblioteca Glide.js não suporta paginação; apenas é possível fazer 1 bullet para cada item do carousel. Entretrando, escolhi ela por ser responsível e suportar breakpoints. Tem sempre um trade-off em cada escolha que fazemos. O ponto é: modificar a biblioteca para suportar paginação estaria fora do escopo deste teste.

## Getting started

### Pré-requisitos

Node.js 6+

### Instalação
```
npm install
```

### Desenvolvimento (abre servidor em localhost:3000)
```
npm start
```

### Deploy (minificação, bundling, etc)
Fará o output do build na pasta dist. Porém é necessário hospedar em alguma servidor, caso contrário o HTML não acha o 'products.json'.
```
npm run build
```
