module.exports = { 
    tool_id: "walkmod-sonar:RemoveUselessImports",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveUselessImports -i #{filename}",
    toolMeta: {rule: "sonar:RemoveUselessImports"},
    prTitle: "RemoveUselessImports",
    prBody: `
RemoveUselessImports
`
};