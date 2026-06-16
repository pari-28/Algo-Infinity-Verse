document.addEventListener("DOMContentLoaded", () => {
  const analyzeBtn = document.getElementById("analyzeBtn");

  analyzeBtn.addEventListener("click", () => {
    const text =
      document.getElementById("problemInput")
      .value
      .toLowerCase();

    let pattern = "General DSA";
    let subProblems = "Understand constraints";
    let template = "Basic Problem Solving";
    let similar = "Two Sum";

    if (text.includes("substring")) {
      pattern = "Sliding Window";
      subProblems =
        "Maintain window, track frequency";
      template = "Sliding Window Template";
      similar =
        "Longest Substring Without Repeating Characters";
    }

    else if (text.includes("tree")) {
      pattern = "Tree Traversal";
      subProblems =
        "Visit nodes and process children";
      template = "DFS/BFS Template";
      similar =
        "Binary Tree Level Order Traversal";
    }

    else if (text.includes("graph")) {
      pattern = "Graph Algorithms";
      subProblems =
        "Model graph and traverse";
      template = "BFS/DFS Graph Template";
      similar =
        "Number of Islands";
    }

    document.getElementById("patternType").textContent =
      pattern;

    document.getElementById("subProblems").textContent =
      subProblems;

    document.getElementById("templateType").textContent =
      template;

    document.getElementById("similarProblems").textContent =
      similar;
  });

  console.log("Problem Deconstructor AI Loaded");
});