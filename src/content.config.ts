import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });

const commands = defineCollection({
  loader: glob({ pattern: '**/*.md*', base: './src/data/commands' }),
  schema: z.object({
    command: z.string().default('todo'),
    privileged: z.boolean().default(false),
    requires: z.array(z.enum(['premium', 'economy', 'games'])).default([]),
    args: z
      .array(
        z.object({
          name: z.string(),
          type: z.enum(['user', 'string', 'number', 'enum']),
          optional: z.boolean().default(false),
        }),
      )
      .default([]),
  }),
});

export const collections = {
  docs,
  commands,
};
