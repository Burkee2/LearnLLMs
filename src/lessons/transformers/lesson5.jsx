import React from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const TransformersLesson5 = () => {
  const codeString = `!pip install transformers[torch]

  # Import necessary libraries
  from transformers import BertTokenizer, BertForSequenceClassification
  from transformers import Trainer, TrainingArguments
  from torch.utils.data import Dataset
  import torch
  
  # Sample data: list of sentences and their labels (0 = negative, 1 = positive)
  data = [
      ("I love this product!", 1),
      ("This is a terrible item.", 0),
      ("I will definitely buy this again!", 1),
      ("I really hate this thing!", 0),
      ("What a wonderful experience!", 1),
      ("Worst purchase ever!", 0),
      ("Highly recommended!", 1),
      ("Not worth the money!", 0),
      ("I am so happy with this purchase!", 1),
      ("This was a big disappointment.", 0)
  ]
  
  # Create a dataset class
  class SentimentDataset(Dataset):
      def __init__(self, data):
          self.tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
          self.data = [
              self.tokenizer(text, padding='max_length', max_length=512, truncation=True, return_tensors="pt")
              for text, _ in data
          ]
          self.labels = [label for _, label in data]
  
      def __len__(self):
          return len(self.data)
  
      def __getitem__(self, idx):
          item = {key: val.squeeze() for key, val in self.data[idx].items()}
          item['labels'] = torch.tensor(self.labels[idx])
          return item
  
  # Load pre-trained BERT model
  model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
  
  # Prepare training arguments
  training_args = TrainingArguments(
      output_dir='./results',
      num_train_epochs=3,
      per_device_train_batch_size=2,
      warmup_steps=500,
      weight_decay=0.01,
      logging_dir='./logs',
      logging_steps=10,
  )
  
  # Initialize dataset
  train_dataset = SentimentDataset(data)
  
  # Initialize Trainer
  trainer = Trainer(
      model=model,
      args=training_args,
      train_dataset=train_dataset,
  )
  
  # Train the model
  trainer.train()
  `;
  return (
    <div className="module-content container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          Fine-tuning Transformers for Specific Tasks
        </h1>

        <h3 className="text-xl font-semibold mt-6 mb-2">Objective</h3>
        <p>
          Learn how to fine-tune pre-trained transformer models for custom NLP
          tasks such as sentiment analysis, question answering, and more.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          The Concept of Transfer Learning
        </h3>
        <p>
          Transfer learning involves taking a model that has been trained on a
          large dataset and fine-tuning it to adapt to a more specific task.
          This approach is particularly effective in NLP due to the extensive
          and diverse nature of language, which requires substantial data to
          model effectively. Pre-trained models like BERT and GPT have general
          capabilities that, when fine-tuned, can be directed towards specific
          tasks with relatively little additional data.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Fine-Tuning Process</h3>
        <p>
          Fine-tuning a transformer model typically involves a few key steps:
          <ul>
            <li>
              <strong>Choosing a Pre-trained Model:</strong> Select a model that
              best fits the nature of the task based on its training and
              capabilities.
            </li>
            <li>
              <strong>Preparing Data:</strong> Customize your dataset to include
              examples that are representative of the task at hand.
            </li>
            <li>
              <strong>Modifying the Model:</strong> Adjust the model
              architecture if necessary, particularly the output layers, to
              align with the specific outputs required for the task.
            </li>
            <li>
              <strong>Training:</strong> Continue training the model on the new
              dataset, allowing it to adjust its weights to better perform the
              specific task.
            </li>
          </ul>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Applications and Examples
        </h3>
        <p>
          Fine-tuned transformers are used in a variety of applications. For
          instance, BERT has been fine-tuned for legal document analysis,
          customer sentiment analysis, and even to answer specific medical
          questions. GPT, on the other hand, has been adapted for creative
          writing and even generating code.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">
          Example Code: Finetuning a model
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

export default TransformersLesson5;
