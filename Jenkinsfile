stage('Deploy with Compose') {
    steps {
        sh '''
        docker-compose down || true
        docker-compose up -d --build
        '''
    }
}
