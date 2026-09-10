const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

async function commitRepo(message) {
  const repoPath = path.resolve(process.cwd(), ".jyotiGit");
  const stagedPath = path.join(repoPath, "staging");
  const commitPath = path.join(repoPath, "commits");

  try {
    const commitID = uuidv4();
    const commitDir = path.join(commitPath, commitID);
    await fs.mkdir(commitDir, { recursive: true }); //creating folder

    const files = await fs.readdir(stagedPath); // reading the files inside staging folder
    //copying the files to commit directory
    for (const file of files) {
      await fs.copyFile(
        path.join(stagedPath, file),
        path.join(commitDir, file),
      );
    }
    //making a JSON file to keep track of all the commits
    await fs.writeFile(
      path.join(commitDir, "commit.json"),
      JSON.stringify({ message, date: new Date().toISOString() }),
    );
    console.log(`Commit ${commitID} created with message : ${message}`);
  } catch (err) {
    console.log("Error commiting Files : ", err);
  }
}

module.exports = { commitRepo };
