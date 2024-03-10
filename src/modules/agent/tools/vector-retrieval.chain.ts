import { DocumentInterface } from "@langchain/core/documents";
import { Embeddings } from "@langchain/core/embeddings";
import { Runnable } from "@langchain/core/runnables";
import { BaseLanguageModel } from "langchain/base_language";

import { AgentToolInput } from "../agent.types";
import initVectorStore from "../vector.store";

// tag::throughput[]
type RetrievalChainThroughput = AgentToolInput & {
  context: string;
  output: string;
  ids: string[];
};
// end::throughput[]

// tag::extractDocumentIds[]
// Helper function to extract document IDs from Movie node metadata
const extractDocumentIds = (
  documents: DocumentInterface<{ _id: string; [key: string]: any }>[]
): string[] => documents.map((document) => document.metadata._id);
// end::extractDocumentIds[]

// tag::docsToJson[]
// Convert documents to string to be included in the prompt
const docsToJson = (documents: DocumentInterface[]) =>
  JSON.stringify(documents);
// end::docsToJson[]

// tag::function[]
export default async function initVectorRetrievalChain(
  llm: BaseLanguageModel,
  embeddings: Embeddings
): Promise<Runnable<AgentToolInput, string>> {
  const vectorStore = await initVectorStore(embeddings);

  // TODO: Initialize a retriever wrapper around the vector store
  // const vectorStoreRetriever = ...
  // TODO: Initialize Answer chain
  // const answerChain = ...
  // TODO: Return chain
  // return RunnablePassthrough.assign( ... )
}
// end::function[]
