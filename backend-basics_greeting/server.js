import { createServer } from "node:http";

export const server = createServer((request, response) => {
  return response.end("Hello, Lukas!");
});
