const areaCv = document.getElementById('area-cv')
const resumeButton = document.getElementById('resume-button')
const resumeEsButton = document.getElementById('resume-es-button')
const resumeEnButton = document.getElementById('resume-en-button')
const languageButton = document.getElementById('language-button')

let currentLanguage = 'es'

const translations = {
  es: {},
  en: {
    download: 'Download PDF',
    role: 'Full-stack Developer',
    headline: 'Java 21 · Spring Boot · Angular · Microservices · Cloud · DevOps',
    summaryTitle: 'Professional profile',
    summaryText:
      'Electronics and communications engineer and full-stack developer with 7+ years of experience in enterprise applications, banking, logistics, microservices and system modernization. Specialized in Java 21, Spring Boot, Angular/TypeScript, PostgreSQL, Kafka/Pub/Sub messaging, DevOps and architectures focused on performance, security and scalability.',
    expertiseTitle: 'Core expertise',
    backendTitle: 'Backend & Microservices',
    backendText: 'Java 21, Spring Boot, REST APIs, microservices, caching, performance and distributed architecture.',
    frontendTitle: 'Frontend Engineering',
    frontendText: 'Angular 8, TypeScript, React, JavaScript, HTML/CSS, web interfaces and internal applications.',
    cloudTitle: 'Cloud, DevOps & Delivery',
    cloudText: 'Google Cloud, Terraform, Jenkins, Maven, Docker, Bitbucket, pipelines and releases.',
    dataTitle: 'Data & Messaging',
    dataText: 'PostgreSQL, SQL, Kafka, Pub/Sub, Kafka bridges, integration and data centralization.',
    experienceTitle: 'Professional experience',
    ottoPeriod: 'June 2025 - Present',
    otto1: 'Development of applications in a logistics environment, focused on data centralization across systems.',
    otto2: 'Participation in the progressive migration from monoliths to microservices using Java 21 and Spring Boot.',
    otto3: 'Work with Google Cloud, Terraform and Bitbucket to support infrastructure, deployments and development workflows.',
    otto4: 'Implementation of service-to-service messaging with Kafka, Pub/Sub and Kafka bridges.',
    ottoStack: 'Stack: Java 21, Spring Boot, Google Cloud, Terraform, Kafka, Pub/Sub, PostgreSQL, Bitbucket.',
    bnpPeriod: '2023 - June 2025',
    bnp1: 'Technical team leadership in a banking environment, coordinating application evolution, maintenance and delivery.',
    bnp2: 'Development of new features, production bug fixes and support for critical services.',
    bnp3: 'Performance improvements through caching, service optimization and behavior analysis.',
    bnp4: 'Implementation of security measures and service hardening within a regulated environment.',
    bnpStack: 'Stack: Java 21, Spring Boot, Angular 8, TypeScript, PostgreSQL, Jenkins, Maven, Caching, IntelliJ, VS Code.',
    secondPeriod: 'June 2022 - June 2023',
    second1: 'Development of banking backend and frontend applications based on RESTful microservices.',
    second2: 'Work with Spring Boot, Java 8/11, Angular 8, SQL, DBeaver, Eclipse and Visual Studio Code.',
    second3: 'Security implementation with Spring Security, cryptography, JWT and OAuth 2.0.',
    secondStack: 'Stack: Java, Spring Boot, Angular, SQL, Spring Security, JWT, OAuth 2.0.',
    redsysPeriod: 'May 2021 - June 2022',
    redsys1: 'Analysis, incident resolution and improvement of telebanking applications.',
    redsys2: 'Creation and management of transactions using RESTful microservices and APIs.',
    redsys3: 'Use of Java 8/11, Spring, Spring Boot, Jenkins and Eclipse.',
    voipingPeriod: 'July 2019 - May 2021',
    voipingText: 'Development of Java 8 applications and migration of DB2-based systems to Oracle, using Jenkins and Eclipse.',
    amarisPeriod: 'January 2019 - July 2019',
    amarisText: 'Customization of a laboratory management application with Java 11, JBoss WildFly, Selenium, Python, Groovy and GitHub.',
    stackTitle: 'Technical stack',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    languagesText: 'Spanish · English · Arabic',
    projectsTitle: 'Selected projects',
    projectYeri: 'Experimental web application focused on AI and conversational interface.',
    projectClothing: 'Ecommerce with catalog, product presentation and frontend experience.',
    projectHoobank: 'Fintech mockup focused on responsive UI and product composition.',
  },
}

const originalText = {}

document.querySelectorAll('[data-i18n]').forEach((element) => {
  originalText[element.dataset.i18n] = element.textContent
})

function applyLanguage(language) {
  currentLanguage = language
  document.documentElement.lang = language

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n
    element.textContent = language === 'es' ? originalText[key] : translations.en[key] || originalText[key]
  })

  if (languageButton) {
    languageButton.textContent = language === 'es' ? 'EN' : 'ES'
  }
}

const requestedLanguage = new URLSearchParams(window.location.search).get('lang')
if (requestedLanguage === 'en') {
  applyLanguage('en')
}

const pdfOptions = {
  margin: [8, 8, 8, 8],
  filename: 'Gerangel_Berroteran_CV_ES.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: {
    scale: 2,
    useCORS: true,
    letterRendering: true,
  },
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  },
  pagebreak: {
    mode: ['avoid-all', 'css', 'legacy'],
  },
}

function generateResume(language = currentLanguage) {
  const previousLanguage = currentLanguage
  applyLanguage(language)
  document.body.classList.add('is-exporting')
  html2pdf()
    .set({
      ...pdfOptions,
      filename: language === 'es' ? 'Gerangel_Berroteran_CV_ES.pdf' : 'Gerangel_Berroteran_CV_EN.pdf',
    })
    .from(areaCv)
    .save()
    .finally(() => {
      document.body.classList.remove('is-exporting')
      applyLanguage(previousLanguage)
    })
}

if (languageButton) {
  languageButton.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'es' ? 'en' : 'es')
  })
}

if (resumeButton && areaCv) {
  resumeButton.addEventListener('click', () => generateResume(currentLanguage))
}

if (resumeEsButton && areaCv) {
  resumeEsButton.addEventListener('click', () => generateResume('es'))
}

if (resumeEnButton && areaCv) {
  resumeEnButton.addEventListener('click', () => generateResume('en'))
}
