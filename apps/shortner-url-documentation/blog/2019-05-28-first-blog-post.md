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
sudo chown -R 1000:1000 ./tmp/postgres/
npx nx g @nrwl/nest:module shared
npm i @prisma/client
npm i -D prisma
npx prisma migrate dev
npx prisma studio

"prisma": {
"seed": "ts-node --compiler-options {\"resolveJsonModule\":true} prisma/seed.ts"
}

id String @id @default(cuid())

npx nx generate @nrwl/nest:library users --controller --service
