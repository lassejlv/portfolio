import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:content';
import { WEBHOOK_URL } from 'astro:env/server';

// @ts-ignore
import { Webhook, MessageBuilder } from 'discord-webhook-node';

const inputSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export const server = {
  sendContactWebhook: defineAction({
    accept: 'json',
    input: inputSchema,
    handler: async (data) => {
      try {
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
