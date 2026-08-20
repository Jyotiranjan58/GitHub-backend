const fs = require("fs").promises; //helps in creating files fs=filesystem
const path = require("path"); //to access the current working directory

async function initRepo() {
  const repoPath = path.resolve(process.cwd(), ".jyotiGit"); //creating hidden folder for repositoriea
  const commitsPath = path.join(repoPath, "commits");

  try {
    await fs.mkdir(repoPath, { recursive: true });
    await fs.mkdir(commitsPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({ bucket: process.env.S3_BUCKET }),
    );
    console.log("Repository initialised!!");
  } catch (err) {
    console.error("Error initialising repository : ", err);
  }
}

module.exports = { initRepo };
