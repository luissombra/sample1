module.exports = function(grunt) {
    grunt.initConfig({
        sshconfig: {
            someserver: {
                host: 'someserver.com',
                username: 'someuser',
                agent: process.env.SSH_AUTH_SOCK
            }
        },
        sshexec: {
            deploy: {
                command: ['cd /home/someuser/app', 'git pull origin master', 'npm install'].join(' && '),
                options: {
                    config: 'someserver'
                }
            }
        }
    });
    grunt.registerTask('deploy', ['sshexec:deploy']);
    return grunt.loadNpmTasks('grunt-ssh');
};