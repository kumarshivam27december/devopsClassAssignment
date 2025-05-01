pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "blog_website_project"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t blog-website .'
            }
        }

        stage('Run with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }
    }

    post {
        success {
            echo '✅ Blog website deployed successfully on port 8081!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
