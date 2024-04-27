import React from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const TransformersLesson3 = () => {
  const codeString = `import sys
  !{sys.executable} -m pip install torch
  !{sys.executable} -m pip install matplotlib
  import numpy as np
  
  import torch
  import torch.nn as nn
  import matplotlib.pyplot as plt
  from torch.nn import TransformerEncoder, TransformerEncoderLayer
  def positional_encoding(positions, d_model):
    """ Generate positional encoding for a given size and dimension """
    angle_rates = 1 / np.power(10000, (2 * (np.arange(d_model)[np.newaxis, :] // 2)) / np.float32(d_model))
    angle_rads = positions[:, np.newaxis] * angle_rates

    # apply sin to even indices in the array; 2i
    sines = np.sin(angle_rads[:, 0::2])
    # apply cos to odd indices in the array; 2i+1
    cosines = np.cos(angle_rads[:, 1::2])

    pos_encoding = np.concatenate([sines, cosines], axis=-1)
    return pos_encoding
    positions = 50  # Number of positions to encode
d_model = 16    # Dimensionality of the encoding

pos_encoding = positional_encoding(np.arange(positions), d_model)
plt.figure(figsize=(10, 8))
plt.imshow(pos_encoding, cmap='hot')
plt.title("Positional Encoding")
plt.xlabel("Depth")
plt.ylabel("Position")
plt.colorbar()
plt.show()
  `;

  return (
    <div className="module-content container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          The Architecture of Transformers
        </h1>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Overview of Transformer Architecture
        </h3>
        <p>
          Transformers are a type of neural network architecture that are
          distinctively suited for processing sequential data, particularly for
          tasks like natural language processing. Unlike previous models that
          processed data sequentially (like RNNs and LSTMs), transformers
          process entire sequences of data in parallel. This parallel processing
          capability allows transformers to significantly improve speed and
          efficiency in model training and execution.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Key Components of Transformers
        </h3>
        <p>
          The transformer model consists of several key components:
          <ul>
            <li>
              <strong>Self-Attention Mechanism:</strong> This allows the model
              to weigh the importance of different words relative to each other
              in a sentence, regardless of their positional distance from each
              other.
            </li>
            <li>
              <strong>Positional Encoding:</strong> Since transformers do not
              process data sequentially, positional encodings are added to give
              the model some information about the order of the words in the
              sentence.
            </li>
            <li>
              <strong>Encoder and Decoder Layers:</strong> The encoder processes
              the input data and the decoder generates the output. Each layer in
              both the encoder and decoder contains a self-attention mechanism
              and a feed-forward neural network.
            </li>
          </ul>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How Transformers Process Data
        </h3>
        <p>
          In a transformer, the input data passes through a series of encoder
          layers that generate a set of attention-based representations. These
          representations are then used by the decoder layers to generate the
          output. The self-attention mechanism within the encoders and decoders
          allows the model to consider the entire input sequence simultaneously,
          which is a major advantage over traditional models that must process
          data one component at a time.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Applications and Impact
        </h3>
        <p>
          Transformers have been highly successful in a variety of NLP tasks,
          such as machine translation, text summarization, and sentiment
          analysis. Their ability to handle long-range dependencies and their
          efficiency at scale make them ideal for working with large amounts of
          text data.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">
          Example Code: Encoder
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

export default TransformersLesson3;
