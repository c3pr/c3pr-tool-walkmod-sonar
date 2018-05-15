module.exports = { 
    tool_id: "walkmod-sonar:LocalVarsShouldComplyWithNamingConvention",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:LocalVarsShouldComplyWithNamingConvention -i #{filename}",
    toolMeta: {rule: "sonar:LocalVarsShouldComplyWithNamingConvention"},
    prTitle: "LocalVarsShouldComplyWithNamingConvention",
    prBody: `
LocalVarsShouldComplyWithNamingConvention
`
};