module.exports = {
    "plugins": ["jest"],
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:jest/recommended"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
