FROM node:latest

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production

COPY package.json /app/package.json
RUN yarn install --silent

# Add app
COPY . /app

# Build the app
RUN yarn build

EXPOSE 4000

# Start the app
CMD ["yarn", "run", "start"]
