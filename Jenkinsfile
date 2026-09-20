pipeline {
    agent any

    stages {

        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress tests') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}