Este sistema é um mural de recados com limite de 150 caracteres. Tem como principais tecnologias ReactJs com hooks e NodeJs. <br/>
Este projeto tem como destaque a utilização do hook useContext para compartilhamento de dados de login do usuário entre os componentes. <br/>
Dessa forma é possível que cada comentário tenha a identificação de cada usuário.<br/> 
O Firebase foi utilizado como backend da aplicação, auxiliando com o sistema de login e armazenamento de comentários. <br/>

O projeto pode ser acessado pelo link a seguir: https://comentakiprojeto.web.app/.<br/>
Para acesso no modo de desenvolvimento, execute npm start no diretório raiz do projeto.<br/>
Temos abaixo a tela inicial do sistema: <br/><br/>
<img src="src/image/home.png" width="80%"/><br/><br/>

Após clicar no botão "Entrar", o usuário é direcionado para a tela de login: <br/><br/>
<img src="src/image/tela_login.png" width="60%"/><br/><br/>
Para teste, acesse o usuário a seguir: <br/><br/>
Email: rodrigo@gmail.com <br/>
Senha: abc123 <br/><br/>

Ao acessar a opção "Criar Conta", o usuário deverá criar seu acesso pela tela a seguir:<br/><br/>
<img src="src/image/criarUser.png" width="40%"/><br/><br/>

O campo para comentar só fica disponível após fazer login: <br/><br/>
<img src="src/image/comentar.png" width="80%"/> <br/><br/>

Um botão para excluir o comentário ficará disponível somente no comentário feito pelo respectivo usuário que comentou. No exemplo abaixo, o Rodrigo está logado e somente em seu comentário está disponível o botão para excluir. <br/><br/>
<img src="src/image/excluir.png" width="40%"/> <br/><br/>

Segue a versão responsiva da aplicação:<br/><br/>
<img src="src/image/responsivo.png" width="20%"/><br/><br/>

