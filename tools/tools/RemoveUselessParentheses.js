module.exports = { 
    tool_id: "walkmod-sonar:RemoveUselessParentheses",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveUselessParentheses -i #{filename}",
    toolMeta: {rule: "sonar:RemoveUselessParentheses"},
    prTitle: "RemoveUselessParentheses",
    prBody: `
RemoveUselessParentheses
`
};