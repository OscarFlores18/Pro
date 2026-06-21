FROM tomcat:9-jdk21

WORKDIR /usr/local/tomcat/webapps

COPY target/Proyectof.war .

EXPOSE 8080

CMD ["catalina.sh","run"]