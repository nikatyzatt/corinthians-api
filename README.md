# corinthians-api | My first personal API 


Este projeto teve como base o curso da Alura >> [Curso Nodejs](https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb).
Foi criada uma API  com estilo arquitetural REST, usando o framework Express. A API foi conectada ao banco MongoDB.

Foram criadas 3 coleções, com o tema Futebol Brasileiro. 
À partir das rotas criadas em cada coleção, é possível adicionar Estados, times e cadastros de torcedores.
Para criar um time, é necessário informar um estado já criado, e para criar um cadastro de torcedor, é necessário informar um time já criado.

Times, estados e cadastros são únicos: não há como adicionar um estado/time com um nome já cadastrado, e não há como fazer um novo cadastro de torcedor usando um username já criado.

-----------------------------------------------------------------------------------------------------------------------------------------

### Criando rotas em coleções já existentes

Para adicionar novas rotas em uma das coleções existentes, adicione no arquivo _{nome da coleção}Controller.js_, que está dentro da pasta src/controllers.

Em seguida, adicione o caminho e método da rota em _{nome da coleção}Routes.js_, que está dentro da pasta src/routes.

Como exemplo, se quiséssemos criar uma nova request na coleção Register,teríamos alterações nos arquivos:

Na pasta src/controller
>registersController.js

Na pasta src/routes
>registersRoutes.js

### Adicionando novas coleções

1- Para criar uma nova coleção, primeiro crie o arquivo Schema com suas propriedades dentro da pasta src/schemas, seguindo o nome padrão do arquivo: _{nome}.js_.

2- Em seguida, crie um arquivo com as rotas dessa coleção dentro da pasta src/controllers, seguindo o nome padrão do arquivo: _{nome}Controller.js_.

3- Crie um arquivo dentro da pasta src/routes, seguindo o nome padrão: _{nome da coleção}Routes.js_. Adicione nesse arquivo as rotas com os caminhos e métodos.

4-Por fim, adicione sua coleção no arquivo index.js, que está dentro da pasta src/routes.

Como exemplo, se criássemos uma coleção para estádios/stadiums, teríamos os seguintes novos arquivos:

Dentro da pasta src/schema:
>Stadium.js

Dentro da pasta src/controllers:
>stadiumsController.js

Dentro da pasta src/routes
>stadiumsRoutes.js

Além disso, as rotas seriam importadas dentro do arquivo index.js na pasta src/routes:
> import stadiums from "./stadiumsRoutes.js";
