import path from 'path';

export default ({ env }) => ({
  documentation: {
    enabled: env("NODE_ENV", "production") === "development",
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Desbordante CMS Documentation",
      },
      "x-strapi-config": {
        plugins: [],
        path: "/documentation",
      },
      servers: [
        {
          url: `http://${env("DOMAIN", "localhost")}${
            env("PORT") ? ":" + env("PORT") : ""
          }/cms`,
          description: "Development server",
        },
      ],
    },
  },
});
