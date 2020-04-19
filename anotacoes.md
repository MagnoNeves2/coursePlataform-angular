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
