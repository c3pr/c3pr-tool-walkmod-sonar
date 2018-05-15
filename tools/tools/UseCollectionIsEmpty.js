module.exports = { 
    tool_id: "walkmod-sonar:UseCollectionIsEmpty",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:UseCollectionIsEmpty -i #{filename}",
    toolMeta: {rule: "sonar:UseCollectionIsEmpty"},
    prTitle: "UseCollectionIsEmpty",
    prBody: `
UseCollectionIsEmpty
`
};