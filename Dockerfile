FROM mongo:4.0.12

COPY lib /docker-entrypoint-initdb.d
