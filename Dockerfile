FROM alpine:latest
ENV TZ="Asia/Colombo"

RUN apk update
RUN apk add openjdk21
RUN apk add maven

WORKDIR /app

EXPOSE 8080

VOLUME [ "/app","/root/.m2/","/tmp" ]

ENTRYPOINT [ "mvn","spring-boot:run"]
