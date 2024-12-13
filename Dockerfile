# Usa una imagen oficial de Node.js como base
FROM node:16

# Crea y establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que el servidor GraphQL escucha
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
