## Modulo 1 -> Configurando a API

# Aula1: Estrutura do Projeto

-*- Bibliotecas -*-

- yarn add react
- yarn add react-dom


src -> todo codigo criado para aplicação, principalmente JS

public -> arquivo/assets, arquivos publicos, robots, etc

Descrição:
  Criando a estrutura basica das pastas

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

Descrição:
  Bibliotecas para transpilar o codigo para ser legivel pelos navegadores

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula3: Configurando WebPack

-*- Bibliotecas -*-

- yarn add webpack -D
- yarn add webpack-cli -D
- yarn add babel-loader -D

dec:
  facilitando a vida na hora de converter

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula4: Estrutura ReactJS

Descrição:
  A partir daqui o projeto ja esta ok para ser trabalho com react!

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula5: Servindo HTML Estatico

-*- Bibliotecas -*-
- yarn add html-webpack-plugin -D

Descrição:
  Melhorando legibilidade e facilidade com o webpack e o html

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula6: Webpack Dev Server

-*- Bibliotecas -*-
- yarn add webpack-dev-server -D

Descrição:
  Atualização em real time da aplicação sem precisar dar o comando

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula7: Utilizando source maps

Utilizado:
  eval-source-map - para Development
  source-map - para production

Descrição:
  Visualizar erros de forma mais claras

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula8: Ambiente dev e produção

-*- Bibliotecas -*-
yarn add cross-env -D

Descrição:
  diferenciando ambientes

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula9: Importando arquivos CSS

-*- Bibliotecas -*-
- yarn add style-loader -D
- yarn add css-loader -D

Descrição:
  Adicionando CSS aos arquivos React

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula10: Utilizando SASS

-*- Bibliotecas -*-
- yarn add sass-loader -D
- yarn add node-sass -D

Descrição:
  Ajuda no encadeamento de estilizações e facilitando-o

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
## Modulo 2 -> Conceitos Importantes

# Aula1: Primeiro Componente React

Descrição:
  Cada Função, cada arquivo separado para uma estrutura, é considerada um componenete.
  1 componente por arquivo

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula2: Propriedades no React


Descrição:
  3 conceitos mais importantes no React -> Componente | Propriedade | Estados


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula3: Estado do componente


Descrição:
  Estado: Monitora uma variavel para verificar se ela se mantem ou se altera
  funções react que começam com *use* são os seus *Hooks*

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula4: A imutabbilidade no React


Descrição:
  imutabilidade -> Valor nunca altera, sempre recebe um novo valor
   -> Copia valores atuais e adiciona os novos, não altera o antigo

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula5: Fast Refresh Webpack

-*- Bibliotecas -*-
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh


Descrição:
  FastRefresh configurado, Evita a perda de dados e reset nos estados de variaveis

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
## Modulo 3 -> Chamadas HTTP

# Aula1: Estilização da listagem


Descrição:
  Ajustes na estilização


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula2: Utilizando o useEffect


Descrição:


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula3: Listando repositórios

Descrição:


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
## Modulo 4 -> Usando TypeScript
# Aula1: 

-*- Bibliotecas -*-

Descrição:


  -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula2: 

-*- Bibliotecas -*-


Descrição:


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula3: 

-*- Bibliotecas -*-


Descrição:


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --