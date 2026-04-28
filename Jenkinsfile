pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ismailsyed2813-bit/devops-project.git'
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