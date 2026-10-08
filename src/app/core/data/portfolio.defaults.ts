import { Certificate } from '../models/certificate.model';
import { Experience } from '../models/experience.model';
import { PortfolioData } from '../models/portfolio-data.model';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

export const DEFAULT_PORTFOLIO: PortfolioData = {
  "profile": {
    "name": "Abdallah Gabr",
    "title": "DevOps and Cloud Engineer",
    "headline": "6x AWS Certified | Docker | Kubernetes | Terraform | CI/CD | Linux | Ansible",
    "about": "6x AWS-certified Computer Systems Engineering student with hands-on experience in DevOps, cloud infrastructure, and IT systems administration. I build CI/CD pipelines, containerize workloads with Docker and Docker Compose, manage infrastructure as code with Terraform and CloudFormation, and automate everything I can. I deployed and operate a production Flask application on AWS EC2 (RHEL 10) with Nginx, Gunicorn, MariaDB, automated backups, and a three-stage deployment evolution from Bash scripts to Ansible to Docker Compose. Passionate about automation, reliability, security, and continuous improvement.",
    "location": "Cairo, Egypt",
    "email": "a.amin.gabr@gmail.com",
    "phone": "+201024096379",
    "github": "https://github.com/a-amin-gabr",
    "linkedin": "https://linkedin.com/in/a-amin-gabr",
    "portfolio": "https://abdallahgabr.me",
    "cvUrl": "/cv"
  },
  "projects": [
    {
      "name": "Production Deployment – Note-Taking Web App",
      "description": "Full-stack Flask REST API deployed on AWS EC2 (RHEL 10) with Nginx reverse proxy, Gunicorn, and MariaDB. Features a three-stage deployment evolution from Bash scripts to Ansible to Docker Compose, with automated backups, security hardening, monitoring, and operational runbooks.",
      "tech": [
        "AWS EC2",
        "Docker Compose",
        "Nginx",
        "Gunicorn",
        "MariaDB",
        "Ansible",
        "Bash",
        "CloudWatch",
        "Cognito",
        "S3"
      ],
      "github": "https://github.com/a-amin-gabr/note-taking-app",
      "live": "https://notes.abdallahgabr.me",
      "image": "/images/project-note-app.png",
      "featured": true,
      "status": "live",
      "highlights": [
        "Provisioned and administered a RHEL 10 server with Nginx, Gunicorn, and MariaDB managed via systemd",
        "Containerized into a three-container Docker Compose architecture (Flask app, MariaDB, Nginx)",
        "Automated provisioning through 3 stages: Bash scripts, Ansible (Roles, Vault), Docker Compose",
        "Engineered automated daily database backups to a dedicated EBS volume with 7-day retention",
        "Applied security hardening: SSH key-only auth, firewall rules, IAM least privilege, Secrets Manager",
        "Monitored server health with CloudWatch, journalctl, and application logs",
        "Created operational runbooks for provisioning, backup/restore, and troubleshooting"
      ]
    },
    {
      "name": "CI/CD Pipeline – Portfolio Site",
      "description": "Fully automated CI/CD pipeline using GitHub Actions that compiles LaTeX, builds a React app, deploys to AWS S3, and invalidates the CloudFront CDN cache. Uses IAM OIDC federation for keyless, zero-trust authentication.",
      "tech": [
        "GitHub Actions",
        "AWS S3",
        "CloudFront",
        "IAM OIDC",
        "React",
        "Vite",
        "LaTeX"
      ],
      "github": "",
      "live": "https://abdallahgabr.me",
      "image": "/images/project-portfolio.png",
      "featured": true,
      "status": "live",
      "highlights": [
        "Zero-manual deployment: push to main and it is live",
        "Compiles LaTeX resume, builds React app, syncs to S3, invalidates CDN in one pipeline",
        "IAM OIDC federation for keyless authentication (no static credentials)",
        "Config-driven architecture with content separated from code using JSON/YAML"
      ]
    },
    {
      "name": "Cloud-Native E-Commerce Platform",
      "description": "Microservices-based application being built with containerization, CI/CD, and Infrastructure as Code targeting Kubernetes orchestration.",
      "tech": [
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS",
        "GitHub Actions"
      ],
      "github": "",
      "live": "",
      "image": "/images/project-ecommerce.png",
      "featured": false,
      "status": "in-progress",
      "highlights": [
        "Designing infrastructure using Terraform and CloudFormation",
        "Building CI/CD pipelines with GitHub Actions",
        "Containerizing services using Docker",
        "Targeting Kubernetes orchestration (EKS)"
      ]
    }
  ],
  "skills": [
    {
      "name": "Docker",
      "category": "devops"
    },
    {
      "name": "Docker Compose",
      "category": "devops"
    },
    {
      "name": "Kubernetes",
      "category": "devops"
    },
    {
      "name": "Terraform",
      "category": "devops"
    },
    {
      "name": "GitHub Actions",
      "category": "devops"
    },
    {
      "name": "Jenkins",
      "category": "devops"
    },
    {
      "name": "Ansible",
      "category": "devops"
    },
    {
      "name": "SonarQube",
      "category": "devops"
    },
    {
      "name": "AWS (EC2, S3, EBS, EFS, RDS, VPC, IAM, Lambda, API Gateway, CloudFormation, Auto Scaling, ELB, CloudWatch, CloudTrail, SNS, SQS, CloudFront, Cognito, Secrets Manager, Fargate)",
      "category": "cloud"
    },
    {
      "name": "Google Cloud (Compute Engine, Cloud Storage, GKE, Cloud IAM, Cloud Functions)",
      "category": "cloud"
    },
    {
      "name": "Huawei Cloud",
      "category": "cloud"
    },
    {
      "name": "Python (Flask, REST APIs)",
      "category": "programming"
    },
    {
      "name": "Bash (Production Scripts)",
      "category": "programming"
    },
    {
      "name": "Java",
      "category": "programming"
    },
    {
      "name": "Kotlin",
      "category": "programming"
    },
    {
      "name": "SQL",
      "category": "programming"
    },
    {
      "name": "JavaScript",
      "category": "programming"
    },
    {
      "name": "Linux (RHEL, Ubuntu, CentOS)",
      "category": "systems"
    },
    {
      "name": "Nginx (Reverse Proxy)",
      "category": "systems"
    },
    {
      "name": "Apache",
      "category": "systems"
    },
    {
      "name": "Gunicorn",
      "category": "systems"
    },
    {
      "name": "Systemd",
      "category": "systems"
    },
    {
      "name": "cron",
      "category": "systems"
    },
    {
      "name": "TCP/IP",
      "category": "networking"
    },
    {
      "name": "DNS",
      "category": "networking"
    },
    {
      "name": "SSH (Key-based Auth, Hardening)",
      "category": "networking"
    },
    {
      "name": "Firewalls (firewalld, iptables)",
      "category": "networking"
    },
    {
      "name": "VPC Design",
      "category": "networking"
    },
    {
      "name": "CCNA Fundamentals",
      "category": "networking"
    },
    {
      "name": "MariaDB",
      "category": "databases"
    },
    {
      "name": "MySQL",
      "category": "databases"
    },
    {
      "name": "Amazon RDS",
      "category": "databases"
    },
    {
      "name": "Backup and Restore",
      "category": "databases"
    },
    {
      "name": "CloudWatch (Alarms, Logs, Metrics)",
      "category": "monitoring"
    },
    {
      "name": "journalctl",
      "category": "monitoring"
    },
    {
      "name": "System Logs",
      "category": "monitoring"
    },
    {
      "name": "Prometheus (Learning)",
      "category": "monitoring"
    },
    {
      "name": "Grafana (Learning)",
      "category": "monitoring"
    },
    {
      "name": "IAM Least Privilege",
      "category": "security"
    },
    {
      "name": "SSH Hardening",
      "category": "security"
    },
    {
      "name": "Firewall Configuration",
      "category": "security"
    },
    {
      "name": "Secrets Manager",
      "category": "security"
    },
    {
      "name": "SSL/TLS",
      "category": "security"
    },
    {
      "name": "IAM OIDC Federation",
      "category": "security"
    },
    {
      "name": "Access Control",
      "category": "security"
    },
    {
      "name": "CI/CD Pipelines",
      "category": "concepts"
    },
    {
      "name": "Infrastructure as Code",
      "category": "concepts"
    },
    {
      "name": "Containerization",
      "category": "concepts"
    },
    {
      "name": "Container Orchestration",
      "category": "concepts"
    },
    {
      "name": "Microservices",
      "category": "concepts"
    },
    {
      "name": "REST APIs",
      "category": "concepts"
    },
    {
      "name": "Security Best Practices",
      "category": "concepts"
    },
    {
      "name": "Operational Documentation",
      "category": "concepts"
    },
    {
      "name": "Site Reliability",
      "category": "concepts"
    }
  ],
  "experiences": [
    {
      "role": "DevOps Engineer Trainee",
      "company": "Digital Egypt Pioneers Initiative (DEPI)",
      "location": "Cairo, Egypt",
      "type": "hybrid",
      "start": "Nov 2025",
      "end": null,
      "points": [
        "Designed and implemented CI/CD pipelines using GitHub Actions for automated build, test, and deployment to cloud infrastructure",
        "Containerized multi-service applications using Docker and Docker Compose, managing container networking, shared volumes, and image optimization",
        "Practiced Kubernetes orchestration with Deployments, Services, ConfigMaps, scaling strategies, and rolling updates",
        "Provisioned cloud infrastructure using Terraform and AWS CloudFormation, following Infrastructure as Code best practices"
      ],
      "current": true
    },
    {
      "role": "Linux Administration Trainee",
      "company": "National Telecommunication Institute (NTI)",
      "location": "Remote",
      "type": "remote",
      "start": "Oct 2025",
      "end": "Nov 2025",
      "points": [
        "Administered RHEL and Ubuntu servers: user and group management, file permissions, process control, storage, SSH configuration, and systemd services",
        "Configured networking services including DNS, TCP/IP, and firewall rules. Automated operational tasks with Bash scripting",
        "Performed security hardening and troubleshot system performance, networking, and configuration issues"
      ],
      "current": false
    },
    {
      "role": "Cloud Architect Trainee",
      "company": "National Telecommunication Institute (NTI)",
      "location": "Remote",
      "type": "remote",
      "start": "Jun 2025",
      "end": "Jul 2025",
      "points": [
        "Completed 120-hour intensive AWS training covering Cloud Foundations, Security, and Solution Architecture",
        "Designed scalable, fault-tolerant multi-AZ architectures with EC2, RDS, ELB, Auto Scaling, VPC, IAM, and CloudFormation",
        "Applied AWS Well-Architected Framework best practices for high availability, cost optimization, and cloud security"
      ],
      "current": false
    },
    {
      "role": "Mobile App Developer Trainee",
      "company": "Digital Egypt Pioneers Initiative (DEPI)",
      "location": "Cairo, Egypt",
      "type": "hybrid",
      "start": "Apr 2024",
      "end": "Oct 2024",
      "points": [
        "Developed mobile applications using Kotlin, Flutter, and Firebase",
        "Applied MVVM architecture and REST API integration",
        "Built Service Link app with authentication and real-time database features"
      ],
      "current": false
    },
    {
      "role": "Android Development Trainee",
      "company": "Information Technology Institute (ITI)",
      "location": "Remote",
      "type": "remote",
      "start": "Jul 2024",
      "end": "Aug 2024",
      "points": [
        "Built Android apps using Kotlin, Room Database, and Retrofit",
        "Applied MVVM architecture and clean code practices",
        "Developed RecipeApp with authentication and API-based search"
      ],
      "current": false
    }
  ],
  "certificates": [
    {
      "name": "AWS Certified Machine Learning Engineer - Associate",
      "code": "MLA-C01",
      "issuer": "Amazon Web Services",
      "date": "Aug 2026",
      "expires": "Aug 2029",
      "image": "/images/mla.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "Google Cloud Certified – Associate Cloud Engineer",
      "code": "ACE",
      "issuer": "Google Cloud",
      "date": "Jul 2026",
      "expires": "Aug 2029",
      "image": "/images/associate-cloud-engineer-certification.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "AWS Certified Developer – Associate",
      "code": "DVA-C02",
      "issuer": "Amazon Web Services",
      "date": "Apr 2026",
      "expires": "Apr 2029",
      "image": "/images/dva.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "AWS Certified CloudOps Engineer – Associate",
      "code": "SOA-C03",
      "issuer": "Amazon Web Services",
      "date": "Apr 2026",
      "expires": "Apr 2029",
      "image": "/images/soa.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "AWS Certified Solutions Architect – Associate",
      "code": "SAA-C03",
      "issuer": "Amazon Web Services",
      "date": "Mar 2026",
      "expires": "Mar 2029",
      "image": "/images/saa.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "AWS Certified AI Practitioner",
      "code": "AIF-C01",
      "issuer": "Amazon Web Services",
      "date": "Apr 2026",
      "expires": "Apr 2029",
      "image": "/images/aif.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "AWS Certified Cloud Practitioner",
      "code": "CLF-C02",
      "issuer": "Amazon Web Services",
      "date": "Oct 2025",
      "expires": "Apr 2029",
      "image": "/images/ccp.png",
      "credentialUrl": "",
      "status": "active"
    },
    {
      "name": "Huawei Cloud Certified Developer Associate",
      "code": "HCCDA",
      "issuer": "Huawei",
      "date": "Sep 2025",
      "expires": "Sep 2028",
      "image": "/images/huawei.png",
      "credentialUrl": "",
      "status": "active"
    }
  ]
};
