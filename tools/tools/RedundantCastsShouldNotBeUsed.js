module.exports = { 
    tool_id: "walkmod-sonar:RedundantCastsShouldNotBeUsed",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:RedundantCastsShouldNotBeUsed -i #{filename}",
    toolMeta: {rule: "sonar:RedundantCastsShouldNotBeUsed"},
    prTitle: "RedundantCastsShouldNotBeUsed",
    prBody: `
RedundantCastsShouldNotBeUsed
`
};