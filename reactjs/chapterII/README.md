## Modulo 1 -> Estrutura da aplicação

# Aula1: Introdução ao modulo

Descrição:
Introdução ao que veremos e estrutura ja pronta

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula2: Estrutura com create-react-app

-*- Bibliotecas -*-

- yarn create react-app --template typescript

Descrição:
  exportar arquivo sempre como export function ao invez de export default por questões de segurança e melhorias na hora de importar o componente

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula3: exportando assets do Figma

Descrição:
  Pegando icones e vendo como funciona o css e exportações dele
  invez de apenas atribuir a estilização ao componente, ele se torna o proprio componente

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula4: Instalando Styled Components

-*- Bibliotecas -*-
- yarn add styled-components
- yarn add @types/styled-components -D

Descrição:
  styled-components funciona como um css in js

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
# Aula5: Criando estilos globais

Descrição:
  Fontes trabalhadas em % para questoes de responsibilidade e tambem acessibilidade, trabalhe sempre com medidas em rem e %
  manter este padrao de @media fonts para todas aplicações˜
-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula6: Fontes do Google Fonts

Descrição:
  Alterando a fonte da aplicação, pegando uma do Google Fonts

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
## Modulo 2 -> Componentização

# Aula1: Componente: Header

Descrição:
  Adicionando CSS e Componente em tela, criando componente Header e sua estilização

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula2: Componente: Summary

Descrição:
  Adição de textos principais e estilizacão inicial do corpo da aplicação
  Correções em estilos globais e importação de fonte

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula3: Componente: Transaction Table

Descrição:
  Criação tabela de movimentações e suas estilizações

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --


## Modulo 3 -> Consumindo API

# Aula1: Criando front-end sem Back-end

Descrição:
   - MirageJS = Possibilita a criação de uma API fake para ambiente de desenvolvimento

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula2: Configurando MirageJS
  -*- Bibliotecas -*-
 yarn add mirageJS

Descrição:
  Configurando MirageJS para facilitar a integração apos a API real estar 
  pronta
  Emulando uma situação, mesmo em ambiente de desenvolvimento

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula3: Configurando Cliente do Axios
-*- Bibliotecas -*-
 yarn add axios
Descrição:
  conectando axios com o MirageJS
  criando base do axios para requisições

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --


