const fullToolDefintions = [
    require('./tools/AddCurlyBrackets'),
    require('./tools/AddSwitchDefaultCase'),
    require('./tools/ArrayDesignatorOnType'),
    require('./tools/CollapsibleIfStatements'),
    require('./tools/DeclarationsShouldUseCollectionInterfaces'),
    require('./tools/LocalVarsShouldComplyWithNamingConvention'),
    require('./tools/PrimitiveInstantiationForToString'),
    require('./tools/RedundantCastsShouldNotBeUsed'),
    require('./tools/RemoveCodeComment'),
    require('./tools/RemoveEmptyMethod'),
    require('./tools/RemoveEmptyStatement'),
    require('./tools/RemoveLiteralBoolean'),
    require('./tools/RemoveUnusedMethodParameters'),
    require('./tools/RemoveUselessImports'),
    require('./tools/RemoveUselessParentheses'),
    require('./tools/RemoveUselessVariables'),
    require('./tools/StaticInitializedFieldToFinal'),
    require('./tools/StringCheckOnLeft'),
    require('./tools/UseCollectionIsEmpty'),
    require('./tools/UseStringEquals'),
    require('./tools/VariableImmediatelyReturned')
];

const toolsSummary = fullToolDefintions.map(({tool_id, extensions, tags}) => ({tool_id, extensions, tags}));

module.exports = {
    summary: toolsSummary,
    tools: fullToolDefintions
};