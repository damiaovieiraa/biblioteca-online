//TAG
/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Operações relacionadas a livros
 */

//GET
/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       500:
 *         description: Erro interno
 */

//POST
/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Adiciona um novo livro
 *     tags: [Livros]
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
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               editora:
 *                 type: string
 *               ano_publicacao:
 *                 type: integer
 *                 example: 1989
 *               isbn: 
 *                 type: string
 *               quantidade_disponivel:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro criado
 *       400:
 *         description: Dados inválidos ou não fornecidos
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       500:
 *         description: Erro interno
 */

//PUT
/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Adiciona um novo livro
 *     tags: [Livros]
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
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               editora:
 *                 type: string
 *               ano_publicacao:
 *                 type: integer
 *                 example: 1989
 *               isbn: 
 *                 type: string
 *               quantidade_disponivel:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro atualizado com sucesso
 *       400:
 *         description: Dados inválidos ou não fornecidos
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro interno
 */

//DELETE
/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Remove um livro
 *     tags: [Livros]
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
 *         description: Livro removido com sucesso
 *       401:
 *         description: Token não fornecido, inválido ou expirado
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro interno
 */