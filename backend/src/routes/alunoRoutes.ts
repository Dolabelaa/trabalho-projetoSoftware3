// =============================================================================
// src/routes/alunoRoutes.ts — Definição das Rotas para a entidade Aluno
//
// Cada rota aplica os middlewares de validação antes de chegar ao Controller,
// seguindo o fluxo: Middleware (validação) → Controller → Service → Prisma
// =============================================================================

import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import {
  validarCampos,
  validarFormatoCPF,
} from '../middlewares/validationMiddleware';

const router = Router();

// Campos obrigatórios para o cadastro de um Aluno
const camposObrigatoriosCadastro = [
  'email_login',
  'senha',
  'nome_completo',
  'cpf',
];

/**
 * POST /api/alunos — Cadastra um novo aluno
 * Middlewares: validação de campos obrigatórios → validação de formato CPF
 */
router.post(
  '/',
  validarCampos(camposObrigatoriosCadastro),
  validarFormatoCPF,
  AlunoController.criar.bind(AlunoController)
);

/**
 * GET /api/alunos — Lista todos os alunos
 */
router.get('/', AlunoController.listar.bind(AlunoController));

/**
 * GET /api/alunos/:id — Busca um aluno por ID
 */
router.get('/:id', AlunoController.buscarPorId.bind(AlunoController));

/**
 * PUT /api/alunos/:id — Atualiza um aluno
 * Validação de CPF apenas se o campo for enviado na atualização
 */
router.put(
  '/:id',
  validarFormatoCPF,
  AlunoController.atualizar.bind(AlunoController)
);

/**
 * DELETE /api/alunos/:id — Remove um aluno
 */
router.delete('/:id', AlunoController.deletar.bind(AlunoController));

export default router;
