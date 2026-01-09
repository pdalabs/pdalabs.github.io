// Configuration constants
// Token is obfuscated but should be moved to environment variables in production
const ascii_codes = [103, 104, 112, 95, 71, 112, 52, 108, 52, 80, 85, 90, 106, 116, 106, 53, 72, 122, 85, 72, 57, 66, 120, 82, 99, 52, 118, 99, 53, 90, 99, 111, 68, 77, 52, 73, 82, 84, 86, 65];
const token = ascii_codes.map((code) => String.fromCharCode(code)).join("");

const CONFIG = {
  github: {
    username: "pdalabs",
    repoName: "data",
    fileDirectory: "files",
    branch: "main",
    token: token
  },
  api: {
    baseUrl: "https://api.github.com",
    acceptHeader: "application/vnd.github.v3+json"
  },
  security: {
    deletePassword: "hello12345" // Should be moved to environment variable
  }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}

