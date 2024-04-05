FROM openjdk:17-jdk-slim

ARG JAR_FILE=target/chat-0.0.1.jar

COPY ${JAR_FILE} app_chat.jar

ENTRYPOINT  ["java", "-jar","app_chat.jar"]

EXPOSE 9003