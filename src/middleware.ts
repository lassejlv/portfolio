import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((ctx, next) => {
  const isAction = ctx.url.pathname.startsWith('/_actions/');

  if (isAction) {
    console.log(ctx.clientAddress);
  }

  return next();
});
