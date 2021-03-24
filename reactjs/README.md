# Aula1: Estrutura do Projeto

-*- Bibliotecas -*-

- yarn add react
- yarn add react-dom


src -> todo codigo criado para aplicação, principalmente JS

public -> arquivo/assets, arquivos publicos, robots, etc

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula2: Configurando Babel

-*- Bibliotecas -*-

- yarn add @babel/core -D
- yarn add @babel/cli -D
- yarn add @babel/preset-env -D
- yarn add @babel/preset-react -D

comandos:
  yarn babel src/index.js --out-file dist/bundle.js  
  -> Gera o codigo convertido para o navegador entender

  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula3: Configurando WebPack

-*- Bibliotecas -*-

- yarn add webpack -D
- yarn add webpack-cli -D
- yarn add babel-loader -D

  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula4: Estrutura ReactJS

A partir daqui o projeto ja esta ok para ser trabalho com react!

  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula5: Servindo HTML Estatico

-*- Bibliotecas -*-
- yarn add html-webpack-plugin -D

Melhorando legibilidade e facilidade com o webpack e o html

  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula6: Webpack Dev Server

-*- Bibliotecas -*-
- yarn add webpack-dev-server -D

Desc:
  Atualização em real time da aplicação sem precisar dar o comando

  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula7: Utilizando source maps

Utilizado:
  eval-source-map - para Develipment

Visualizar erros de forma mais claras
  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula8: Ambiente dev e produção

-*- Bibliotecas -*-
yarn add cross-env -D

diferenciando ambientes
  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula9: Importando arquivos CSS

  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula10: Utilizando SASS