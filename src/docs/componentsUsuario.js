//TAG
/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas a usuários
 */

//GET
/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       500:
 *         description: Erro interno
 */

//PUT
/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               tipo:
 *                 type: string
 *                 example: "Aluno, Professor, Pesquisador ou Admin"
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos ou não fornecidos
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno
 */

//DELETE
/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     description: > 
 *         ⚠️ Esta rota exige autenticação via JWT. Primeiro registre-se e faça login para obter seu token.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno
 */