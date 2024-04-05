FROM openjdk:17-jdk-slim

ARG JAR_FILE=target/post-0.0.1.jar

COPY ${JAR_FILE} app_post.jar

ENTRYPOINT  ["java", "-jar","app_post.jar"]