import { defineMiddleware } from 'astro:middleware';
import { redis } from './actions';

export const onRequest = defineMiddleware(async (ctx, next) => {
  const isAction = ctx.url.pathname.startsWith('/_actions/');

  if (isAction) {
    const ip = ctx.clientAddress.split(',')[0];

    const rateLimitTime = 5000 * 60; // 5 minutes

    const hasKey = await redis.get(`rate_limit:${ip}`);
    if (hasKey) return Response.json({ message: 'Rate limited. Please take it easy.' }, { status: 429 });
    else await redis.set(`rate_limit:${ip}`, true, 'EX', rateLimitTime);

    return next();
  }

  return next();
});
