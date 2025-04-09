module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {   // CONFIGURAÇÃO PARA UTILIZAR COM O LESS
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,  // comando para minificar o arquivo
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
            //     arquivo destino | arquivo origem
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'], // ** é uma forma de dizer para acessar qualquer pasta. * é uma forma de falar para acessar qualquer arquivo, tudo isso dentro de styles
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: { // plugin de substituição de palavras de um arquivo, por um valor que a gente define
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS', // PALAVRA QUE IRÁ SER ENCONTRADA E SUBSTITUIDA | É NECESSÁRIO COLOCAR @@ NA FRENTE AONDE A SUBSTITUIÇÃO DEVE ACONTECER
                            replacement: './styles/main.css' // PALAVRA DE SUBSTITUIÇÃO 
                        },
                        {
                            match: 'ENDEREÇO_DO_JS', 
                            replacement: '../src/scripts/main.js' 
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'], // arquivo para substituição 
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS', 
                            replacement: './styles/main.min.css' 
                        },
                        {
                            match: 'ENDEREÇO_DO_JS', 
                            replacement: './scripts/main.min.js' 
                        }
                    ]       
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'], 
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true, // remove todos os comentários no arquivo de html
                    collapseWhitespace: true // todo espaço em branco é apagado do arquivo
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                    //     destino              origem
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
            //              final                       origem
                }
            }
        },
        sass: {   // CONFIGURAÇÃO PARA UTILIZAR COM O SASS
            dist: {
                options: {
                    style: 'compressed' // minifica o arquivo 
                },
                files: {
                    'main2.css': 'main.scss'
            //  arquivo destino | arquivo origem
                }
            }
        },
        concurrent: { // plugin para executar as tarefas de forma simultânea
            target: ['sass-exemplo']
        }
    })

    grunt.registerTask('olaGrunt', function (){
        const done = this.async();
        setTimeout(function() {
            console.log('Olá Grunt');
            done();
        }, 3000)
    })

    grunt.loadNpmTasks('grunt-contrib-less'); // carregamento de plugins, o mesmo vale para o SASS
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent'); // plugin para executar as tarefas de forma simultânea
    grunt.loadNpmTasks('grunt-contrib-watch'); // plugin para fazer o grunt "assistir" o arquivo em tempo real e aplicar as mudanças sempre que salvar, não sendo necessário executa-lo sempre
    grunt.loadNpmTasks('grunt-replace'); // plugin para substituir palavras dentro de um arquivo por um valor determinado
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); // plugin para minificar um arquivo html
    grunt.loadNpmTasks('grunt-contrib-clean'); // plugin para apagar pastas e arquivos temporarios
    grunt.loadNpmTasks('grunt-contrib-uglify'); // compressor de JavaScript

    grunt.registerTask('default', ['watch']); // forma de declarar uma tarefa no terminal
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);     
                                                //    minificação     substituição  
}