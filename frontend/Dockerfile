FROM node:12

ENV NODE_ENV development
ENV PORT 3000

# Create app directory
WORKDIR /app

# Installing dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 

# Copying source files
COPY . .

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "dev"  