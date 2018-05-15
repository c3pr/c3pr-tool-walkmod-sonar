module.exports = { 
    tool_id: "walkmod-sonar:DeclarationsShouldUseCollectionInterfaces",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:DeclarationsShouldUseCollectionInterfaces -i #{filename}",
    toolMeta: {rule: "sonar:DeclarationsShouldUseCollectionInterfaces"},
    prTitle: "DeclarationsShouldUseCollectionInterfaces",
    prBody: `
DeclarationsShouldUseCollectionInterfaces
`
};