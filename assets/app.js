// Data (mirrors your TS config)
const profile = {
  name: 'Jesus Robles',
  tagline: 'Mechanical Engineer • Passionate Problem Solver',
  links: {
    linkedin: 'https://www.linkedin.com/in/jesusroblessada/',
    github: 'https://github.com/SolonautJR',
    email: 'jesus.roblessada@gmail.com',
    phone: '+52 871 405 4748',
  },
  projects: [
    {
      name: 'Ring Forged Preform Process Redesign',
      description: 'Led a 6-person team to redesign the forged preform process for rolled steel rings, cutting cycle time from 120s to 30s while managing scope, schedule, and stakeholders.',
      stack: ['Project Management', 'Process Engineering', 'Manufacturing'],
      year: '2025',
    },
    {
      name: 'Predictive Maintenance Implementation Opportunity Analysis',
      description: 'Managed a multi-disciplinary team to identify predictive maintenance opportunities, leading research and analysis and managing scope, schedule, and deliverables.',
      stack: ['Maintenance', 'Analytics', 'Project Management'],
      year: '2025'
    },
    {
      name: 'Composite Silo Monitoring Using Strain Gauges',
      description: 'Researched and tested strain gauge monitoring on composite silos (Polem, NL), producing 98% accurate models via material characterization and statistical analysis.',
      stack: ['Sensors', 'Strain Gauges', 'Data Modeling'],
      year: '2025'
    },
    {
      name: 'FIRST Robotics Competition President & Mentor',
      description: 'Led and mentored a 40-member robotics team across programming and electronics projects; coordinated teams and instruction.',
      stack: ['Leadership', 'Robotics', 'Electronics', 'Programming'],
      year: '2023'
    }
  ],
  education: [
    { degree: 'B.S. Mechanical Engineering (IM)', school: 'Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), Monterrey, México', period: 'Aug 2021 — June 2025', bullets: ['GPA 97.3/100'] },
    { degree: 'Minor in Applied Mechanics', school: 'Windesheim University of Applied Sciences, Zwolle, The Netherlands', period: 'Sept 2024 — Jan 2025', bullets: ['GPA 86.13/100'] },
  ],
  skills: [
    'Mechanical Design','Process Engineering','Project Management','CAD: SOLIDWORKS (CSWP, CSWP-S)','CAD: Creo Parametric','GD&T (ASME Y14.5)','Simulation: Static/Thermal/Modal','FEA & Tolerance Analysis','Manufacturing & DFM/DFA','Predictive Maintenance','Sensors & Strain Gauges','Data Analysis & Statistics','GIS for Utility Planning'
  ],
  about: [
    "My name is Jesus Robles — an engineer by training, a problem-solver by instinct, and someone who's endlessly curious about how things work and how they can be made better.",
    "I've always been drawn to the intersection of technology, design, and human ingenuity. From my earliest experiences building and leading robotics teams to working with companies across Mexico, the U.S., and Europe, I've discovered that what truly excites me is turning ideas into real, tangible solutions — whether that's a refined mechanical process, a digital innovation, or a smarter way of doing things.",
    "I studied Mechanical Engineering at Tecnológico de Monterrey, and later dove into Applied Mechanics in the Netherlands, where I got to see how different cultures approach problem-solving. These experiences shaped my mindset: I like thinking globally but acting locally — staying hands-on, adaptable, and always learning.",
    "Over the past few years, I've worked on projects ranging from industrial design and predictive maintenance to composite material research and process optimization. What I've learned is that every project, no matter how technical, is ultimately about people — understanding needs, building trust, and making decisions that create value. That's why I see engineering as more than a career: it's a way to build ideas that matter.",
    "I'm passionate about innovation, entrepreneurship, and leadership — not just in the corporate sense, but in the way we take ownership of our ideas and make them real. Whether I'm managing a project, designing a system, or brainstorming a new venture, I love the challenge of creating something from scratch and pushing it beyond what seems possible.",
    "Outside of work, I'm always exploring. I love learning about emerging technologies, industrial design, and sustainability, but I also find inspiration in the simple things — traveling, meeting people from different backgrounds, and mentoring students who are discovering their own passion for engineering.",
    "I'm fluent in English and Spanish, dabble in French, and love connecting with people across cultures. I'm also a firm believer that curiosity is the best investment you can make in yourself — it's what fuels creativity, growth, and meaningful impact.",
    "If you're someone who loves ideas, design, or innovation — or if you just enjoy great conversations about how we can make things better — I'd love to connect.",
  ],
  experience: [
    {
      title: 'Consulting Engineer',
      org: 'THINK FORWARD POWER',
      period: 'May 2025 — Present',
      bullets: [
        "Owner's Engineer for U.S. Oil & Gas clients to energize new sites",
        'Planned electrical utility lines with GIS and managed survey data',
        'Managed energization project schedules and stakeholders',
      ]
    },
    {
      title: 'Design Intern',
      org: 'JOHN DEERE SHARED SERVICES MÉXICO',
      period: 'July 2023 — May 2024',
      bullets: [
        'Developed CAD models, factory drawings, and structural simulations',
        'Performed tolerance analysis and cost reduction for NPD and factory support',
        'Worked under internal/external standards including ASME Y14.5 (GD&T)',
      ]
    },
    {
      title: 'Engineering Assistant',
      org: 'BÁSCULAS REVUELTA MAZA',
      period: 'June 2022 — July 2022',
      bullets: [
        'Performed time studies and yield calculations for meat added value processes',
      ]
    },
  ],
  awards: [
    { name: 'CENEVAL Award for Excellence in Performance', issuer: 'CENEVAL', year: '2025' },
    { name: 'Honors Mention for Excellence / Best Program GPA', issuer: 'ITESM', year: '2025' },
    { name: 'SOLIDWORKS CAD Design Professional (CSWP)', issuer: 'Dassault Systèmes', year: '2025' },
    { name: 'SOLIDWORKS Simulation Professional (CSWP-S)', issuer: 'Dassault Systèmes', year: '2025' },
  ]
}

// Helpers
const qs = (s, el=document) => el.querySelector(s)
const qsa = (s, el=document) => Array.from(el.querySelectorAll(s))

// Populate dynamic bits
qs('#year').textContent = new Date().getFullYear()

// About paragraphs
const aboutWrap = qs('#about-paragraphs')
profile.about.forEach(p => {
  const el = document.createElement('p')
  el.textContent = p
  aboutWrap.appendChild(el)
})

// Projects
const projWrap = qs('#projects-grid')
profile.projects.forEach(p => {
  const card = document.createElement('div')
  card.className = 'card'
  if (p.image) {
    const img = document.createElement('img')
    img.src = p.image
    img.alt = p.imageAlt || p.name
    img.loading = 'lazy'
    img.className = 'w-full h-40 object-cover rounded-md mb-3'
    card.appendChild(img)
  }
  const top = document.createElement('div')
  top.className = 'flex items-start justify-between gap-3'
  const left = document.createElement('div')
  const h3 = document.createElement('h3')
  h3.className = 'font-semibold'
  h3.textContent = p.name
  const desc = document.createElement('p')
  desc.className = 'text-sm text-neutral-600 dark:text-neutral-400 mt-1'
  desc.textContent = p.description
  left.append(h3, desc)
  const yr = document.createElement('span')
  yr.className = 'text-xs text-neutral-500 dark:text-neutral-400'
  yr.textContent = p.year || ''
  top.append(left, yr)
  card.appendChild(top)
  if (p.stack && p.stack.length) {
    const tags = document.createElement('div')
    tags.className = 'mt-3 flex flex-wrap gap-2'
    p.stack.forEach(t => {
      const chip = document.createElement('span')
      chip.className = 'text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800'
      chip.textContent = t
      tags.appendChild(chip)
    })
    card.appendChild(tags)
  }
  projWrap.appendChild(card)
})

// Skills marquee
const skills = profile.skills
const track = qs('#skills-track')
function buildTrack(){
  track.innerHTML = ''
  const dup = [...skills, ...skills]
  dup.forEach(s => {
    const pill = document.createElement('span')
    pill.className = 'inline-block text-[14px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10'
    pill.textContent = s
    track.appendChild(pill)
  })
}

// Education
const eduWrap = qs('#education-list')
if (eduWrap) {
  profile.education.forEach((e) => {
    const card = document.createElement('div')
    card.className = 'card'
    const h3 = document.createElement('h3')
    h3.className = 'font-semibold'
    h3.textContent = e.degree
    const meta = document.createElement('div')
    meta.className = 'text-xs text-neutral-500 dark:text-neutral-400 mb-2'
    meta.textContent = `${e.school} — ${e.period}`
    const ul = document.createElement('ul')
    ul.className = 'list-disc pl-5 space-y-1 text-sm'
    e.bullets.forEach(b => {
      const li = document.createElement('li')
      li.textContent = b
      ul.appendChild(li)
    })
    card.append(h3, meta, ul)
    eduWrap.appendChild(card)
  })
}
buildTrack()
let pos = 0, width = 0, rafId
function measure(){
  width = track.scrollWidth / 2
  pos = 0
  track.style.transform = 'translate(0px, -50%)'
}
measure()
function step(){
  pos = (pos + 0.3) % width
  track.style.transform = `translate(${-pos}px, -50%)`
  rafId = requestAnimationFrame(step)
}
rafId = requestAnimationFrame(step)
window.addEventListener('resize', () => { measure() })

// Awards pills
const awardsWrap = qs('#awards-pills')
profile.awards.forEach(a => {
  const pill = document.createElement('span')
  pill.className = 'inline-block text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10'
  const label = [a.name, a.year, a.issuer].filter(Boolean).join(' · ')
  pill.textContent = label
  awardsWrap.appendChild(pill)
})

// Experience
const expWrap = qs('#experience-list')
if (expWrap) {
  profile.experience.forEach((e) => {
    // Timeline item wrapper
    const item = document.createElement('div')
    item.className = 'relative pl-4'

    // Timeline dot
    const dot = document.createElement('span')
    dot.className = 'absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-orange-500 border-2 border-white dark:border-neutral-900'
    item.appendChild(dot)

    // Card content
    const card = document.createElement('div')
    card.className = 'card'
    const h3 = document.createElement('h3')
    h3.className = 'font-semibold'
    h3.textContent = `${e.title} — ${e.org}`
    const meta = document.createElement('div')
    meta.className = 'text-xs text-neutral-500 dark:text-neutral-400 mb-2'
    meta.textContent = e.period
    const ul = document.createElement('ul')
    ul.className = 'list-disc pl-5 space-y-1 text-sm'
    e.bullets.forEach(b => {
      const li = document.createElement('li')
      li.textContent = b
      ul.appendChild(li)
    })
    card.append(h3, meta, ul)
    item.appendChild(card)
    expWrap.appendChild(item)
  })
}

// Mobile menu toggle (placed after DOM content init)
try {
  const toggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isClosed = mobileMenu.classList.contains('menu-closed')
      mobileMenu.classList.toggle('menu-closed', !isClosed)
      mobileMenu.classList.toggle('menu-open', isClosed)
      toggle.setAttribute('aria-expanded', String(isClosed))
    })
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open')
        mobileMenu.classList.add('menu-closed')
        toggle.setAttribute('aria-expanded', 'false')
      })
    })
  }
} catch (e) {
  // no-op
}
