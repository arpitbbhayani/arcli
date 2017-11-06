let configInstance = {};

module.exports = {
    add(configurations) {
        configInstance = {
            ...configInstance,
            ...configurations,
        };
    },
    get(key, defaultValue) {
        const tokens = key.split('.');
        let tempConfig = configInstance;
        for (let i = 0; i < tokens.length; i += 1) {
            const token = tokens[i];
            tempConfig = tempConfig[token];
            if (tempConfig === undefined) {
                return defaultValue;
            }
        }
        return tempConfig;
    },
};
