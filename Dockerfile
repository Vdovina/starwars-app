FROM node
COPY . ./
WORKDIR /app
EXPOSE 3000
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]
