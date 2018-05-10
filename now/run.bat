docker rm -f walkmod_sonar
docker run ^
 -p 5003:5003 ^
 --name walkmod_sonar ^
 -e C3PR_AGENT_URL='http://127.0.0.1:5003' ^
 -e C3PR_AGENT_ID='walkmod-sonar' ^
 -e C3PR_REGISTRY_URL='http://host.docker.internal:5000/api/v1/registry' ^
 acdcjunior/c3pr-tool-walkmod-sonar:1.4.0