import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Globe, 
  User, 
  Briefcase, 
  GraduationCap,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';

// Importar imagens
import heroImage from './assets/CWUF4wx8wVm5.jpg';
import codeImage from './assets/xenpHkIpqfVh.jpg';

import { Sun, Moon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Dados do portfólio
  const personalInfo = {
    name: "Miguel Romão",
    title: "Desenvolvedor Full Stack",
    age: 19,
    phone: "(65) 98443-3308",
    email: "miguelmenegusse72@gmail.com",
    github: "github.com/romaomiguel",
    objective: "Busco atuar na área de desenvolvimento, onde possa aplicar minha experiência e conhecimentos para contribuir na criação e aprimoramento de sistemas. Procuro desafios que me proporcionem crescimento profissional, desenvolvimento das minhas habilidades analíticas e a oportunidade de colaborar efetivamente na solução de problemas e na promoção da inovação dentro da empresa."
  };

  const experience = [
    {
      title: "Suporte Técnico",
      company: "Scalco Contabilidade",
      period: "2024 - Atual",
      responsibilities: [
        "Desenvolvimento de Automações: Criação de scripts em Python para automatização de tarefas internas e desenvolvimento de aplicações locais (localhost) voltadas à otimização de processos operacionais.",
        "Infraestrutura de TI: Atendimento técnico a estações de trabalho e manutenção da infraestrutura tecnológica",
        "Implementação de Ferramentas: Implantação e configuração de soluções como Tactical RMM, Ansible e GLPI para gerenciamento de TI",
        "Gestão de Redes: Atuação em rotinas de rede, configuração e suporte à infraestrutura de conectividade"
      ]
    }
  ];

  const education = [
    {
      course: "Ciência da Computação",
      institution: "Faculdade Invest de Ciências e Tecnologia",
      period: "2024 - 2028",
      status: "4º semestre (noturno) - Cursando"
    },
    {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Faculdade Invest de Ciências e Tecnologia", 
      period: "2024 - 2026",
      status: "4º semestre (noturno) - Cursando"
    }
  ];

  const skills = {
    "Linguagens de Programação": [
      { name: "Python", description: "Automação, consumo de API, desenvolvimento backend" },
      { name: "JavaScript", description: "Desenvolvimento de aplicações com js" },
      { name: "React Native", description: "Criação de interfaces móveis (em aprendizado)" }
    ],
    "Banco de Dados": [
      { name: "PostgreSQL", description: "Modelagem de dados, consultas SQL e administração de banco" }
    ],
    "Tecnologias Web": [
      { name: "HTML5 & CSS3", description: "Estruturação e estilização" }
    ],
    "Ferramentas e DevOps": [
      { name: "Git & GitHub", description: "Versionamento de código" },
      { name: "Docker", description: "Criação e gerenciamento de containers" },
      { name: "Ansible", description: "Automação de infraestrutura" }
    ],
    "Infraestrutura": [
      { name: "Redes", description: "Configuração e gerenciamento de redes" },
      { name: "Sistemas", description: "Conhecimento em sistema Windows e Linux" }
    ]
  };

  const courses = [
    "Python – Curso em Vídeo",
    "Java e Banco de Dados – AdaTech",
    "HTML & CSS – Curso em Vídeo",
    "Back-End – Coders 24",
    "Versionamento de Código (Git & GitHub) – Curso em Vídeo"
  ];

  const projects = [
    {
      title: "Sistema de Automação",
      description: "Scripts em Python para automatização de tarefas internas na empresa",
      technologies: ["Python", "API", "Automação"],
      status: "Em desenvolvimento"
    },
    {
      title: "Aplicação Web Local",
      description: "Desenvolvimento de aplicações localhost para otimização de processos",
      technologies: ["JavaScript", "HTML", "CSS"],
      status: "Concluído"
    },
    {
      title: "Configuração de Infraestrutura",
      description: "Implementação de soluções como Tactical RMM, Ansible e GLPI",
      technologies: ["Ansible", "Linux", "DevOps"],
      status: "Em andamento"
    }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá Miguel! Vi seu portfólio e gostaria de conversar sobre oportunidades.");
    window.open(`https://wa.me/5565984433308?text=${message}`, '_blank');
  };

  const openEmail = () => {
    window.open(`mailto:${personalInfo.email}`, '_blank');
  };

  const openGitHub = () => {
    window.open(`https://${personalInfo.github}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-primary"
            >
              Miguel Romão
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item === 'home' ? 'Início' : 
                   item === 'about' ? 'Sobre' :
                   item === 'experience' ? 'Experiência' :
                   item === 'skills' ? 'Habilidades' :
                   item === 'projects' ? 'Projetos' :
                   'Contato'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-4 capitalize hover:bg-muted"
                >
                  {item === 'home' ? 'Início' : 
                   item === 'about' ? 'Sobre' :
                   item === 'experience' ? 'Experiência' :
                   item === 'skills' ? 'Habilidades' :
                   item === 'projects' ? 'Projetos' :
                   'Contato'}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center section-padding pt-24">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Olá, eu sou{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {personalInfo.objective}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('projects')} size="lg">
                  Ver Projetos
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                  Entrar em Contato
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Workspace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-muted-foreground" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mim</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <User className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Idade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{personalInfo.age} anos</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Code className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Experiência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">1+ ano</p>
                  <p className="text-muted-foreground">Desenvolvimento</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Briefcase className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Projetos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{projects.length}+</p>
                  <p className="text-muted-foreground">Concluídos</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experiência Profissional</h2>
            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="mb-8">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Briefcase className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg">{exp.company} • {exp.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">{resp}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-muted/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
            <div className="grid gap-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    {category === 'Linguagens de Programação' && <Code className="w-6 h-6 text-primary" />}
                    {category === 'Banco de Dados' && <Database className="w-6 h-6 text-primary" />}
                    {category === 'Tecnologias Web' && <Globe className="w-6 h-6 text-primary" />}
                    {category === 'Ferramentas e DevOps' && <Server className="w-6 h-6 text-primary" />}
                    {category === 'Infraestrutura' && <Server className="w-6 h-6 text-primary" />}
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="tech-card"
                      >
                        <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Cursos e Certificações
              </h3>
              <div className="flex flex-wrap gap-3">
                {courses.map((course, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {course}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projetos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="project-card"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant={project.status === 'Concluído' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Placeholder for future projects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="project-card border-dashed"
              >
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Próximos projetos</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Em breve...</h3>
                  <p className="text-muted-foreground">Novos projetos serão adicionados em breve. Acompanhe meu GitHub para as últimas atualizações!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Formação Acadêmica</h2>
            <div className="max-w-4xl mx-auto grid gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{edu.course}</CardTitle>
                          <CardDescription className="text-lg">{edu.institution}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.period} • {edu.status}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entre em Contato</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Vamos conversar!</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Estou sempre aberto a novas oportunidades e projetos interessantes. 
                    Entre em contato comigo através dos canais abaixo.
                  </p>
                  
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-muted-foreground">{personalInfo.phone}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={openEmail}
                    >
                      <Mail className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">{personalInfo.email}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={openGitHub}
                    >
                      <Github className="w-6 h-6 text-gray-600" />
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-muted-foreground">{personalInfo.github}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                    <img 
                      src={codeImage} 
                      alt="Code" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 hero-gradient opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Miguel Romão. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" onClick={openGitHub}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={openEmail}>
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={openWhatsApp}>
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
