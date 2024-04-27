import React from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const TransformersLesson2 = () => {
  const codeString = `import sys
!{sys.executable} -m pip install numpy
import numpy as np
!{sys.executable} -m pip install scipy
from scipy.special import softmax

# Define word embeddings (simulated for simplicity)
word_embeddings = np.array([
    [1, 0, 0],  # Word 1
    [0, 1, 0],  # Word 2
    [1, 1, 0],  # Word 3
    [0, 0, 1]   # Word 4
])

# Randomly generate weights for Query (Q), Key (K), and Value (V) matrices
np.random.seed(42)
W_Q = np.random.randint(5, size=(3, 3))
W_K = np.random.randint(5, size=(3, 3))
W_V = np.random.randint(5, size=(3, 3))

# Compute queries, keys, values
Q = np.dot(word_embeddings, W_Q)
K = np.dot(word_embeddings, W_K)
V = np.dot(word_embeddings, W_V)

# Calculate attention scores
attention_scores = np.dot(Q, K.T)
attention_weights = softmax(attention_scores, axis=1)

# Compute the attention output
attention_output = np.dot(attention_weights, V)

print("Attention Weights:\\n", attention_weights)
print("Attention Output:\\n", attention_output)`;

  return (
    <div className="module-content container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          Understanding the Attention Mechanism
        </h1>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          What is the Attention Mechanism?
        </h3>
        <p>
          The attention mechanism is a critical innovation in the field of
          machine learning that allows models, particularly in natural language
          processing (NLP), to focus on specific parts of the input when
          generating output. This mechanism is akin to how human attention
          works, selectively concentrating on certain aspects while ignoring
          others.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How Attention Improves Model Performance
        </h3>
        <p>
          In traditional sequence models like RNNs and LSTMs, the model
          processes inputs sequentially, which can lead to issues like the
          vanishing gradient problem and difficulty in capturing long-range
          dependencies. Attention mechanisms overcome these limitations by
          dynamically focusing on different parts of the input sequence,
          enabling the model to capture complex relationships in data,
          regardless of input size.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Types of Attention Mechanisms
        </h3>
        <p>
          There are several types of attention mechanisms, including but not
          limited to:
          <ul>
            <li>
              <strong>Self-Attention:</strong> Allows the model to associate
              each word in the input with other words.
            </li>
            <li>
              <strong>Global Attention:</strong> Considers all previous states
              of the decoder when predicting the next word.
            </li>
            <li>
              <strong>Local Attention:</strong> Focuses only on a subset of
              source positions per step of the decoder.
            </li>
          </ul>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Applications of Attention in Transformers
        </h3>
        <p>
          Attention mechanisms are a cornerstone of transformer models, which
          are used in a variety of NLP tasks such as translation, text
          summarization, and sentiment analysis. The flexibility and efficiency
          of attention mechanisms allow transformers to achieve state-of-the-art
          results on many benchmarks.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">
          Example Code: Attention Mechanism
        </h3>
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

export default TransformersLesson2;
