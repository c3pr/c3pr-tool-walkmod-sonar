module.exports = { 
    tool_id: "walkmod-sonar:ArrayDesignatorOnType",
    extensions: ["java"],
    tags: ["java"],

    command: "walkmod apply sonar:ArrayDesignatorOnType -i #{filename}",
    toolMeta: {rule: "sonar:ArrayDesignatorOnType"},
    prTitle: "ArrayDesignatorOnType",
    prBody: `
ArrayDesignatorOnType
`
};