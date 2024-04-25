import type { OpenAPIObject } from "index";
import { expectAssignable } from "tsd";

expectAssignable<OpenAPIObject>({
  openapi: "3.1.0",
  info: {
    title: "API",
    version: "1.0.0",
  },
  paths: {},
  servers: [
    {
      url: "/v1",
      description: "Run locally.",
    },
    {
      url: "https://production.com/v1",
      description: "Run on production server.",
    },
  ],
});
