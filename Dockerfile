# Step 1: Build the React app
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Add a basic nginx config if needed, or use default
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
