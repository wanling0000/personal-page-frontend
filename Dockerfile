# 使用 Node.js 作为基础镜像
FROM node:18-alpine AS builder

# 安装 git 和其他工具
RUN apk add --no-cache git

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 lock 文件并安装依赖
COPY package.json package-lock.json* ./
RUN npm install

# 复制代码并构建项目
COPY . .
RUN npm run build

# 使用 Nginx 作为生产服务器
FROM nginx:alpine

# 复制构建后的静态文件到 Nginx 的 HTML 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
