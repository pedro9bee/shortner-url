---
slug: first-blog-post
title: First Blog Post
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

To run Postgres on linux you have to use:

# Change Owner to local data

sudo chown -R 1000:1000 ./tmp/redis/
sudo chown -R 1000:1000 ./tmp/postgres/keycloak
sudo chown -R 1000:1000 ./tmp/postgres/api-db/
sudo chown -R 1000:1000 ./tmp/esdata
sudo chown -R 1000:1000 ./tmp/redis

# Nest to Create

npx nx g @nrwl/nest:module shared
npx nx g @nrwl/nest:library shared --service --controller

# PRISMA

npm i @prisma/client
npm i -D prisma
npx prisma migrate dev
npx prisma studio
npx prisma db seed

"prisma": {
"seed": "ts-node --compiler-options {\"resolveJsonModule\":true} prisma/seed.ts"
}

id String @id @default(cuid())

npx nx generate @nrwl/nest:library users --controller --service
