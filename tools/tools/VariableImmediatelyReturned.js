module.exports = { 
    tool_id: "walkmod-sonar:VariableImmediatelyReturned",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:VariableImmediatelyReturned -i #{filename}",
    toolMeta: {rule: "sonar:VariableImmediatelyReturned"},
    prTitle: "VariableImmediatelyReturned",
    prBody: `
VariableImmediatelyReturned
`
};