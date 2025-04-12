# ========================
# STAGE 1: Build
# ========================
FROM node:23-alpine AS builder

# Установка зависимостей для сборки
RUN apk add --no-cache libc6-compat

RUN npm install -g pnpm
WORKDIR /app

# Копируем package.json и package-lock.json/yarn.lock
COPY pnpm-lock.yaml* ./
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем исходный код
COPY . .

# Сборка проекта
RUN npm run build

# ========================
# STAGE 2: Production
# ========================
FROM node:23-alpine AS runner

# Опционально: установка зависимостей, если нужны SSR или API
RUN apk add --no-cache libc6-compat

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем переменные окружения
ENV NODE_ENV=production

# Копируем необходимые файлы из стадии builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Если используется next.config.js или tsconfig.json, копируем при необходимости
# COPY --from=builder /app/next.config.js ./next.config.js

# Указываем порт, если нужно
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]
