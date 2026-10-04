// Para adicionar ou editar um projeto, altere os objetos abaixo.
// "img" é o caminho da captura de tela; "repo" fica vazio quando o repositório é privado.
const GH = "https://github.com/romaomiguel/";

const DESTAQUES = [
  {
    nome: "CuidaPet",
    curto: "Marketplace de petsitters: busca, match, agendamento e chat.",
    tipo: "Projeto pessoal", aberto: true,
    resumo: "Plataforma que conecta tutores de pets a petsitters, com busca por filtros, match ideal, agendamento, chat e avaliações.",
    pontos: [
      "API em NestJS com autenticação JWT, refresh token em cookie httpOnly, validação de entrada e documentação Swagger.",
      "PostgreSQL com Prisma e migrations, e painel administrativo para aprovar petsitters e gerenciar usuários.",
      "Frontend em React e Vite com Tailwind, React Query e mapas com Leaflet."
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "React", "Vite", "Tailwind", "Docker"],
    img: "assets/projetos/cuidapet.jpg",
    alt: "Tela inicial do CuidaPet com campo de busca de petsitters",
    quadro: "Tela inicial, com dados de demonstração",
    repo: GH + "CuidaPet"
  },
  {
    nome: "MyGastronomy",
    curto: "Plataforma de restaurante com login, pratos e pedidos.",
    tipo: "Projeto pessoal", aberto: true,
    resumo: "Plataforma de restaurante com cadastro e login de usuários, cardápio de pratos e pedidos.",
    pontos: [
      "API REST em Node.js e Express com autenticação por Passport e JWT.",
      "Senhas com PBKDF2 e salt por usuário; MongoDB para usuários, pratos e pedidos.",
      "Frontend em React com Material UI, ainda em evolução."
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "Material UI", "JWT"],
    img: "assets/projetos/mygastronomy.jpg",
    alt: "Página inicial do MyGastronomy com ilustrações de pratos",
    quadro: "Página inicial",
    repo: GH + "MyGastronomy"
  },
  {
    nome: "AgroITR",
    curto: "Auditoria do ITR e geração da declaração .DBK.",
    tipo: "Uso real, versão anonimizada", aberto: true,
    resumo: "Gestão de clientes rurais e auditoria do ITR: confronta o valor declarado com a Tabela VTN oficial e gera a declaração .DBK pronta para o programa da Receita.",
    pontos: [
      "Importa XML da declaração, .DBK/.DEC, ADA, planilha legada e CAR, mostrando as mudanças pendentes antes de aplicar.",
      "Motor de auditoria próprio para o confronto VTN, com relatórios em PDF e exportação da retificadora.",
      "Next.js com Server Actions, Drizzle e PostgreSQL, testes com Vitest e CI no GitHub Actions."
    ],
    stack: ["Next.js", "React", "TypeScript", "Drizzle", "PostgreSQL", "Tailwind", "Vitest", "Docker"],
    img: "assets/projetos/agroitr.jpg",
    alt: "Painel do AgroITR com cartões de clientes e status Regular, Divergente e Pendente",
    quadro: "Painel de clientes, com dados fictícios",
    repo: GH + "Robo-AgroITR"
  },
  {
    nome: "Onboarding",
    curto: "Controle de onboarding de clientes com CNPJ automático.",
    tipo: "Uso real, versão anonimizada", aberto: true,
    resumo: "Sistema web para controlar o onboarding de novos clientes: cadastro a partir do CNPJ, quadro societário, etapas por responsável, painel de acompanhamento e PDF do cadastro.",
    pontos: [
      "Consulta de CNPJ em cascata por APIs, com uma extensão de navegador (Manifest V3) como último recurso.",
      "Grupos e permissões granulares, sessões no banco e log de exclusões para auditoria.",
      "Fastify e PostgreSQL com advisory lock; frontend React, TypeScript e Vite; deploy em Kubernetes com duas réplicas."
    ],
    stack: ["Fastify", "PostgreSQL", "React", "TypeScript", "Vite", "Tailwind", "Docker", "Kubernetes"],
    img: "assets/projetos/onboarding.jpg",
    alt: "Lista de clientes do Onboarding com barras de conclusão e status",
    quadro: "Lista de clientes, com dados fictícios",
    repo: GH + "Onboarding"
  },
  {
    nome: "Robô ICMS",
    curto: "XMLs de NF-e viram planilha de apuração de ICMS.",
    tipo: "Uso real, versão anonimizada", aberto: true,
    resumo: "Recebe os XMLs de NF-e de entrada de um cliente e devolve uma planilha Excel de apuração de ICMS com as colunas e fórmulas prontas.",
    pontos: [
      "Extrai item a item NCM, CEST, CFOP, CST e valores, e preenche uma planilha-modelo com ICMS-ST, MVA, DIFAL e convênios.",
      "Upload de até 50 MB por envio e histórico de processamentos em PostgreSQL.",
      "Flask com openpyxl, Gunicorn, Docker e Kubernetes."
    ],
    stack: ["Python", "Flask", "openpyxl", "PostgreSQL", "Docker", "Kubernetes"],
    img: "assets/projetos/robo-icms.jpg",
    alt: "Tela de upload de XMLs do Processador de NFe",
    quadro: "Envio de XMLs, com arquivos fictícios",
    repo: GH + "Robo-ICMS"
  },
  {
    nome: "Robô SEFAZ",
    curto: "Emissão em lote de guias DAR no portal da SEFAZ-MT.",
    tipo: "Uso real, versão anonimizada", aberto: true,
    resumo: "Aplicação web e robô que calculam e emitem em lote guias DAR (DIFAL e ICMS-ST) no portal da SEFAZ-MT.",
    pontos: [
      "Importa dados colados de relatórios de NF-e, detecta o código de receita e calcula atraso, correção monetária e juros.",
      "Selenium com Firefox headless em tarefas assíncronas por thread, com progresso acompanhado na interface.",
      "Backend em Flask, interface em Tailwind e deploy com Docker."
    ],
    stack: ["Python", "Flask", "Selenium", "PostgreSQL", "Tailwind", "Docker"],
    img: "assets/projetos/robo-sefaz.jpg",
    alt: "Tela de cadastro de notas do Robô SEFAZ com códigos 2817 e 1317 detectados",
    quadro: "Cadastro de notas, com dados fictícios",
    repo: GH + "Robo-Sefaz"
  }
];

const MAIS = [
  { n: "Robô Cartões", t: "Converte relatórios de adquirentes (.xlsx) em TXT de lançamentos contábeis, com perfis editáveis em painel.", s: "Flask · PostgreSQL · pandas", aberto: true, links: [["Ver código", GH + "Robo-Cartao"]] },
  { n: "Robô Faturas", t: "Lê faturas de cartão em PDF e gera o TXT para importação no sistema contábil, com cadastro de empresas pela tela.", s: "Flask · PostgreSQL · PDF", aberto: false, links: [] },
  { n: "Robô Entrega", t: "Monitora uma pasta, classifica arquivos e envia ao Tareffa com Playwright. Painel web com fila e eleição de líder entre réplicas.", s: "Python · Playwright · Kubernetes", aberto: false, links: [] },
  { n: "Intranet", t: "Intranet corporativa com sistemas, links, comunicados sanitizados e navegação de arquivos do Google Drive.", s: "Flask · React 19 · TypeScript", aberto: false, links: [] },
  { n: "Caixinha", t: "Fechamento fiscal mensal com conferência, revisão em dois níveis e preenchimento automático de PDF.", s: "Flask · PostgreSQL · pypdf", aberto: false, links: [] },
  { n: "Programa da Qualidade", t: "Autoavaliação de maturidade em gestão, com pontuação automática, gráficos e relatório em PDF.", s: "React · Fastify · TypeScript", aberto: false, links: [] },
  { n: "Reforma Simples", t: "Simulador de CBS/IBS para o Simples Nacional, com três cenários, projeção 2027–2033 e PDF para o cliente.", s: "Node.js · Express · Firebird", aberto: false, links: [] },
  { n: "ZapCRM", t: "CRM de WhatsApp sobre a Evolution API, com dashboard, conversas em tempo real e funil.", s: "Next.js · Supabase · PostgreSQL", aberto: true, links: [["Ver código", GH + "Dashboard-Whats"]] }
];

const TECH = [
  ["Back-end", "APIs e automação", ["Python", "Flask", "Node.js", "Express", "Fastify", "NestJS", "APIs REST", "JWT", "Selenium", "Playwright"]],
  ["Front-end", "interfaces", ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "HTML5", "CSS3"]],
  ["Dados", "modelagem e consulta", ["PostgreSQL", "SQL", "Prisma", "Drizzle ORM", "MongoDB", "Firebird"]],
  ["Entrega e qualidade", "do commit ao cluster", ["Git e GitHub", "GitHub Actions", "Docker", "Kubernetes", "Argo CD", "Coolify", "Ansible", "pytest", "Vitest"]],
  ["Monitoramento e suporte", "operação diária", ["Grafana", "Headlamp", "Tactical RMM", "GLPI", "Análise de logs", "Resposta a incidentes", "N1/N2"]],
  ["Servidores e redes", "infraestrutura", ["Windows Server", "Linux", "DHCP", "DNS", "LDAP", "SSH", "Modelo OSI", "MTU"]]
];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
};

/* ---------- vitrine de projetos ---------- */
const DURACAO = 7000; // ms por projeto
const rail = document.getElementById("rail");
const stage = document.getElementById("stage");
const playBtn = document.getElementById("playpause");
const contador = document.getElementById("contador");
const reduzido = matchMedia("(prefers-reduced-motion: reduce)").matches;

let atual = 0;
let tocando = !reduzido;
let pausadoPorUsuario = reduzido;
let hover = false;
let visivel = false;
let inicio = 0;
let decorrido = 0;
let raf = 0;

const itens = DESTAQUES.map((p, i) => {
  const b = el("button", "item");
  b.type = "button";
  b.id = "tab-" + i;
  b.setAttribute("role", "tab");
  b.setAttribute("aria-controls", "stage");
  b.append(el("span", "n", p.nome), el("span", "t", p.curto));
  const tags = el("span", "tags");
  p.stack.slice(0, 3).forEach((t) => tags.append(el("span", "", t)));
  b.append(tags, el("span", "prog"));
  b.addEventListener("click", () => { ir(i, true); });
  rail.append(b);
  return b;
});

function pintar(i) {
  const p = DESTAQUES[i];
  const img = document.getElementById("stage-img");
  img.src = p.img;
  img.alt = p.alt;
  document.getElementById("frame-url").textContent = p.quadro;
  document.getElementById("stage-title").textContent = p.nome;
  const tipo = document.getElementById("stage-tipo");
  tipo.textContent = p.tipo;
  tipo.className = "badge" + (p.tipo.startsWith("Uso real") ? " real" : "");
  document.getElementById("stage-resumo").textContent = p.resumo;
  const pts = document.getElementById("stage-pontos");
  pts.replaceChildren(...p.pontos.map((t) => el("li", "", t)));
  document.getElementById("stage-stack").replaceChildren(...p.stack.map((t) => el("li", "", t)));
  const links = document.getElementById("stage-links");
  links.replaceChildren(el("span", "state" + (p.aberto ? " open" : ""), p.aberto ? "Código aberto" : "Código privado"));
  if (p.aberto) {
    const a = el("a", "", "Ver código no GitHub ↗");
    a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
    links.append(a);
  }
  stage.setAttribute("aria-labelledby", "tab-" + i);
  stage.classList.remove("swap");
  void stage.offsetWidth;
  if (!reduzido) stage.classList.add("swap");
}

function ir(i, manual) {
  atual = (i + DESTAQUES.length) % DESTAQUES.length;
  itens.forEach((b, k) => {
    const sel = k === atual;
    b.setAttribute("aria-selected", String(sel));
    b.tabIndex = sel ? 0 : -1;
    b.style.setProperty("--p", "0");
  });
  contador.textContent = atual + 1 + " / " + DESTAQUES.length;
  pintar(atual);
  // mantém o item ativo visível dentro da lista, sem rolar a página
  const b = itens[atual];
  if (rail.scrollWidth > rail.clientWidth) rail.scrollTo({ left: b.offsetLeft - 16, behavior: reduzido ? "auto" : "smooth" });
  decorrido = 0;
  inicio = performance.now();
  if (manual && !reduzido) { /* clique do usuário reinicia a contagem, mas não pausa */ }
}

function deveTocar() { return tocando && !pausadoPorUsuario && !hover && visivel && !document.hidden; }

function tick(agora) {
  raf = requestAnimationFrame(tick);
  if (!deveTocar()) { inicio = agora - decorrido; return; }
  decorrido = agora - inicio;
  itens[atual].style.setProperty("--p", Math.min(decorrido / DURACAO, 1).toFixed(3));
  if (decorrido >= DURACAO) ir(atual + 1);
}

function atualizarBotao() {
  const rodando = !pausadoPorUsuario;
  playBtn.textContent = rodando ? "❚❚ Pausar" : "▶ Retomar";
  playBtn.setAttribute("aria-label", rodando ? "Pausar a troca automática" : "Retomar a troca automática");
}

playBtn.addEventListener("click", () => {
  pausadoPorUsuario = !pausadoPorUsuario;
  tocando = true;
  atualizarBotao();
});

const showcase = document.getElementById("showcase");
showcase.addEventListener("mouseenter", () => { hover = true; });
showcase.addEventListener("mouseleave", () => { hover = false; });
showcase.addEventListener("focusin", () => { hover = true; });
showcase.addEventListener("focusout", () => { hover = false; });

rail.addEventListener("keydown", (e) => {
  const prox = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
  if (prox) { e.preventDefault(); ir(atual + prox, true); itens[atual].focus(); }
  if (e.key === "Home") { e.preventDefault(); ir(0, true); itens[0].focus(); }
  if (e.key === "End") { e.preventDefault(); ir(DESTAQUES.length - 1, true); itens[DESTAQUES.length - 1].focus(); }
});

if ("IntersectionObserver" in window) {
  new IntersectionObserver((es) => { visivel = es[0].isIntersecting; }, { threshold: 0.25 }).observe(showcase);
} else { visivel = true; }

ir(0);
atualizarBotao();
raf = requestAnimationFrame(tick);

/* ---------- mais projetos ---------- */
const more = document.getElementById("more");
MAIS.forEach((m) => {
  const li = el("li");
  li.append(el("h4", "", m.n), el("p", "", m.t), el("p", "stk", m.s));
  const links = el("p", "links");
  links.append(el("span", "state" + (m.aberto ? " open" : ""), m.aberto ? "Código aberto" : "Código privado"));
  if (m.aberto && m.links.length) {
    m.links.forEach(([rotulo, url]) => {
      const a = el("a", "", rotulo + " ↗");
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      links.append(a);
    });
  }
  li.append(links);
  more.append(li);
});

/* ---------- tecnologias ---------- */
const tech = document.getElementById("tech");
TECH.forEach(([titulo, sub, itensT]) => {
  const g = el("div", "group");
  const h = el("h3", "", titulo);
  h.append(el("small", "", sub));
  const ul = el("ul", "chips");
  itensT.forEach((t) => ul.append(el("li", "", t)));
  g.append(h, ul);
  tech.append(g);
});

/* ---------- tema, menu, contato ---------- */
const root = document.documentElement;
try { const s = localStorage.getItem("tema"); if (s) root.dataset.theme = s; } catch (e) { /* sem armazenamento */ }
document.getElementById("tema").addEventListener("click", () => {
  const escuro = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  const novo = escuro ? "light" : "dark";
  root.dataset.theme = novo;
  try { localStorage.setItem("tema", novo); } catch (e) { /* ignora */ }
});

const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  const aberto = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(aberto));
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

const copiar = document.getElementById("copiar");
copiar.addEventListener("click", async () => {
  const alvo = document.getElementById("email");
  try { await navigator.clipboard.writeText(alvo.textContent); copiar.textContent = "Copiado"; }
  catch (e) {
    const r = document.createRange(); r.selectNodeContents(alvo);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r); copiar.textContent = "Selecionado, copie com Ctrl+C";
  }
  setTimeout(() => { copiar.textContent = "Copiar e-mail"; }, 2200);
});

document.getElementById("ano").textContent = new Date().getFullYear();
