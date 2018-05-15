module.exports = { 
    tool_id: "walkmod-sonar:RemoveLiteralBoolean",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RemoveLiteralBoolean -i #{filename}",
    toolMeta: {rule: "sonar:RemoveLiteralBoolean"},
    prTitle: "RemoveLiteralBoolean",
    prBody: `
RemoveLiteralBoolean
`
};