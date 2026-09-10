const fs = require("fs").promises;
const path = require("path");

async function addRepo(filePath) {
  const repoPath = path.resolve(process.cwd(), ".jyotiGit");
  const stagingPath = path.join(repoPath, "staging");

  try {
    await fs.mkdir(stagingPath, { recursive: true });
    const fileName = path.basename(filePath); //reeding the file provided by the user
    fs.copyFile(filePath, path.join(stagingPath, fileName));
    console.log(`File ${fileName} added to the staging area!!`);
  } catch (err) {
    console.error("Error adding file : ", err);
  }
}

module.exports = { addRepo };
