const profileData = {
  name: "Felipe Muros",
  links: {
    linkedin: "https://www.linkedin.com/in/felipe-muros-48367433/",
    github: "https://github.com/murosfc",
    email: "muros@yahoo.com.br"
  },
  i18n: {
    pt: {
      htmlLang: "pt-BR",
      role: "Engenheiro de Software Full Stack",
      metaDescription:
        "Portfólio moderno com foco em resultado, projetos e proposta de valor profissional.",
      nav: {
        about: "Sobre",
        projects: "Projetos",
        results: "Resultados",
        contact: "Contato"
      },
      hero: {
        eyebrow: "Engenheiro de Software Full Stack",
        title:
          'Eu construo <span class="hero-accent">soluções digitais</span> com foco em performance, qualidade e impacto de negócio.',
        lead:
          "Engenharia de software orientada a resultado, com foco em qualidade, velocidade de entrega e impacto de negócio.",
        ctaPrimary: "Vamos conversar",
        ctaSecondary: "Ver projetos"
      },
      about: {
        eyebrow: "Sobre",
        title: "Posicionamento profissional",
        text:
          "Atuo na construção de produtos digitais ponta a ponta, unindo experiência em front-end, back-end e visão de negócio. Tenho background em engenharia de produção, pós-graduação em gestão de projetos e experiência com sistemas web em ambientes reais de operação."
      },
      sections: {
        projectsEyebrow: "Projetos em destaque",
        projectsTitle: "Entregas com impacto",
        personalTitle: "Pessoais",
        thirdPartyTitle: "Terceiros",
        domainsEyebrow: "Experiência setorial",
        domainsTitle: "Domínios onde agrego além do código",
        resultsEyebrow: "Resultados",
        resultsTitle: "O que eu gero de valor",
        contactEyebrow: "Contato",
        contactTitle: "Aberto a oportunidades e projetos estratégicos",
        contactText:
          "Se fizer sentido para seu time ou negócio, vamos conversar sobre como posso ajudar a acelerar resultados."
      },
      labels: {
        projectLink: "Ver projeto",
        appLink: "Ver Aplicativo",
        roleLabel: "Atuação",
        website: "Site",
        playStore: "Play Store",
        appStore: "App Store",
        email: "E-mail"
      },
      metrics: [
        { value: "73+", label: "Repositórios no GitHub" },
        { value: "992", label: "Contribuições no último ano" },
        { value: "Full Stack", label: "Front-end e Back-end" }
      ],
      skills: [
        "Arquitetura de Software",
        "TypeScript",
        "Angular",
        "Python",
        "FastAPI",
        "Firebase",
        "APIs",
        "Front-end",
        "Back-end",
        "Automação",
        "Testes"
      ],
      domainExpertise: [
        {
          title: "Óleo e gás",
          text: "Vivência no setor para compreender regras, riscos operacionais e prioridades de negócio em soluções de software."
        },
        {
          title: "Planejamento",
          text: "Capacidade de estruturar escopo, prazos e etapas com visão prática de execução e previsibilidade."
        },
        {
          title: "Projetos",
          text: "Experiência em ambientes orientados a projetos, conectando objetivos estratégicos com entregas técnicas."
        },
        {
          title: "Logística internacional",
          text: "Entendimento de fluxos, dependências e criticidade operacional para apoiar sistemas com contexto global."
        },
        {
          title: "Compras",
          text: "Conhecimento de processos de suprimentos e tomada de decisão para criar ferramentas alinhadas à operação."
        }
      ],
      projects: [
        {
          name: "Find'n Me",
          stack: "Dart, Flutter, Python, Java, PostgreSQL, Node.js, Firebase, Realidade Aumentada",
          description:
            "App de localização de usuários e dispositivos com uso de realidade aumentada para navegação e identificação em campo.",
          outcomes: [
            "Integração entre app mobile, serviços de backend e base de dados",
            "Experiência interativa com recursos de realidade aumentada",
            "Arquitetura preparada para rastreamento e evolução de funcionalidades"
          ],
          link: "https://github.com/murosfc/findme"
        },
        {
          name: "Naty Consultoria Web",
          stack: "Thymeleaf, Java, Spring Boot",
          description:
            "Aplicação web para consultoria de moda, com foco em gestão de clientes e agenda de serviços.",
          outcomes: [
            "Organização de atendimentos, histórico e relacionamento com clientes",
            "Controle de agenda com visão operacional do negócio",
            "Base escalável para crescimento de funcionalidades administrativas"
          ],
          link: "https://github.com/murosfc"
        },
        {
          name: "Dante Sleep",
          stack: "Dart, Flutter, IA aplicada",
          description:
            "App para monitoramento de sono e alimentação de bebê com uso de IA para apoio à rotina familiar.",
          outcomes: [
            "Sugestões inteligentes de janela de sono",
            "Previsão da próxima soneca e próxima mamadeira",
            "Apoio à tomada de decisão com base em dados da rotina"
          ],
          link: "https://github.com/murosfc/dante-sleep"
        }
      ],
      thirdPartyProjects: [
        {
          name: "IPMacaé",
          stack: "Angular, Firebase, Flutter",
          description:
            "IPMacaé é o aplicativo oficial da Igreja Presbiteriana de Macaé, projetado para manter os membros conectados e informados sobre atividades e eventos. O app envia comunicados importantes diretamente no dispositivo móvel, mantendo a comunidade atualizada com notícias e informações da igreja.",
          role:
            "Participei do desenvolvimento desde o início em Angular com conexão ao Firebase e também da migração do código para Flutter.",
          links: [
            {
              label: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.ipmacae.app"
            },
            {
              label: "App Store",
              url: "https://apps.apple.com/br/app/ipmaca%C3%A9/id6479720091"
            }
          ]
        },
        {
          name: "SaberSim",
          stack: "Angular, TypeScript, APIs REST",
          description:
            "Plataforma de simulação e otimização voltada para cenários esportivos e tomada de decisão baseada em dados, com foco em criar lineups e estratégias de forma mais inteligente.",
          role:
            "Atuei como desenvolvedor Front End Angular + TypeScript, implementando novas features e fazendo integração com APIs RESTful.",
          link: "https://www.sabersim.com/"
        },
        {
          name: "Cuewee",
          stack: "Angular, Flutter, Audio Plugins",
          description:
            "App para transformar qualquer música em multitracks playback, com separação de stems por IA e click + guia automáticos. Ideal para ensaios e apresentações ao vivo.",
          role:
            "Atuei como desenvolvedor migrando o app de Angular para Flutter para executar plugins de áudio nativamente em Android, iOS e desktop.",
          link: "https://cuewee.app/"
        }
      ],
      valueHighlights: [
        {
          title: "Visão de produto",
          text: "Traduzo necessidades de negócio em funcionalidades técnicas objetivas e mensuráveis."
        },
        {
          title: "Entrega com qualidade",
          text: "Trabalho com foco em boas práticas, testes e manutenção para reduzir retrabalho."
        },
        {
          title: "Perfil multidisciplinar",
          text: "Uno experiência técnica e formação em gestão para acelerar resultados de times e projetos."
        }
      ]
    },
    en: {
      htmlLang: "en",
      role: "Full Stack Software Engineer",
      metaDescription:
        "Modern portfolio focused on results, projects, and professional value proposition.",
      nav: {
        about: "About",
        projects: "Projects",
        results: "Results",
        contact: "Contact"
      },
      hero: {
        eyebrow: "Full Stack Software Engineer",
        title:
          'I build <span class="hero-accent">digital solutions</span> focused on performance, quality, and business impact.',
        lead:
          "Results-driven software engineering with focus on quality, delivery speed, and measurable business impact.",
        ctaPrimary: "Let\'s talk",
        ctaSecondary: "See projects"
      },
      about: {
        eyebrow: "About",
        title: "Professional positioning",
        text:
          "I work on end-to-end digital products, combining front-end and back-end expertise with business vision. I have a production engineering background, a postgraduate degree in project management, and hands-on experience with web systems in real operational environments."
      },
      sections: {
        projectsEyebrow: "Featured projects",
        projectsTitle: "Impactful Deliveries",
        personalTitle: "Personal",
        thirdPartyTitle: "Third-party",
        domainsEyebrow: "Industry expertise",
        domainsTitle: "Domains where I add value beyond code",
        resultsEyebrow: "Results",
        resultsTitle: "The value I deliver",
        contactEyebrow: "Contact",
        contactTitle: "Open to strategic opportunities and projects",
        contactText:
          "If it makes sense for your team or business, let\'s talk about how I can help accelerate outcomes."
      },
      labels: {
        projectLink: "View project",
        appLink: "View App",
        roleLabel: "Role",
        website: "Website",
        playStore: "Play Store",
        appStore: "App Store",
        email: "Email"
      },
      metrics: [
        { value: "73+", label: "GitHub repositories" },
        { value: "992", label: "Contributions in the last year" },
        { value: "Full Stack", label: "Front-end and Back-end" }
      ],
      skills: [
        "Software Architecture",
        "TypeScript",
        "Angular",
        "Python",
        "FastAPI",
        "Firebase",
        "APIs",
        "Front-end",
        "Back-end",
        "Automation",
        "Testing"
      ],
      domainExpertise: [
        {
          title: "Oil and gas",
          text: "Industry background to understand business rules, operational risks, and priorities when building software solutions."
        },
        {
          title: "Planning",
          text: "Ability to structure scope, timelines, and phases with a practical execution and predictability mindset."
        },
        {
          title: "Projects",
          text: "Experience in project-driven environments, connecting strategic goals to technical deliveries."
        },
        {
          title: "International logistics",
          text: "Understanding of flows, dependencies, and operational criticality to support systems in global contexts."
        },
        {
          title: "Procurement",
          text: "Knowledge of sourcing and purchasing processes to build tools aligned with real operational decisions."
        }
      ],
      projects: [
        {
          name: "findnme",
          stack: "Dart, Flutter, Python, Java, PostgreSQL, Node.js, Firebase, Augmented Reality",
          description:
            "User and device location app using augmented reality for guided navigation and on-field identification.",
          outcomes: [
            "Integrated mobile app, backend services, and data layer",
            "Delivered interactive experience with augmented reality resources",
            "Architecture prepared for tracking and feature evolution"
          ],
          link: "https://github.com/murosfc/findme"
        },
        {
          name: "Naty Consultoria Web",
          stack: "Thymeleaf, Java, Spring Boot",
          description:
            "Web application for a fashion consultancy focused on client management and service scheduling.",
          outcomes: [
            "Improved service operations through client and history organization",
            "Structured scheduling flow with operational visibility",
            "Scalable base for new administrative features"
          ],
          link: "https://github.com/murosfc"
        },
        {
          name: "dante-sleep",
          stack: "Dart, Flutter, Applied AI",
          description:
            "Baby sleep and feeding monitoring app using AI to support family daily routines.",
          outcomes: [
            "Smart sleep window suggestions",
            "Prediction of next nap and next feeding",
            "Data-informed support for daily caregiving decisions"
          ],
          link: "https://github.com/murosfc/dante-sleep"
        }
      ],
      thirdPartyProjects: [
        {
          name: "IPMacaé",
          stack: "Angular, Firebase, Flutter",
          description:
            "IPMacae is the official app of Igreja Presbiteriana de Macae, designed to keep members connected and informed about church events and activities through direct mobile announcements.",
          role:
            "I participated from the beginning in the Angular implementation with Firebase integration and later in the migration to Flutter.",
          links: [
            {
              label: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.ipmacae.app"
            },
            {
              label: "App Store",
              url: "https://apps.apple.com/br/app/ipmaca%C3%A9/id6479720091"
            }
          ]
        },
        {
          name: "SaberSim",
          stack: "Angular, TypeScript, REST APIs",
          description:
            "Simulation and optimization platform for sports-related, data-driven decision workflows, focused on building smarter lineup and strategy combinations.",
          role:
            "I worked as an Angular + TypeScript Front End developer, implementing new features and integrating RESTful APIs.",
          link: "https://www.sabersim.com/"
        },
        {
          name: "Cuewee",
          stack: "Angular, Flutter, Audio Plugins",
          description:
            "App that turns any song into multitracks playback, using AI stem separation plus automatic click and guide tracks for rehearsals and live performances.",
          role:
            "I migrated the app from Angular to Flutter to run audio plugins natively on Android, iOS, and desktop.",
          link: "https://cuewee.app/"
        }
      ],
      valueHighlights: [
        {
          title: "Product mindset",
          text: "I translate business needs into objective and measurable technical features."
        },
        {
          title: "Quality-driven delivery",
          text: "I work with best practices, testing, and maintainability to reduce rework."
        },
        {
          title: "Multidisciplinary profile",
          text: "I combine technical expertise and management background to accelerate team and project outcomes."
        }
      ]
    }
  }
};

let currentLang = "pt";

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setHtml(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

function renderMetrics(items) {
  const list = document.getElementById("metricsList");
  if (!list) {
    return;
  }

  list.innerHTML = items
    .map(
      (item) => `
      <li>
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </li>
    `
    )
    .join("");
}

function renderSkills(items) {
  const list = document.getElementById("skillsList");
  if (!list) {
    return;
  }

  list.innerHTML = items.map((skill) => `<li>${skill}</li>`).join("");
}

function renderProjectLinks(project, labels, isThirdParty = false) {
  if (Array.isArray(project.links) && project.links.length > 0) {
    return project.links
      .map(
        (item) =>
          `<a class="project-link" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`
      )
      .join("");
  }

  if (project.link) {
    const linkLabel = isThirdParty ? labels.appLink : labels.projectLink;
    return `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">${linkLabel}</a>`;
  }

  return "";
}

function renderProjects(items, thirdPartyItems, sections, labels) {
  const container = document.getElementById("projectsGrid");
  if (!container) {
    return;
  }

  const buildCards = (projects, isThirdParty = false) =>
    projects
      .map(
        (project) => `
      <article class="project-card">
        <h3>${project.name}</h3>
        <p class="project-meta">${project.stack}</p>
        <p class="project-meta">${project.description}</p>
        ${project.role ? `<p class="project-role"><strong>${labels.roleLabel}:</strong> ${project.role}</p>` : ""}
        ${Array.isArray(project.outcomes) && project.outcomes.length > 0
          ? `<ul class="project-points">${project.outcomes.map((point) => `<li>${point}</li>`).join("")}</ul>`
          : ""
        }
        <div class="spacer"></div>
        <div class="project-links">${renderProjectLinks(project, labels, isThirdParty)}</div>
      </article>
    `
      )
      .join("");

  container.innerHTML = `
    <div class="project-group">
      <h3 class="project-group-title">${sections.personalTitle}</h3>
      <div class="projects-grid">${buildCards(items, false)}</div>
    </div>
    <div class="project-group">
      <h3 class="project-group-title">${sections.thirdPartyTitle}</h3>
      <div class="projects-grid">${buildCards(thirdPartyItems, true)}</div>
    </div>
  `;
}

function renderValueHighlights(items) {
  const container = document.getElementById("resultsGrid");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
      <article class="result-card">
        <h3>${item.title}</h3>
        <p class="project-meta">${item.text}</p>
      </article>
    `
    )
    .join("");
}

function renderDomainExpertise(items) {
  const container = document.getElementById("domainsGrid");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
      <article class="domain-card">
        <h3>${item.title}</h3>
        <p class="project-meta">${item.text}</p>
      </article>
    `
    )
    .join("");
}

function setupLinks() {
  const linkedin = document.getElementById("linkedinLink");
  const github = document.getElementById("githubLink");
  const email = document.getElementById("emailLink");

  if (linkedin) {
    linkedin.href = profileData.links.linkedin;
  }
  if (github) {
    github.href = profileData.links.github;
  }
  if (email) {
    email.href = `mailto:${profileData.links.email}`;
  }
}

function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupLanguageSwitcher() {
  const ptButton = document.getElementById("langPt");
  const enButton = document.getElementById("langEn");

  if (!ptButton || !enButton) {
    return;
  }

  ptButton.addEventListener("click", () => applyLanguage("pt"));
  enButton.addEventListener("click", () => applyLanguage("en"));
}

function setActiveLanguageButton(lang) {
  const ptButton = document.getElementById("langPt");
  const enButton = document.getElementById("langEn");

  if (!ptButton || !enButton) {
    return;
  }

  ptButton.classList.toggle("active", lang === "pt");
  enButton.classList.toggle("active", lang === "en");
}

function applyLanguage(lang) {
  currentLang = lang;
  const content = profileData.i18n[lang];

  document.documentElement.lang = content.htmlLang;
  document.title = `${profileData.name} | Portfolio`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", content.metaDescription);
  }

  setText("brandName", profileData.name);
  setText("footerName", profileData.name);
  setText("footerRole", content.role);

  setText("navAbout", content.nav.about);
  setText("navProjects", content.nav.projects);
  setText("navResults", content.nav.results);
  setText("navContact", content.nav.contact);

  setText("heroEyebrow", content.hero.eyebrow);
  setHtml("heroTitle", content.hero.title);
  setText("heroPitch", content.hero.lead);
  setText("ctaPrimary", content.hero.ctaPrimary);
  setText("ctaSecondary", content.hero.ctaSecondary);

  setText("aboutEyebrow", content.about.eyebrow);
  setText("aboutTitle", content.about.title);
  setText("aboutText", content.about.text);

  setText("projectsEyebrow", content.sections.projectsEyebrow);
  setText("projectsTitle", content.sections.projectsTitle);
  setText("domainsEyebrow", content.sections.domainsEyebrow);
  setText("domainsTitle", content.sections.domainsTitle);
  setText("resultsEyebrow", content.sections.resultsEyebrow);
  setText("resultsTitle", content.sections.resultsTitle);
  setText("contactEyebrow", content.sections.contactEyebrow);
  setText("contactTitle", content.sections.contactTitle);
  setText("contactText", content.sections.contactText);
  setText("emailLink", content.labels.email);

  renderMetrics(content.metrics);
  renderSkills(content.skills);
  renderDomainExpertise(content.domainExpertise);
  renderProjects(content.projects, content.thirdPartyProjects, content.sections, content.labels);
  renderValueHighlights(content.valueHighlights);
  setActiveLanguageButton(lang);
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 80}ms`;
      observer.observe(item);
    });
    return;
  }

  items.forEach((item) => item.classList.add("in-view"));
}

function initPortfolio() {
  setupLinks();
  setupMobileMenu();
  setupLanguageSwitcher();
  applyLanguage(currentLang);
  setupRevealAnimations();
}

initPortfolio();
