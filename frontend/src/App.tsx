// =============================================================================
// src/App.tsx — Roteamento principal da aplicação
// =============================================================================

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CadastroAluno from './components/CadastroAluno';
import CadastroEmpresa from './components/CadastroEmpresa';
import ListagemAlunos from './components/ListagemAlunos';
import ListagemEmpresas from './components/ListagemEmpresas';

// ---------------------------------------------------------------------------
// Barra de navegação superior
// ---------------------------------------------------------------------------
function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { para: '/',                  label: 'Início' },
    { para: '/cadastro-aluno',    label: 'Cadastro Aluno' },
    { para: '/cadastro-empresa',  label: 'Cadastro Empresa' },
    { para: '/alunos',            label: 'Alunos' },
    { para: '/empresas',          label: 'Empresas' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logotipo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <span className="text-xl">🪙</span>
          <span className="hidden sm:inline">Moeda Estudantil</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.para}
              to={link.para}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                pathname === link.para
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Componente raiz da aplicação
// ---------------------------------------------------------------------------
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
          <Route path="/alunos" element={<ListagemAlunos />} />
          <Route path="/empresas" element={<ListagemEmpresas />} />
          {/* Rota fallback */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <p className="text-6xl mb-4">🔍</p>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Página não encontrada</h2>
                <p className="text-slate-500 mb-6">A rota que você acessou não existe.</p>
                <Link to="/" className="btn-primary">Voltar ao Início</Link>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
