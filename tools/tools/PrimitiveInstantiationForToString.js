module.exports = { 
    tool_id: "walkmod-sonar:PrimitiveInstantiationForToString",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:PrimitiveInstantiationForToString -i #{filename}",
    toolMeta: {rule: "sonar:PrimitiveInstantiationForToString"},
    prTitle: "PrimitiveInstantiationForToString",
    prBody: `
PrimitiveInstantiationForToString
`
};