ARG BASE_NODE=node:19-alpine3.16

### Compiles whatever necessary for the app on top of a node image###
FROM ${BASE_NODE} AS SERGIO_BASE

WORKDIR /app

COPY . .

RUN yarn install 
CMD ["node", "run"]

EXPOSE 3000

# Creating app's user/group
#RUN addgroup -S appgroup \
#    && adduser -S -h /home/appuser appuser appgroup \
    # Some extra initialization
#    && mkdir /home/appuser/sergio \
#    && chown -R appuser:appgroup /home/appuser

#WORKDIR /home/appuser/sergio

#COPY --chown=appuser:appgroup . ./

#USER appuser

#ENTRYPOINT ["" ]

