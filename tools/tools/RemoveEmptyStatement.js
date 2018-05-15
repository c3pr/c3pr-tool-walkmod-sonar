module.exports = { 
    tool_id: "walkmod-sonar:RemoveEmptyStatement",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveEmptyStatement -i #{filename}",
    toolMeta: {rule: "sonar:RemoveEmptyStatement"},
    prTitle: "RemoveEmptyStatement",
    prBody: `
RemoveEmptyStatement
`
};