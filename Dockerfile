FROM maven:3-jdk-8-alpine

RUN apk add --update wget nano unzip git

# While we are developing, one RUN per line is better. When done, use "&& \" to merge them all

RUN mkdir -p /c3pr/project /c3pr/temp
RUN wget -O /c3pr/temp/walkmod.zip https://bitbucket.org/rpau/walkmod/downloads/walkmod-3.0.0-installer.zip
RUN unzip /c3pr/temp/walkmod.zip -d /c3pr/temp/walkmod
RUN mv /c3pr/temp/walkmod/walkmod-3.0.0 /c3pr/tool

ENV PATH="/c3pr/tool/bin:${PATH}"

# Pre-install all plugins
ADD walkmod.xml /c3pr/temp/walkmod.xml
WORKDIR /c3pr/temp
RUN walkmod install

#
RUN git clone

# Temporary
#RUN apk add --update nodejs nodejs-npm
