# CI/CD Pipeline for Simple Node.js Application

## 📌 Project Overview
This project demonstrates a basic Continuous Integration (CI) pipeline using GitHub Actions.
A simple Node.js Express application is used to showcase automated testing and build validation.

## 🛠 Tech Stack
- Node.js
- Express
- Jest & Supertest (for unit testing)
- GitHub Actions (CI)

## 🔄 CI Pipeline Overview
The CI pipeline is triggered automatically on every push or pull request to the main branch.

### Pipeline Stages
1. **Code Checkout** – Fetches the latest code from the repository.
2. **Environment Setup** – Sets up Node.js runtime.
3. **Dependency Installation** – Installs required npm packages.
4. **Unit Testing** – Runs automated tests to validate the application.
5. **Build Step** – Confirms the application build process.

If any stage fails (especially tests), the pipeline stops and reports failure.

## ▶️ How the Pipeline Runs
1. Push code to the `main` branch.
2. GitHub Actions automatically triggers the CI workflow.
3. Pipeline status can be viewed under the **Actions** tab in GitHub.

## 💻 Run Application Locally
```bash
npm install
npm start


---

## 🚢 Kubernetes Deployment (Task 2)

The application is containerized using Docker and deployed to a local Kubernetes cluster using Minikube.

### Kubernetes Resources Used
- **Deployment**: Manages application replicas and rolling updates
- **Service (NodePort)**: Exposes the application
- **ConfigMap**: Stores non-sensitive configuration
- **Secret**: Stores sensitive configuration
- **Liveness & Readiness Probes**: Ensure application health and availability

### Deployment Steps

```bash
minikube start --driver=docker
eval $(minikube docker-env)

docker build -t ci-demo-app:1.0 .

kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
