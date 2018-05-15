module.exports = { 
    tool_id: "walkmod-sonar:RemoveUnusedMethodParameters",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveUnusedMethodParameters -i #{filename}",
    toolMeta: {rule: "sonar:RemoveUnusedMethodParameters"},
    prTitle: "RemoveUnusedMethodParameters",
    prBody: `
RemoveUnusedMethodParameters
`
};