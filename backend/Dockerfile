FROM node:12-alpine

ENV NODE_ENV production
ENV PORT 1337
ENV HOST 0.0.0.0

# Create app directory
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install app dependencies
RUN npm install --production

# Bundle app source
COPY . .

RUN yarn build
EXPOSE 1337

CMD [ "yarn", "start" ]


