import core from "@actions/core";
import github from "@actions/github";
import fetch from "node-fetch";

async function createIssue(title, body, assignees) {
  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;
  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  const data = { title, body, assignees };
  console.log("Logs: ", title, body, assignees);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to create issue: ${response.status} ${response.statusText}`
    );
  }
  const result = await response.json();
  return result;
}

async function run() {
  try {
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");
    await createIssue(title, body, assignees);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
