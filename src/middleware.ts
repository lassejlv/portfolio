import { defineMiddleware } from 'astro:middleware';

const rateLimits = new Map() as Map<string, number>;

export const onRequest = defineMiddleware(async (ctx, next) => {
  const isAction = ctx.url.pathname.startsWith('/_actions/');

  if (isAction) {
    const ip = ctx.clientAddress.split(',')[0];

    const rateLimitTime = 5000 * 60; // 5 minutes

    if (rateLimits.has(ip)) {
      const rateLimit = rateLimits.get(ip);
      if (rateLimit && rateLimit > Date.now()) {
        return Response.json({ message: 'Rate limited. Please take it easy.' }, { status: 429 });
      }
    }

    rateLimits.set(ip, Date.now() + rateLimitTime);

    return next();
  }

  return next();
});
