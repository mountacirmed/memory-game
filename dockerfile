# Indicar la imagen a utilizar
FROM node:24-alpine3.22


# Indicar la ruta de trabajo dentro del imagen
WORKDIR /app


# Copiar los archivos necesarios al contenedor
COPY . .

# Instalar las dependencias
RUN npm install && npm cache clean --force && rm -rf /tmp/ /root/.npm/_cacache

ENV PORT=4000

EXPOSE $PORT

CMD ["npm", "start"]

