📘 Auth-Service — ArgoFleet Canada

Auth-Service is a Node.js microservice developed as part of the ArgoFleet Canada GitOps ecosystem.
It handles authentication logic and is deployed via a fully automated CI/CD pipeline powered by Docker, Kubernetes, and ArgoCD.

🧩 Overview

This microservice provides lightweight authentication functionality within a Kubernetes-based GitOps workflow.
The deployment process is containerized, automated, and synchronized through ArgoCD for continuous delivery.

🚀 Tech Stack
Layer	Tools Used
Language	Node.js (Express)
Container	Docker
Orchestration	Kubernetes (k3s)
GitOps	ArgoCD
Registry	Docker Hub (bamijiomo/auth-service)
Cloud Infra	AWS EC2 (t3.large) — Ubuntu

📦 Features

⚙️ Lightweight Express server with / route for health checks

🐳 Fully Dockerized for portability and reproducibility

☸️ Kubernetes manifests with resource limits and service exposure

🔁 GitOps deployment automated via ArgoCD sync from GitHub

🧭 Namespace isolation (argofleet) for microservice separation

📁 Folder Structure
argofleet-canada/
├── auth-service/                  # Node.js source code
│   ├── index.js
│   └── Dockerfile
├── k8s/
│   └── base/
│       └── auth-service/
│           ├── deployment.yaml
│           └── service.yaml
├── argocd/
│   └── app-auth-service.yaml      # ArgoCD GitOps config

🛠️ Deployment Workflow
1️⃣ Build & Push Docker Image
docker build -t auth-service .
docker tag auth-service bamijiomo/auth-service:latest
docker push bamijiomo/auth-service:latest

2️⃣ Kubernetes Manifests

deployment.yaml — Defines pod spec, image, and resource limits
service.yaml — Exposes the service via ClusterIP

3️⃣ ArgoCD GitOps Configuration

app-auth-service.yaml —

Syncs Kubernetes manifests from GitHub

Auto-sync enabled with namespace creation

Continuous reconciliation for drift detection

4️⃣ Validation Commands
kubectl get pods -n argofleet
kubectl get svc -n argofleet

GitHub & Registry

GitHub Repository: github.com/BamijiOmo/argofleet-canada

Docker Hub Image: bamijiomo/auth-service

🧭 Author

Bami Omo
DevOps Engineer
📫 github.com/BamijiOmo
