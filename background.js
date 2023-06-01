chrome.runtime.onInstalled.addListener(async () => {
    const blockRules = await fetch(chrome.runtime.getURL('rules.json'));
    const blockRulesText = await blockRules.text();
    const blockRulesArray = JSON.parse(blockRulesText);
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: blockRulesArray.rules.map((rule) => ({
            id: rule.id,
            priority: rule.priority,
            action: rule.action,
            condition: rule.condition
        }))
    });
});
