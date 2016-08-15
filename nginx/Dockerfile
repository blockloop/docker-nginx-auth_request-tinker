FROM debian:jessie

# RUN echo "deb http://ppa.launchpad.net/nginx/stable/ubuntu trusty main" \
#   > /etc/apt/sources.list.d/nginx-stable.list
# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C300EE8C && \
#   apt-get update && \
#   apt-get install -y nginx-extras
RUN  apt-get update && \
         apt-get install -y nginx-extras

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

ADD nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
