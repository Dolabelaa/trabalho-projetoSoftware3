// =============================================================================
// src/routes/empresaRoutes.ts — Definição das Rotas para EmpresaParceira
// =============================================================================

import { Router } from 'express';
import EmpresaController from '../controllers/EmpresaController';
import {
  validarCampos,
  validarFormatoCNPJ,
} from '../middlewares/validationMiddleware';

const router = Router();

// Campos obrigatórios para o cadastro de uma Empresa
const camposObrigatoriosCadastro = [
  'email_login',
  'senha',
  'razao_social',
  'cnpj',
];

/**
 * POST /api/empresas — Cadastra uma nova empresa parceira
 */
router.post(
  '/',
  validarCampos(camposObrigatoriosCadastro),
  validarFormatoCNPJ,
  EmpresaController.criar.bind(EmpresaController)
);

/**
 * GET /api/empresas — Lista todas as empresas parceiras
 */
router.get('/', EmpresaController.listar.bind(EmpresaController));

/**
 * GET /api/empresas/:id — Busca uma empresa por ID
 */
router.get('/:id', EmpresaController.buscarPorId.bind(EmpresaController));

/**
 * PUT /api/empresas/:id — Atualiza uma empresa
 */
router.put(
  '/:id',
  validarFormatoCNPJ,
  EmpresaController.atualizar.bind(EmpresaController)
);

/**
 * DELETE /api/empresas/:id — Remove uma empresa
 */
router.delete('/:id', EmpresaController.deletar.bind(EmpresaController));

export default router;
