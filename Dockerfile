FROM node:argon

# create app directory
RUN mkdir -p /usr/src/add-me
WORKDIR /usr/src/app

# install dependencies
COPY package.json /usr/src/add-me
RUN npm install

# copy app source
COPY . /usr/src/add-me

# expose port
EXPOSE 3000

# define launch command
CMD [ 'npm', 'start' ]
