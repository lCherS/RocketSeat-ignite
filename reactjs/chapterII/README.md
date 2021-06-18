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


## Modulo 4 -> Modal e Forms

# Aula1: Configurando modal de criação
  -*- Bibliotecas -*-
  yarn add react-modal


Descrição:
  como introduzir modal atravez do react-modal
  Compartilhamento de informações entre componentes pai e filho
  alterando estado do pai, pela propriedade de um filho

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula2: Componente: NewTransactionModal
  -*- Bibliotecas -*-

Descrição:
  Criando Componente separado para o modal


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula3: Estrutura do formulario
-*- Bibliotecas -*-

Descrição:
  Atribuindo formatação e corpo ao modal

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula4: Estilizando modal
-*- Bibliotecas -*-

Descrição:
  Mais algumas estilizações dos botões e campos no modal

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula5: Criando botões de Tipo
  -*- Bibliotecas -*-
 yarn add polished

Descrição:
  Criando botões entrada/saida para definir tipo
  estilizando o botão

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula6: Funcionamento dos botões
-*- Bibliotecas -*-


Descrição:
  adicionando novas propriedades atravez do styled-components ao botão
  estilizando botao de acordo com propriedade existente

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula7: cores dos botões
-*- Bibliotecas -*-

Descrição:

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula8: Salvando dados do form
  -*- Bibliotecas -*-


Descrição:


-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula9: Inserindo transações na API
-*- Bibliotecas -*-


Descrição:

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula10: Listando transações e seeds
-*- Bibliotecas -*-


Descrição:

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --

# Aula11: Formatando valores
-*- Bibliotecas -*-


Descrição:

-- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * --
