FROM oven/bun:debian AS base

FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base AS production-deps
WORKDIR /app
COPY package.json bun.lockb ./

