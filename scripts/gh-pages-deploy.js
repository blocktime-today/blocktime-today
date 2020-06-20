  const execa = require("execa");
  const fs = require("fs");

  (async () => {
    try {
      await execa("git", ["checkout", "--orphan", "gh-pages"]);
      console.log("Building...");
      await execa("npm", ["run", "build"]);
      await execa("mv", ["dist", "_site/"]);
      // const folderName = fs.existsSync("dist") ? "dist" : "build";
      await execa("bundle", ["exec", "jekyll", "build"]);
      await execa("git", ["--work-tree", "_site", "add", "--all"]);
      await execa("git", ["--work-tree", "_site", "commit", "-m", "gh-pages"]);
      console.log("Pushing to gh-pages...");
      await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
      await execa("rm", ["-r", "_site"]);
      await execa("git", ["checkout", "-f", "master"]);
      await execa("git", ["branch", "-D", "gh-pages"]);
      console.log("Successfully deployed");
    } catch (e) {
      console.log(e.message);
      process.exit(1);
    }
  })();
