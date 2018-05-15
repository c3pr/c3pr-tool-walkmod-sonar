module.exports = { 
    tool_id: "walkmod-sonar:RemoveEmptyMethod",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveEmptyMethod -i #{filename}",
    toolMeta: {rule: "sonar:RemoveEmptyMethod"},
    prTitle: "RemoveEmptyMethod",
    prBody: `
RemoveEmptyMethod
`
};