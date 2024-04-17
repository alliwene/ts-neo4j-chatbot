import { ChatOpenAI } from "@langchain/openai";
import { OpenAIEmbeddings } from "@langchain/openai";

import initAgent from "./agent";
import { initGraph } from "../graph";


// tag::call[]
export async function call(input: string, sessionId: string): Promise<string> {
  const llm = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const graph = await initGraph();

  const agent = await initAgent(llm, embeddings, graph);
  const res = await agent.invoke({ input }, { configurable: { sessionId } });

  return res;
}
// end::call[]
