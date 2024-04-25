import type { OpenAPIObject } from "index";
import { expectAssignable } from "tsd";

expectAssignable<OpenAPIObject>({
  openapi: "3.1.0",
  info: {
    title: "API",
    version: "1.0.0",
  },
  paths: {},
  components: {
    schemas: {
      model: {
        type: "object",
        properties: {
          one: {
            description: "type array",
            type: ["integer", "string"],
          },
          two: {
            description: "type 'null'",
            type: "null",
          },
          three: {
            description: "type array including 'null'",
            type: ["string", "null"],
          },
          four: {
            description: "array with no items",
            type: "array",
          },
          five: {
            description: "singular example",
            type: "string",
            examples: ["exampleValue"],
          },
          six: {
            description: "exclusiveMinimum true",
            exclusiveMinimum: 10,
          },
          seven: {
            description: "exclusiveMinimum false",
            minimum: 10,
          },
          eight: {
            description: "exclusiveMaximum true",
            exclusiveMaximum: 20,
          },
          nine: {
            description: "exclusiveMaximum false",
            maximum: 20,
          },
          ten: {
            description: "nullable string",
            type: ["string", "null"],
          },
          eleven: {
            description: "x-nullable string",
            type: ["string", "null"],
          },
          twelve: {
            description: "file/binary",
          },
        },
      },
    },
  },
});
