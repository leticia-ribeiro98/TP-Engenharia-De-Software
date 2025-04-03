﻿# Trabalho Prático da Disciplina de Engenharia de Software
Departamento de Ciência da Computação – Universidade Federal de Minas Gerais (UFMG) Belo Horizonte – MG – Brazil 

## Objetivo e Principais Features

O objetivo deste projeto é desenvolver uma plataforma para a gestão de notas, tarefas e atividades das disciplinas da universidade. A plataforma permitirá que os alunos organizem seu desempenho acadêmico, visualizem suas notas graficamente e acompanhem prazos das provas e tarefas.

As principais features estão destacadas abaixo.

- **Gerenciamento de Disciplinas:** Adição, edição e remoção de disciplinas; Associação de notas, tarefas e atividades a cada disciplina; Organização por semestre ou período letivo.

- **Gerenciamento de Notas:**  Registro de notas por disciplina e visualização por meio de gráficos; Cálculo automático das estatísticas. 

- **Controle de Tarefas e Atividades:** Criação e organização de tarefas por disciplina; Definição de prazos e ordenação de acordo com o vencimento; Marcação de tarefas como concluídas.  

- **Dashboard Personalizado:** Resumo do desempenho acadêmico; Destaque para tarefas e atividades pendentes; Interface intuitiva e responsiva.  

- **Perfil dos Usuários:** Perfis individuais para estudantes; Possibilidade de personalização do design da plataforma.  

## Membros da Equipe e Responsabilidades
- **Layla Raissa Silva Pereira:** Responsável pelo frontend da plataforma, garantindo uma experiência visual responsiva para os estudantes.

- **Leticia Ribeiro Miranda:** Trabalha na implementação do backend do sistema e estrutura de dados. Também auxilia no UX design da plataforma.

- **Lucas Rafael Costa Santos:** Atua tanto no frontend, integrando a interface do usuário com a lógica do servidor e banco de dados.

- **Lucca Alvarenga de Magalhães Pinto:** Responsável pelo backend da plataforma, na criação e avaliação de testes para validar o funcionamento do sistema.

## Tecnologias Utilizadas  

Para o frontend da plataforma, será utilizado React.js combinando com **Tailwind CSS**. Ja no backend, optou-se pela linguagem **Python**, utilizando o framework **Django** ou **FastAPI**. Por fim, o banco de dados será estruturado com o MySQL. 

## Backlog do Produto

1. Como usuário, eu gostaria de me cadastrar na plataforma com login e senha, e ter a opção de alterar essas informações futuramente. 
2. Como usuário, eu gostaria de gerenciar disciplinas e suas respectivas atividades avaliativas, podendo criar, editar e excluir ambas. 
3. Como usuário, eu gostaria de adicionar, editar e deletar notas das tarefas.
4. Como usuário, eu gostaria de acompanhar minhas notas graficamente e visualizar estatísticas detalhadas sobre meu desempenho acadêmico.
5. Como usuário, eu gostaria de fazer simulações de notas.
6. Como usuário, eu gostaria de definir metas acadêmicas e acompanhar meu progresso.
7. Como usuário, eu gostaria de visualizar as tarefas mais próximas do vencimento.
8. Como usuário, eu gostaria de configurar meu perfil e personalizar o design da minha conta.
9. Como usuário, eu gostaria de agrupar disciplinas por semestres.
10. Como usuário, eu gostaria de receber notificações e lembretes, via email, sobre tarefas e prazos importantes.

## BackLog do Sprint

História #1: Como usuário, eu gostaria de me cadastrar na plataforma com login e senha, e ter a opção de alterar essas informações futuramente.
Tarefas e responsáveis:
- Integrar o banco de dados para armazenar usuários. [Lucas, Lucca]
- Implementar a API de cadastro de usuário. [Layla]
- Criar a interface de cadastro. [Layla, Leticia]
- Criar sistema de login e autenticação. [Lucca, Leticia]
- Implementar versão inicial da tela principal. [Lucas, Layla]
- Criar o design tela principal. [Leticia]
- Implementar funcionalidade de alteração de e-mail e senha. [Lucas]
- Criar a interface para alterar e-mail e senha. [Layla, Leticia]
- Testes e validações. [Lucca]

História #2: Como usuário, eu gostaria de gerenciar disciplinas e suas respectivas atividades avaliativas, podendo criar, editar e excluir ambas. 
Tarefas e responsáveis:
- Implementar o backend para gerenciar disciplinas e tarefas (criação, edição, exclusão, descrição e vencimento) [Lucas, Lucca]
- Criar e configurar as tabelas de disciplinas e tarefas no banco de dados [Leticia]
- Desenvolver o frontend para adicionar, editar e excluir disciplinas e tarefas [Layla]
- Criar e implementar o design das telas de disciplinas e tarefas [Leticia, Layla]
- Integrar o frontend com o backend para garantir o funcionamento das disciplinas e tarefas [Lucas, Lucca]
- Implementar confirmações antes de deletar disciplinas e tarefas [Lucca]
- Criar a funcionalidade de marcar tarefas como concluídas [Layla]
- Garantir que a lista de disciplinas e tarefas seja atualizada após alterações [Lucas]
- Testar todas as funcionalidades de disciplinas e tarefas (criação, edição, exclusão, descrição e vencimento) [Lucas, Lucca]

História #3: Como usuário, eu gostaria de adicionar, editar e deletar notas das tarefas.
Tarefas e responsáveis:
- Criar o design da tela de adição de notas [Leticia]
- Implementar o frontend de adição de notas [Layla]
- Criar tabela de notas de cada disciplina por usuário [Leticia]
- Implementar backend para adicionar e salvar notas [Lucca]
- Integrar frontend com API para adicionar notas [Lucas]
- Testar adição de notas [Layla]
- Criar o design da tela de edição de notas [Lucas]
- Implementar o frontend de edição de notas [Layla]
- Implementar backend para edição e exclusão de notas [Leticia]
- Implementar confirmação antes de deletar notas [Layla]
- Implementar a lógica de atualizar as notas após edição ou exclusão [Lucca]
- Testar edição e deleção de notas [Lucca]

História #4: Como usuário, eu gostaria de acompanhar minhas notas graficamente e visualizar estatísticas detalhadas sobre meu desempenho acadêmico.
Tarefas e responsáveis:
- Criar o design de exibição de notas na tela principal [Lucas]
- Implementar o frontend de exibição de notas na tela principal [Layla]
- Criar componente gráfico para exibir notas [Leticia]
- Implementar lógica para calcular média e evolução de notas [Leticia]
- Integrar gráfico com backend para exibir dados [Lucca]
- Testar a exibição correta dos gráficos com base nas notas [Lucca]
- Criar design da tela de estatísticas de desempenho [Leticia]
- Implementar o frontend das estatísticas [Layla]
- Implementar backend para cálculo e fornecimento de dados de desempenho [Lucas]
- Testar visualização de desempenho acadêmico [Lucca]
- Criar design da tela de metas acadêmicas Lucas]
- Implementar o frontend de metas [Layla]
- Criar tabela de metas de cada disciplina e semestre por usuário [Leticia]
- Implementar backend para salvar metas [Lucca]
- Adicionar funcionalidade de atualizar e acompanhar o progresso das metas [Lucca]
- Testar criação e acompanhamento de metas [Leticia]
