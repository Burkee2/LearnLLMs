import React from "react";
import "../index.css";

const Welcome = () => (
  <div className=" module-content p-10 text-center">
    <h1 className="text-3xl font-bold underline mb-4">
      Welcome to the AI School
    </h1>
    <p className="mb-4">
      This course will introduce you to the basics and advanced concepts of
      Large Language Models (LLMs) using Transformers. You will learn about the
      architecture, functionality, and applications of models like BERT and GPT.
      Some coding examples and exercises will be provided in Jupyter Notebook to
      enhance your learning experience.
    </p>
    <h2 className="text-2xl font-bold mt-6">Getting Started with JupyterLab</h2>
    <p className="mb-2">
      To follow along with the Code examples, you will need to install
      JupyterLab. Here’s how you can set it up:
    </p>
    <div className="text-left mx-auto max-w-4xl bg-gray-400 p-4 rounded">
      <h3 className="font-semibold">Installation:</h3>
      <p>Install JupyterLab using pip:</p>
      <code className="block bg-gray-500 p-2 rounded">
        pip install jupyterlab
      </code>

      <h3 className="font-semibold mt-4">Launching JupyterLab:</h3>
      <p>Once installed, you can launch JupyterLab with:</p>
      <code className="block bg-gray-500 p-2 rounded">jupyter lab</code>
    </div>
    <p className="mt-4">
      Enjoy your journey through the fascinating world of transformers and
      machine learning!
    </p>
  </div>
);

export default Welcome;
