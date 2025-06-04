//TAG
/**
 * @swagger
 * tags:
 *   name: Empréstimos
 *   description: Gerenciamento de empréstimos de livros
 */

//GET
/**
 * @swagger
 * /emprestimos:
 *   get:
 *     summary: Lista todos os empréstimos
 *     tags: [Empréstimos]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     responses:
 *       200:
 *         description: Lista de empréstimos
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       500:
 *         description: Erro interno
 */

//POST
/**
 * @swagger
 * /emprestimos:
 *   post:
 *     summary: Registra um novo empréstimo
 *     tags: [Empréstimos]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: string
 *                 example: "3"
 *               id_livro:
 *                 type: string
 *                 example: "1"
 *     responses:
 *       201:
 *         description: Empréstimo registrado com sucesso
 *       400:
 *         description: formato id inválido ou nenhum foi inserido
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       500:
 *         description: Erro interno
 */

//POST
/**
 * @swagger
 * /emprestimos/devolucoes:
 *   post:
 *     summary: Registra uma devolução de empréstimo
 *     tags: [Empréstimos]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_emprestimo:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Devolução registrada com sucesso
 *       400:
 *         description: Livro já foi devolvido
 *       404:
 *         description: Empréstimo não encontrado
 *       500:
 *         description: Erro interno
 */

//PUT
/**
 * @swagger
 * /emprestimos/{id}:
 *   put:
 *     summary: Atualiza dados de um empréstimo 
 *     tags: [Empréstimos]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data_devolucao:
 *                 type: string
 *                 example: "YYYY-MM-DD"
 *               status:
 *                  type: string
 *                  example: "Em Andamento, Atrasado ou Concluído"
 *     responses:
 *       200:
 *         description: Empréstimo atualizado com sucesso
 *       400:
 *         description: Dados inválidos ou id não existe
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       500:
 *         description: Erro interno
 */

//DELETE
/**
 * @swagger
 * /emprestimos/{id}:
 *   delete:
 *     summary: Remove um empréstimo
 *     tags: [Empréstimos]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Empréstimo removido com sucesso
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       404:
 *         description: Empréstimo não encontrado
 *       500:
 *         description: Erro interno
 */
