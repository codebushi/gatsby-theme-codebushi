const fs = require("fs");

// Make sure the posts directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = `content/posts`;
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};
