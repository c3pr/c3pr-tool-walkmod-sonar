module.exports = { 
    tool_id: "walkmod-sonar:RemoveCodeComment",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveCodeComment -i #{filename}",
    toolMeta: {rule: "sonar:RemoveCodeComment"},
    prTitle: "RemoveCodeComment",
    prBody: `
RemoveCodeComment
`
};