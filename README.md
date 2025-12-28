## Codex · Что я умею

Веб-страница, представляющая ключевые навыки и сценарии использования Codex на базе GPT‑5. UI оптимизирован под русскоязычную аудиторию и разворачивается на Vercel.

### Стек

- Next.js 14 (App Router, TypeScript)
- CSS Modules
- Google Fonts (Geist)

### Локальный запуск

```bash
npm install
npm run dev
```

Приложение будет доступно на `http://localhost:3000`.

### Продакшн-сборка

```bash
npm run build
npm run start
```

### Деплой

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-52ce0d65
```

После деплоя проверьте доступность: `curl https://agentic-52ce0d65.vercel.app`.
