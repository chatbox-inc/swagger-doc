module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
        "parser": "babel-eslint"
    },
    // add your custom rules here
    rules: {
        "vue/max-attributes-per-line": "off",
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 1,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 1
    }
}
