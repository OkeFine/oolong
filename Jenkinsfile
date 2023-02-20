pipeline {
    agent any
    tools {
        nodejs '16.15.0'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}