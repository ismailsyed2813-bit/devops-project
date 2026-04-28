pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ismailsyed2813-bit/devops-project.git'
            }
        }

        stage('Clean Old Containers') {
            steps {
                sh '''
                docker system prune -a -f
                docker volume prune -f
                '''
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker compose down || true
                docker compose up -d --build
                '''
            }
        }
    }
}