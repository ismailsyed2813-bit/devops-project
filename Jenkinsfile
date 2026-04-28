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
                docker ps -q | xargs -r docker stop
                docker ps -aq | xargs -r docker rm
                '''
            }
        }

        stage('Build & Deploy with Compose') {
            steps {
                sh '''
                docker compose down || true
                docker compose up -d --build
                '''
            }
        }
    }
}