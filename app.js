// Portfolio Data
const portfolioData = {
  "personalInfo": {
    "name": "Anuj Pathak",
    "title": "Computer Engineering Student",
    "tagline": "Building innovative solutions with code",
    "email": "pathakanuj2004@gmail.com",
    "phone": "7039177875",
    "location": "Pune, Maharashtra, India",
    "about": "Computer Engineering student at DY Patil University with a CGPA of 8.75, passionate about building scalable applications and working with machine learning technologies.",
    "education": {
      "university": "DY Patil University",
      "degree": "Computer Engineering",
      "duration": "2022 - 2026",
      "cgpa": "8.75"
    },
    "socialLinks": {
      "github": "https://github.com/anujpathak",
      "linkedin": "https://linkedin.com/in/anujpathak"
    }
  },
  "skills": [
    {
      "category": "Programming Languages",
      "items": [
        { "name": "Python", "proficiency": 90 },
        { "name": "Java", "proficiency": 85 },
        { "name": "JavaScript", "proficiency": 80 },
        { "name": "C++", "proficiency": 75 }
      ]
    },
    {
      "category": "Web Development",
      "items": [
        { "name": "HTML/CSS", "proficiency": 85 },
        { "name": "React", "proficiency": 80 },
        { "name": "Node.js", "proficiency": 75 }
      ]
    },
    {
      "category": "Databases",
      "items": [
        { "name": "MongoDB", "proficiency": 85 },
        { "name": "MySQL", "proficiency": 90 },
        { "name": "PostgreSQL", "proficiency": 80 }
      ]
    },
    {
      "category": "Cloud Technologies",
      "items": [
        { "name": "AWS", "proficiency": 75 },
        { "name": "Google Cloud", "proficiency": 70 }
      ]
    },
    {
      "category": "Tools & Others",
      "items": [
        { "name": "Git", "proficiency": 85 },
        { "name": "Docker", "proficiency": 70 },
        { "name": "Machine Learning", "proficiency": 80 },
        { "name": "Data Analysis", "proficiency": 85 }
      ]
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "MediConnect",
      "description": "A comprehensive healthcare platform incorporating machine learning-powered demand forecasting and ensemble learning systems with real-time data processing capabilities.",
      "longDescription": "MediConnect is a full-stack healthcare platform designed to optimize healthcare resource allocation through predictive analytics. The system features machine learning algorithms that forecast medical supply demands based on historical usage data, seasonal trends, and demographic information. The platform also includes a patient management system, appointment scheduling, and inventory tracking modules.",
      "technologies": ["Python", "React", "MongoDB", "Machine Learning", "TensorFlow"],
      "role": "Lead Developer",
      "outcome": "Successfully deployed for pilot testing in a local clinic, resulting in 15% reduction in supply shortages.",
      "github": "https://github.com/anujpathak/mediconnect",
      "liveDemo": "https://mediconnect-demo.vercel.app"
    },
    {
      "id": 2,
      "title": "Anticipating Bankruptcy in Corporate Finances",
      "description": "Developed predictive models using Python and ML techniques while handling large-scale financial datasets—qualified for Smart India Hackathon 2024.",
      "longDescription": "This project focuses on developing a novel bankruptcy prediction framework that considers a wider range of factors beyond traditional financial ratios. By analyzing the financial statements of three Indian firms (DHFL, Reliance Communication, and Jet Airways) from 2011 to 2021, we created a model that incorporates macroeconomic conditions and potential fraudulent activities to provide more comprehensive bankruptcy risk analysis.",
      "technologies": ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas"],
      "role": "Data Scientist & ML Engineer",
      "outcome": "Qualified for Smart India Hackathon 2024; Model achieved 87% accuracy in predicting bankruptcy risk.",
      "github": "https://github.com/anujpathak/bankruptcy-prediction"
    },
    {
      "id": 3,
      "title": "Personal Finance Tracker",
      "description": "A web-based application for tracking personal finances, budgeting, and financial goal setting with visualization dashboards.",
      "longDescription": "The Personal Finance Tracker is a comprehensive tool designed to help users manage their finances effectively. It features expense tracking categorization, budget planning tools, financial goal setting and tracking, recurring transaction management, and data visualization dashboards to provide insights into spending patterns.",
      "technologies": ["JavaScript", "React", "Node.js", "MongoDB", "Chart.js"],
      "role": "Full Stack Developer",
      "outcome": "Launched with 200+ active users; Featured in college tech showcase.",
      "github": "https://github.com/anujpathak/finance-tracker",
      "liveDemo": "https://finance-tracker-demo.vercel.app"
    }
  ],
  "experience": [
    {
      "id": 1,
      "position": "Cloud Computing Intern",
      "company": "Juniper Networks (Virtual Internship)",
      "duration": "May 2024 - July 2024",
      "description": "Gained practical experience with cloud infrastructure, OpenStack, and Kubernetes. Learned about Linux virtualization, network virtualization, and software-defined networking (SDN) principles.",
      "achievements": [
        "Completed 5 certification modules on cloud technologies",
        "Developed a scalable microservice architecture on Google Cloud",
        "Created documentation for cloud deployment processes"
      ]
    },
    {
      "id": 2,
      "position": "PR & Event Head",
      "company": "The WALL-RAIT",
      "duration": "Aug 2023 - Present",
      "description": "Responsible for organizing technical events and workshops for the student community. Managed a team of 10 volunteers and coordinated with external speakers and sponsors.",
      "achievements": [
        "Organized events for 100+ attendees",
        "Secured sponsorships worth ₹50,000 for annual tech fest",
        "Increased social media engagement by 40%"
      ]
    }
  ]
};

// Three.js Hero Background
class HeroBackground {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        const canvas = document.getElementById('hero-canvas');
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Create particles
        this.createParticles();
        
        // Create geometric shapes
        this.createGeometry();

        // Camera position
        this.camera.position.z = 5;

        // Event listeners
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('mousemove', (event) => this.onMouseMove(event));

        // Start animation
        this.animate();
    }

    createParticles() {
        const particleCount = 200;
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 20;
            positions[i + 2] = (Math.random() - 0.5) * 20;

            velocities[i] = (Math.random() - 0.5) * 0.02;
            velocities[i + 1] = (Math.random() - 0.5) * 0.02;
            velocities[i + 2] = (Math.random() - 0.5) * 0.02;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x21808d,
            size: 0.1,
            transparent: true,
            opacity: 0.6
        });

        this.particles = new THREE.Points(geometry, material);
        this.particles.userData = { velocities };
        this.scene.add(this.particles);
    }

    createGeometry() {
        // Floating wireframe cubes
        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
            const material = new THREE.MeshBasicMaterial({
                color: 0x21808d,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const cube = new THREE.Mesh(geometry, material);
            
            cube.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
            
            cube.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            this.scene.add(cube);
        }
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Animate particles
        if (this.particles) {
            const positions = this.particles.geometry.attributes.position.array;
            const velocities = this.particles.userData.velocities;

            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += velocities[i];
                positions[i + 1] += velocities[i + 1];
                positions[i + 2] += velocities[i + 2];

                // Boundary check
                if (Math.abs(positions[i]) > 10) velocities[i] *= -1;
                if (Math.abs(positions[i + 1]) > 10) velocities[i + 1] *= -1;
                if (Math.abs(positions[i + 2]) > 10) velocities[i + 2] *= -1;
            }

            this.particles.geometry.attributes.position.needsUpdate = true;
        }

        // Rotate cubes
        this.scene.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
                child.rotation.x += 0.01;
                child.rotation.y += 0.01;
            }
        });

        // Mouse interaction
        this.camera.position.x += (this.mouse.x * 0.5 - this.camera.position.x) * 0.05;
        this.camera.position.y += (this.mouse.y * 0.5 - this.camera.position.y) * 0.05;

        this.renderer.render(this.scene, this.camera);
    }
}

// Portfolio App
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupSmoothScrolling();
        this.renderSkills();
        this.renderProjects();
        this.renderExperience();
        this.setupContactForm();
        this.setupModal();
        this.setupScrollAnimations();
        
        // Initialize 3D background
        new HeroBackground();
    }

    setupTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-color-scheme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navbar = document.getElementById('navbar');

        // Mobile menu toggle
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                if (document.documentElement.getAttribute('data-color-scheme') === 'dark') {
                    navbar.style.background = 'rgba(31, 33, 33, 0.98)';
                }
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                if (document.documentElement.getAttribute('data-color-scheme') === 'dark') {
                    navbar.style.background = 'rgba(31, 33, 33, 0.95)';
                }
            }
        });
    }

    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        const viewWorkBtn = document.getElementById('view-work-btn');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        viewWorkBtn.addEventListener('click', () => {
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    renderSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        
        portfolioData.skills.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            
            categoryDiv.innerHTML = `
                <h3>${category.category}</h3>
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <div class="skill-name">
                            <span>${skill.name}</span>
                            <span>${skill.proficiency}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.proficiency}"></div>
                        </div>
                    </div>
                `).join('')}
            `;
            
            skillsGrid.appendChild(categoryDiv);
        });

        // Animate skill bars when in view
        this.animateSkillBars();
    }

    animateSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, Math.random() * 500);
                    });
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-category').forEach(category => {
            observer.observe(category);
        });
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-project-id', project.id);
            
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
                        ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" class="project-link project-link--secondary">Live Demo</a>` : ''}
                        <button class="project-link project-link--secondary" onclick="app.openProjectModal(${project.id})">View Details</button>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }

    renderExperience() {
        const timeline = document.getElementById('timeline');
        
        portfolioData.experience.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3 class="experience-position">${exp.position}</h3>
                    <h4 class="experience-company">${exp.company}</h4>
                    <p class="experience-duration">${exp.duration}</p>
                    <p class="experience-description">${exp.description}</p>
                    <ul class="experience-achievements">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                <div class="timeline-dot"></div>
            `;
            
            timeline.appendChild(timelineItem);
        });
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Simulate form submission
            this.simulateFormSubmission(data);
        });
    }

    simulateFormSubmission(data) {
        const submitBtn = document.querySelector('#contact-form button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = 'var(--color-success)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                document.getElementById('contact-form').reset();
            }, 2000);
        }, 1500);
    }

    setupModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = modal.querySelector('.modal-close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    openProjectModal(projectId) {
        const project = portfolioData.projects.find(p => p.id === projectId);
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <div class="project-tech" style="margin: 16px 0;">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <p style="margin-bottom: 24px;"><strong>Role:</strong> ${project.role}</p>
            <p style="margin-bottom: 24px;">${project.longDescription}</p>
            <p style="margin-bottom: 24px;"><strong>Outcome:</strong> ${project.outcome}</p>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">View on GitHub</a>
                ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" class="project-link project-link--secondary">Live Demo</a>` : ''}
            </div>
        `;

        modal.style.display = 'block';
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.project-card, .timeline-item, .about-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PortfolioApp();
});

// Expose openProjectModal globally for onclick handlers
window.openProjectModal = (projectId) => {
    window.app.openProjectModal(projectId);
};