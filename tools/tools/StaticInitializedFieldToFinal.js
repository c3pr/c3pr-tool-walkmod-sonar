module.exports = { 
    tool_id: "walkmod-sonar:StaticInitializedFieldToFinal",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:StaticInitializedFieldToFinal -i #{filename}",
    toolMeta: {rule: "sonar:StaticInitializedFieldToFinal"},
    prTitle: "StaticInitializedFieldToFinal",
    prBody: `
StaticInitializedFieldToFinal
`
};