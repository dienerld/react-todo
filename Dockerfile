FROM node:20-slim as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm \
&& pnpm config set store-dir /pnpm \
&& npm cache clean --force

WORKDIR /app



FROM base AS build

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm run build

FROM base as runner

WORKDIR /app

COPY --from=build /app/dist .
COPY --from=build /app/package.json .
COPY --from=build /app/pnpm-lock.yaml .

RUN pnpm add -g serve && pnpm install --prod && pnpm prune

EXPOSE 3000

CMD ["serve"]
