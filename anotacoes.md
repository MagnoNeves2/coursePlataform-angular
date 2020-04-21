# Anotações sobre Angular e suas utilização na prática!

### Teoria

---


![imagem para teoria](https://live.mrf.io/statics/i/ps/amenteemaravilhosa.com.br/wp-content/uploads/2019/01/teoria-da-carga-cognitiva-john-sweller.jpg)



>O que é o **Angular**?
>É uma plataforma e um framework para construção da interface de aplicações usando HTML, CSS e JavaScript(através do TypeScript que é transpilado para JS).


---

A estrutura básica do Angular é dividido em:

- **Componentes** ⤵️ 

~~~
São itens de página completo (ou seja, um arquivo HTML, um arquivo CSS e um arquivo TypeScript), criado automáticamente pelo Angular. E são criados a partir de linhas de comando pela palavra reservada ng
~~~

- **Templates**
- **Diretivas**
- **Metadata**
- **Roteamento**
- **Data Binding**
- **Serviços**
- **Injeção Dependência**

---

### Prática
![imagem para prática](https://cio.com.br/wp-content/uploads/2019/11/por-que-a-linguagem-rust-esta-em-ascensao.jpg)

**Criando um arquivo**

Para **criar** um arquivo angular, basta entrar com a seguinte linha de comando no teminal:

➡️ *ng new* [nome do arquivo a ser criado]

~~~
aparecerá a seguinte pergunta: Would you like to add Angular rounting? Sempre responda sim [y], pois isso irá criar as rotas na sua aplicação. E em seguida perguntará: Which stylesheet format would you like to use? responda CSS, pois essa é a a folha de estilo que utilizamos.
~~~

---

**Entendendo o arquivo gerado**

Após o sistema processar e gerar o arquivo, aparececá uma pasta com o nome que foi definido e nela irá conter diveras outras pastas e arquivos, em especial, a src. Basicamente, é nela que toda a plicação será rodada e configurada.
Tanto o arquivo **index.html** e o **styles.css** que lá se encontram são globais, ou seja, tudo o que for colocado lá dentro será passado para toda a aplicação.
No **index.html** existe uma *tag*:

~~~
<body>
    <app-root><app-root>
</body>
~~~

Que não existe no HTML, e sim foi criada pelo Angular pois todo <em>**novo**</em> componente do Angular recebe o nome de uma *tag*, ou seja, esse \<app-root>\</app-root> é um componente.

**Subindo o servidor local da aplicação**

Para **subir/ativar** o servidor da aplicação, basta rodar as seguintes linhas de comando:
<em>Obs: Lembrando sempre de, no terminal, estar dentro do arquivo criado</em>

~~~
ng serve -o
~~~

**Criando um componente**

Para **criar** um componente, basta rodar as seguintes linhas de comando:

~~~
ng generate component [nome do componente]
~~~
<em>Dica: O comando curto é ➡ ng g c [nome do componente].</em>

**Instalando e configurando o Bootstrap no projeto**

Para **instalar** o Bootstrap no projeto basta rodarmos as seguintes linhas de códigos:

~~~
npm i bootstrap@4.1.1
~~~

Ao fazermos uso do Bootstrap, é **necessário** que façamos a instalação de outras aplicações que o auxiliam, até o momento. São elas, **Popper** e **Jquery**, e para instalarmos basta rodarmos as seguintes linhas de código:

~~~
npm i jquery@latest --save
npm i popper.js --save
~~~
<em>Obs: O termo (--save) significa que estamos pedindo para que salvem essa aplicação no projeto</em>

Após a instalação, é necessário a aconfiguração para a execução do Bootstrap no projeto. Para isso, basta entrar no arquivo **angular.json**, ir até a propriedade *styles* e acrescentar o caminho da página de estilo do Bootstrap, que no caso é ➡️ "./node_modules/bootstrap/dist/css/bootstrap.min.css". Em seguida, encaminhar-se até a propriedade *scripts* e acrescentar os caminhos das aplicações que auxiliam na execução do Bootstrap, e que no caso seriam:

➡️"./node_modules/jquery/dist/jquery.js"

➡️"./node_modules/bootstrap/dist/js/bootstrap.js"

➡️"./node_modules/popper.js/dist/umd/popper.min.js"

**Instalando e configurando o Font-Awesome**

O Font-Awesome é uma biblioteca de icones, e para **instalar** basta rodar as seguintes linhas de códigos:

~~~
ng add @fortawesome/angular-fontawesome
~~~

Após instalar, caso seja preciso fazer uso dos ícones, basta **importá-los** no arquivo TypeScript do componente e depois exportá-los. Em seguida, no HTML é necessário que seja feito uma interpolação para que se possa usar os ícones, nesse caso através da tag icon e fazendo uso de props. exemplo:

><fa-icon [icon]="*variavel que contêm a importação do ícone*">\</fa-icon>

<em>Para exportá-los é necessário atribuí-los a uma variavel, por exemplo: faInstagram = faInstagram</em>

**Funcionamento dos componentes criados**

Para que os componentes realmente sejam mostrados e executados em tela, é necessário que sejam informados no arquivo **app.component.html**, já que ele é o nosso HMTL global e é através dele que executaremos nossa aplicação. Isso serve para o *CSS* também, já que que o arquivo **app.component.css** se refere ao CSS global da aplicação.

