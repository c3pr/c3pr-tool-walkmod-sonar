module.exports = { 
    tool_id: "walkmod-sonar:CollapsibleIfStatements",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:CollapsibleIfStatements -i #{filename}",
    toolMeta: {rule: "sonar:CollapsibleIfStatements"},
    prTitle: "CollapsibleIfStatements",
    prBody: `
CollapsibleIfStatements
`
};