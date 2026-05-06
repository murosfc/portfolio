const profileData = {
  name: "Felipe Muros",
  role: "Engenheiro de Software Full Stack",
  headline:
    "Engenheiro de software com foco em produto, performance e entrega continua. Especialidade em TypeScript, Angular, FastAPI e Firebase para criar solucoes escalaveis e de alto impacto.",
  about:
    "Atuo na construcao de produtos digitais ponta a ponta, unindo experiencia em front-end, back-end e visao de negocio. Tenho background em engenharia de producao, pos-graduacao em gestao de projetos e experiencia com sistemas web em ambientes reais de operacao.",
  links: {
    linkedin: "https://www.linkedin.com/in/felipe-muros-48367433/",
    github: "https://github.com/murosfc",
    email: "muros@yahoo.com.br"
  },
  metrics: [
    { value: "73+", label: "Repositorios no GitHub" },
    { value: "992", label: "Contribuicoes no ultimo ano" },
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
    "Automacao",
    "Testes"
  ],
  projects: [
    {
      name: "locadora-TDD-typescript",
      stack: "TypeScript, Node.js, TDD",
      description:
        "Projeto orientado a testes para consolidar boas praticas de desenvolvimento e qualidade de codigo.",
      outcomes: [
        "Modelagem de regras de negocio com foco em confiabilidade",
        "Implementacao guiada por testes automatizados",
        "Base reutilizavel para evolucoes futuras"
      ],
      link: "https://github.com/murosfc/locadora-TDD-typescript"
    },
    {
      name: "findme",
      stack: "Java",
      description:
        "Aplicacao desenvolvida como projeto academico com foco em experiencia do usuario e funcionalidade pratica.",
      outcomes: [
        "Aplicacao completa com escopo real",
        "Consolidacao de fundamentos de engenharia de software",
        "Documentacao e estrutura de projeto reutilizaveis"
      ],
      link: "https://github.com/murosfc/findme"
    },
    {
      name: "locadora-frontend-react",
      stack: "React, JavaScript, Integracao de API",
      description:
        "Front-end criado para validacao de API em cenarios de locadora, com foco em fluxo de usuario e integracao.",
      outcomes: [
        "Interface organizada para testes de funcionalidades",
        "Consumo de API com foco em clareza e manutencao",
        "Base preparada para evolucao incremental"
      ],
      link: "https://github.com/murosfc/locadora-frontend-react"
    }
  ],
  valueHighlights: [
    {
      title: "Visao de produto",
      text: "Traduzo necessidades de negocio em funcionalidades tecnicas objetivas e mensuraveis."
    },
    {
      title: "Entrega com qualidade",
      text: "Trabalho com foco em boas praticas, testes e manutencao para reduzir retrabalho."
    },
    {
      title: "Perfil multidisciplinar",
      text: "Uno experiencia tecnica e formacao em gestao para acelerar resultados de times e projetos."
    }
  ]
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
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

function renderProjects(items) {
  const container = document.getElementById("projectsGrid");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.name}</h3>
        <p class="project-meta">${project.stack}</p>
        <p class="project-meta">${project.description}</p>
        <ul class="project-points">
          ${project.outcomes.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">Ver projeto</a>
      </article>
    `
    )
    .join("");
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
  setText("brandName", profileData.name);
  setText("footerName", profileData.name);
  setText("footerRole", profileData.role);
  setText("heroPitch", profileData.headline);
  setText("aboutText", profileData.about);

  renderMetrics(profileData.metrics);
  renderSkills(profileData.skills);
  renderProjects(profileData.projects);
  renderValueHighlights(profileData.valueHighlights);

  setupLinks();
  setupMobileMenu();
  setupRevealAnimations();
}

initPortfolio();
