module.exports = { 
    tool_id: "walkmod-sonar:AddCurlyBrackets",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:AddCurlyBrackets -i #{filename}",
    toolMeta: {rule: "sonar:AddCurlyBrackets"},
    prTitle: "AddCurlyBrackets",
    prBody: `
AddCurlyBrackets
`
};