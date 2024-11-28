# FRONT-END
FROM node:22.11-alpine
WORKDIR /frontend
COPY package.json ./
COPY package-lock.json ./
RUN npm install
EXPOSE 5173
CMD npm run dev
# ENTRYPOINT [ "npm", "run" ]
# CMD [ "dev" ]