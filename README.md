# Landing Page Leadster

## Características de Desenvolvimento
Como solicitado a usabilidade do Nextjs, optei por usar a instalação usando o Page Router ao inves do App Router por ser uma versão mais estavel e também auxiliar bastante no uso de meta tags para melhorar o uso do SEO na página, justamente por ser uma Landing Page de vendas.

## Estilização
A pagina poderia ser desenvolvida usando puro CSS feito a mão sem uso de frameworks CSS. Mas assim que vi a imagem do layout, me deu a ideia de utilizar o tailwind e assim mostrar o conhecimento em cima desse framerwok.

## Dificuldades Encontradas

Encontrei um pouco de dificuldade só na parte de paginação, precisei utilizar o React Pagination e ler a documentação para compreender mais. Mas conseguir fazer.

## Notas de Desenvolvimento

Houveram itens que decidir adicionar ao desenvolvimento dessa LP, segue abaxio: 

1. Utilizando essa nova versão do next, ele disponibiliza uma rota para api que se encontra em /pages/api.
Ali dentro, nao da pra chamar um arquivo json direto e para isso cria um pequeno codigo em js para funcionar como um server backend.

Utilizei isso apenas pois fiz o json com os dados dos videos de forma local e segura, o que mudararia completamente a chamada se fosse um api via link.

2. O player de video utilizei o ReactPlayer e utilizei um link do youtube do canal da Leadster. Por ser api externa do youtube coloquei uma config la dentro pra rodar via localhost:3000 mas pode ser retirada. Só coloquei pra subir um warning no console log. Acredito que o video original da exibção no site venha de forma interna.
Mas vindo do youtube , ja fica certinho!

## Faltou algo?

Para fechar o desenvolvimento em dois dias e nao se prolongar muito, acabei deixando de lado a pesquisa dos videos por data de pulicação. Isso acabou ficando de fora.

## Extras

Poderia ter adcionando algumas animações utilizando o animate css, mas optei por deixar mais fiel e estatico. Unica coisa que adcionei foi um toogle para poder alterar o tema de light para dark.

## Como rodar na sua máquina

Baixe os arquivos e instale as dependecias

```bash
npm install
```

Em seguida execute a visualização da página

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

