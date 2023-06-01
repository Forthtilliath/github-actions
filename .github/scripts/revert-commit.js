module.exports = async ({ github, context }) => {
  const sha = context.sha;
  const { data: commit } = await github.git.getCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: sha,
  });
  const treeSha = commit.tree.sha;
  const parentSha = commit.parents[0].sha;
  const message = `Revert "${commit.message}"\n\nThis reverts commit ${sha}.`;
  const { data: newCommit } = await github.git.createCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    message: message,
    tree: treeSha,
    parents: [parentSha],
  });
  await github.git.updateRef({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: `heads/${context.ref.split("/").slice(2).join("/")}`,
    sha: newCommit.sha,
    force: true,
  });
};
