module.exports = { 
    tool_id: "walkmod-sonar:AddSwitchDefaultCase",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:AddSwitchDefaultCase -i #{filename}",
    toolMeta: {rule: "sonar:AddSwitchDefaultCase"},
    prTitle: "AddSwitchDefaultCase",
    prBody: `
AddSwitchDefaultCase
`
};