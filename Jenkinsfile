pipeline {
    agent any
    tools {
        nodejs '16.15.0'
    }
    stages {
        stage('Test') { 
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm build'
            }
        }
        // stage('Deliver') { 
        //     steps {
        //         sh 'npm build'
        //     }
        // }
    }
}