// =============================================================================
// src/services/api.ts — Camada de comunicação com o Back-end
//
// Centraliza a configuração do Axios e expõe funções tipadas para cada
// endpoint da API. Isso evita URLs espalhadas pelos componentes.
// =============================================================================

import axios from 'axios';

// Instância do Axios com a URL base da API.
// Em desenvolvimento, o proxy do Vite redireciona /api → http://localhost:3333
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos
});

// ---------------------------------------------------------------------------
// Tipos de resposta da API
// ---------------------------------------------------------------------------

export interface ApiResponse<T = unknown> {
  sucesso: boolean;
  mensagem: string;
  dados?: T;
  erros?: string[];
}

// ---------------------------------------------------------------------------
// DTOs de envio ao back-end
// ---------------------------------------------------------------------------

export interface CadastrarAlunoPayload {
  email_login: string;
  senha: string;
  nome_completo: string;
  cpf: string;
  rg?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  id_instituicao?: number;
  id_curso?: number;
}

export interface CadastrarEmpresaPayload {
  email_login: string;
  senha: string;
  razao_social: string;
  nome_fantasia?: string;
  cnpj: string;
  contato_nome?: string;
}

// ---------------------------------------------------------------------------
// Endpoints de Aluno
// ---------------------------------------------------------------------------

export const alunoService = {
  /** POST /api/alunos — Cadastra um novo aluno */
  cadastrar: (payload: CadastrarAlunoPayload) =>
    api.post<ApiResponse>('/alunos', payload),

  /** GET /api/alunos — Lista todos os alunos */
  listar: () => api.get<ApiResponse>('/alunos'),

  /** GET /api/alunos/:id — Busca aluno por ID */
  buscarPorId: (id: number) => api.get<ApiResponse>(`/alunos/${id}`),

  /** PUT /api/alunos/:id — Atualiza aluno */
  atualizar: (id: number, payload: Partial<CadastrarAlunoPayload>) =>
    api.put<ApiResponse>(`/alunos/${id}`, payload),

  /** DELETE /api/alunos/:id — Remove aluno */
  deletar: (id: number) => api.delete<ApiResponse>(`/alunos/${id}`),
};

// ---------------------------------------------------------------------------
// Endpoints de Empresa Parceira
// ---------------------------------------------------------------------------

export const empresaService = {
  /** POST /api/empresas — Cadastra uma nova empresa */
  cadastrar: (payload: CadastrarEmpresaPayload) =>
    api.post<ApiResponse>('/empresas', payload),

  /** GET /api/empresas — Lista todas as empresas */
  listar: () => api.get<ApiResponse>('/empresas'),

  /** GET /api/empresas/:id — Busca empresa por ID */
  buscarPorId: (id: number) => api.get<ApiResponse>(`/empresas/${id}`),

  /** PUT /api/empresas/:id — Atualiza empresa */
  atualizar: (id: number, payload: Partial<CadastrarEmpresaPayload>) =>
    api.put<ApiResponse>(`/empresas/${id}`, payload),

  /** DELETE /api/empresas/:id — Remove empresa */
  deletar: (id: number) => api.delete<ApiResponse>(`/empresas/${id}`),
};

export default api;
