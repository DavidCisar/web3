const { execSync } = require("child_process");

const commits = execSync("git log origin/main..HEAD --pretty=format:%s").toString().split("\n");

const commitRegex = /^(feat|fix|docs|style|refactor|test|chore)\([\w-]+\): .{1,50}$/;

let valid = true;

for (const commit of commits) {
  if (!commitRegex.test(commit)) {
    console.error(`❌ Invalid commit message: "${commit}"`);
    valid = false;
  }
}

if (!valid) process.exit(1);