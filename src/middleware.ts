import { defineMiddleware } from 'astro:middleware';
import { redis } from './actions';

export const onRequest = defineMiddleware(async (ctx, next) => {
  const isAction = ctx.url.pathname.startsWith('/_actions/');

  if (isAction) {
    const ip = ctx.clientAddress.split(',')[0];
    console.log(ip);

    const hasKey = await redis.get(`ip:${ip}`);
    if (hasKey) return Response.json({ message: 'Rate limited. Please take it easy.' }, { status: 429 });
    else await redis.set(`ip:${ip}`, true, 'EX', 60 * 1000);

    return next();
  }

  return next();
});
