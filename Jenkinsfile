pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ismailsyed2813-bit/devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker tag devops-app ismail2813/devops-app'
                sh 'docker push ismail2813/devops-app'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop devops-container || true
                docker rm devops-container || true
                docker run -d -p 3000:3000 --name devops-container ismail2813/devops-app
                '''
            }
        }
    }
}
