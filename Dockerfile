FROM node:18-alpine
WORKDIR /app
COPY . /app

# Command to run the application
CMD ["npm", "start"]
EXPOSE 3000