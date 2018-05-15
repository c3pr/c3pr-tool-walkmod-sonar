module.exports = { 
    tool_id: "walkmod-sonar:RemoveUselessVariables",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveUselessVariables -i #{filename}",
    toolMeta: {rule: "sonar:RemoveUselessVariables"},
    prTitle: "RemoveUselessVariables",
    prBody: `
RemoveUselessVariables
`
};