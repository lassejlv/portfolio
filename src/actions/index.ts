import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:content';
import { REDIS_URL, WEBHOOK_URL } from 'astro:env/server';
import Redis from 'ioredis';
import rateLimit from 'lambda-rate-limiter';

// @ts-ignore
import { Webhook, MessageBuilder } from 'discord-webhook-node';

const redis = new Redis(REDIS_URL);

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

const inputSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  ip_address: z.string().ip({ version: 'v4' }),
});

export const server = {
  sendContactWebhook: defineAction({
    accept: 'json',
    input: inputSchema,
    handler: async (data) => {
      try {
        if (!data.ip_address) throw new Error('Missing ip_address');

        const hasKey = await redis.get(`ip:${data.ip_address}`);
        if (hasKey) throw new Error('Rate limited. Please take it easy.');

        await redis.set(`ip:${data.ip_address}`, true, 'EX', 60 * 1000);

        const hook = new Webhook(WEBHOOK_URL);

        const embed = new MessageBuilder()
          .setTitle('New Contact Form Submission')
          .addField('Name', data.name, true)
          .addField('Email', data.email, true)
          .addField('Message', data.message)
          .setColor('#8c52ff')
          .setTimestamp();

        await hook.send(embed);

        return { success: true };
      } catch (error: any) {
        throw new ActionError({ code: 'BAD_REQUEST', message: error.message });
      }
    },
  }),
};
