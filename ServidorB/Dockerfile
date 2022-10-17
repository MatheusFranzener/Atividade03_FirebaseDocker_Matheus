# Selecionar a imagem base;
FROM node       
 # Definir o diretório padrão de trabalho;                   
WORKDIR /               
# Variáveis de ambiente do dockerfile;          
ARG PORT=3001    
# Variável de ambiente da aplicação;                  
ENV PORT=$PORT  
# Expõe a porta 3000 ( Deixa a porta da máquina visível );                   
EXPOSE $PORT
# Copia o conteúdo do diretório que estamos para a imagem que estamos criando;                       
COPY ./ .         
# Comando em bash para pré inicializar a aplicação;                 
RUN npm install            
# Executa o comando para inicializar a aplicação;        
ENTRYPOINT npm start   