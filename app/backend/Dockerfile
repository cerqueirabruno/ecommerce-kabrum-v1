# BACK-END
FROM node:22.11-alpine
WORKDIR /backend
COPY package.json ./
COPY package-lock.json ./
RUN npm install
EXPOSE 3001
CMD npm run dev
# ENTRYPOINT [ "npm", "run" ]
# CMD [ "dev" ]