docker rm -f walkmod_sonar
docker run ^
 -p 5003:5003 ^
 --name walkmod_sonar ^
 -e C3PR_MONGO_URL=%C3PR_MONGO_URL% ^
 -e C3PR_HUB_URL=http://host.docker.internal:5000 ^
 -e C3PR_AGENT_URL=http://127.0.0.1:5003 ^
 -e C3PR_AGENT_ID=walkmod-sonar ^
 -e C3PR_REGISTRY_URL=http://host.docker.internal:5000/api/v1/registry ^
 --entrypoint "/bin/sh" ^
 c3pr/c3pr-tool-walkmod-sonar:1.6.1 ^
 -c "echo `/sbin/ip route|awk '/default/ { print $3 }'` c3prgitlab >> /etc/hosts; /c3pr/agent/c3pr-agent"