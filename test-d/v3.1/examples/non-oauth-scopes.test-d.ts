import type { OpenAPIObject } from "index";
import { expectAssignable } from "tsd";

expectAssignable<OpenAPIObject>({
  openapi: "3.1.0",
  info: {
    title: "Non-oAuth Scopes example",
    version: "1.0.0",
  },
  paths: {
    "/users": {
      get: {
        security: [
          {
            bearerAuth: ["read:users", "public"],
          },
        ],
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "jwt",
        description:
          "note: non-oauth scopes are not defined at the securityScheme level",
      },
    },
  },
});
