FROM nginx:1.25.3-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/my-app /usr/share/nginx/html
EXPOSE 80