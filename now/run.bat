docker run ^
 -p 5003:5003 ^
 --name wsonar ^
 -e C3PR_AGENT_URL='http://127.0.0.1:5003' ^
 -e C3PR_AGENT_ID='walkmod-sonar' ^
 -e C3PR_REGISTRY_URL='http://host.docker.internal:5000' ^
 acdcjunior/c3pr-tool-walkmod-sonar:1.2.0