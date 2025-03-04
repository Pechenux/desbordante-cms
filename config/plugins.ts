import path from 'path';

export default ({ env }) => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Desbordante CMS Documentation',
      },
      'x-strapi-config': {
        plugins: [],
        path: '/documentation',
      },
      servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],
    }
  }
});
