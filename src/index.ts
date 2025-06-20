import { defineTool } from "smithery";

export default defineTool({
  name: "hello",
  description: "Say hello",
  run: async ({ input }) => {
    return `Hello, ${input || "world"}!`;
  },
});
