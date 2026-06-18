window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");

  if (loader) {
    loader.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const sourceTopic =
    document.getElementById("sourceTopic");

  const targetTopic =
    document.getElementById("targetTopic");

  const showConnectionBtn =
    document.getElementById("showConnectionBtn");

  const sharedConcept =
    document.getElementById("sharedConcept");

  const transferInsight =
    document.getElementById("transferInsight");

  const exampleProblems =
    document.getElementById("exampleProblems");

  if (
    !sourceTopic ||
    !targetTopic ||
    !showConnectionBtn ||
    !sharedConcept ||
    !transferInsight ||
    !exampleProblems
  ) {
    return;
  }

  const connections = {

    "recursion-dp": {
      shared:
        "Breaking problems into smaller subproblems.",

      insight:
        "Dynamic Programming is optimized recursion using memoization and tabulation.",

      examples:
        "Fibonacci, Climbing Stairs, 0/1 Knapsack"
    },

    "trees-graphs": {
      shared:
        "Node-based traversal and relationships.",

      insight:
        "A tree is a special graph without cycles.",

      examples:
        "Level Order Traversal, DFS, BFS"
    },

    "sliding-twoPointers": {
      shared:
        "Efficient range processing.",

      insight:
        "Sliding Window is a specialized form of Two Pointers.",

      examples:
        "Longest Substring, Minimum Window Substring"
    },

    "bfs-dfs": {
      shared:
        "Graph traversal techniques.",

      insight:
        "Both visit nodes systematically but follow different orders.",

      examples:
        "Number of Islands, Connected Components"
    },

    "stack-recursion": {
      shared:
        "Function calls are internally managed using stacks.",

      insight:
        "Recursion uses the call stack implicitly.",

      examples:
        "Tower of Hanoi, DFS Traversal"
    }

  };

  showConnectionBtn.addEventListener("click", () => {

    const source =
      sourceTopic.value;

    const target =
      targetTopic.value;

    if (!source || !target) {
      sharedConcept.setAttribute("role", "status");
      sharedConcept.setAttribute("aria-live", "polite");
      sharedConcept.textContent = "Please select both topics.";
      transferInsight.textContent = "Choose one source and one target topic.";
      exampleProblems.textContent = "-";
      return;
    }
    }

    const key =
      `${source}-${target}`;

    const reverseKey =
      `${target}-${source}`;

    const data =
      connections[key] ||
      connections[reverseKey];

    if (!data) {

      sharedConcept.textContent =
        "No direct relationship available.";

      transferInsight.textContent =
        "Try another pair of topics.";

      exampleProblems.textContent =
        "-";

      return;
    }

    sharedConcept.textContent =
      data.shared;

    transferInsight.textContent =
      data.insight;

    exampleProblems.textContent =
      data.examples;

  });

  console.log(
    "Cross Topic Transfer Trainer Loaded"
  );

});