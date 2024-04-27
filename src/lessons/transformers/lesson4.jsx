import React from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const TransformersLesson4 = () => {
  const codeString = `import os
  os.environ["HF_HUB_DISABLE_SYMLINKS_WARNING"] = "1"
  
  # Import the necessary libraries
  from transformers import BertTokenizer, BertForSequenceClassification
  import torch
  
  # Load the pre-trained BERT model and tokenizer
  model_name = 'bert-base-uncased'
  tokenizer = BertTokenizer.from_pretrained(model_name)
  model = BertForSequenceClassification.from_pretrained(model_name)
  
  # Define a function for sentiment analysis
  def analyze_sentiment(text):
      # Tokenize the input text
      inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True)
      
      # Pass the input through the model
      outputs = model(**inputs)
      
      # Get the predicted sentiment label
      predicted_label = torch.argmax(outputs.logits).item()
      
      # Map the predicted label to sentiment
      sentiment = 'Positive' if predicted_label == 1 else 'Negative'
      
      return sentiment
  
  # Example usage
  text1 = "I absolutely love this movie! The acting was brilliant and the plot kept me engaged throughout."
  text2 = "The service at this restaurant was terrible. The food was cold and the staff was rude."
  
  # Analyze the sentiment of the example texts
  sentiment1 = analyze_sentiment(text1)
  sentiment2 = analyze_sentiment(text2)
  
  # Print the results
  print(f"Text 1: {text1}")
  print(f"Sentiment: {sentiment1}")
  print()
  print(f"Text 2: {text2}")
  print(f"Sentiment: {sentiment2}")
  `;
  return (
    <div className="module-content container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          Introduction to BERT and GPT
        </h1>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Exploring BERT (Bidirectional Encoder Representations from
          Transformers)
        </h3>
        <p>
          BERT is a groundbreaking model in the field of natural language
          processing developed by Google. It is designed to pre-train deep
          bidirectional representations by conditioning on both left and right
          context in all layers. As a result, the pre-trained BERT model can be
          fine-tuned with just one additional output layer to create
          state-of-the-art models for a wide range of tasks, such as question
          answering and language inference, without substantial task-specific
          architecture modifications.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Understanding GPT (Generative Pre-trained Transformer)
        </h3>
        <p>
          GPT, developed by OpenAI, is an autoregressive language model that
          uses deep learning to produce human-like text. It is the direct
          successor to BERT and improves upon its architecture by using a
          left-to-right training approach. GPT's ability to generate coherent
          and contextually relevant text makes it highly effective for tasks
          like text completion, translation, and even creative writing.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Applications of BERT and GPT
        </h3>
        <p>
          Both BERT and GPT have been widely adopted in various applications.
          BERT's bidirectional training is particularly effective for tasks that
          require understanding the context from both directions, which is
          crucial for understanding the intent behind search queries and
          improving search engine results. On the other hand, GPT excels in
          tasks that require creative content generation, such as composing
          poetry, generating news articles, and even creating tutorials.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Impact on the Field of AI
        </h3>
        <p>
          The introduction of models like BERT and GPT has significantly
          advanced the field of artificial intelligence, particularly in
          understanding and generating human language. Their success has spurred
          further research and development in language models, leading to more
          sophisticated systems that continue to push the boundaries of what
          machines can understand and generate.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Example Code: Bert</h3>
        <SyntaxHighlighter
          language="python"
          style={materialLight}
          customStyle={{
            background: "#fff",
            borderRadius: "0.5em",
            padding: "1em",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default TransformersLesson4;
