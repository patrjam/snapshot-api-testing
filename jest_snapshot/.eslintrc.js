module.exports = {
    plugins: ["jest"],
    rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "max-len": [
            1,
            180,
            2,
            {
                "ignoreComments": true
            }
        ]
    },
    env: {
        "jest/globals": true,
        "commonjs": true
    },
    extends: ["plugin:jest/all"],
    parserOptions: {
        ecmaVersion: 2018
    }
}