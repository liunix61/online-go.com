/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        // 110 errors, can be enabled with eslint --fix
    //    "@typescript-eslint/member-delimiter-style": [
    //        "error",
    //        {
    //            "multiline": {
    //                "delimiter": "semi",
    //                "requireLast": true
    //            },
    //            "singleline": {
    //                "delimiter": "semi",
    //                "requireLast": false
    //            }
    //        }
    //    ],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        // 561 errors, can be enabled with eslint --fix
    //    "@typescript-eslint/semi": [
    //        "error",
    //        "always"
    //    ],
        // 1166 errors, can be enabled with eslint --fix
    //    "@typescript-eslint/type-annotation-spacing": "error",
        // Again, couldn't find a rule that works with existing code, but
        // 974 errors, can be enabled with eslint --fix
    //    "brace-style": [
    //        "error",
    //        "stroustrup"
    //    ],
        "computed-property-spacing": ["error", "never"],
        "curly": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        // 16243 errors, can be enabled with eslint --fix
        // "indent": [
        //     "error",
        //     4,
        //     {
        //         "SwitchCase": 1,
        //         "MemberExpression": 0,
        //         "ignoredNodes": ["ConditionalExpression"]
        //     }
        // ],
        "jsdoc/check-alignment": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-debugger": "error",
        "no-eval": "error",
        // Using the typescript-eslint version of this rule because of class
        // properties, which are not yet supported in ESLint.  For more info,
        // see: https://github.com/typescript-eslint/typescript-eslint/issues/491
        "@typescript-eslint/no-invalid-this": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 3
            }
        ],
        "no-new-wrappers": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        // 56 errors, can be enabled with eslint --fix
    //    "no-var": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow-callback": [
            "error",
            { "allowNamedFunctions": true }
        ],
        "semi": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "use-isnan": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "file-header": [
                        true,
                        "[Cc]opyright ([(][Cc][)])?\\s*\\d{4}"
                    ],
                    "import-spacing": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator"
                    ]
                }
            }
        ]
    },
    "overrides": [
        {
            "files": ["*.test.ts", "*.test.tsx"],
            // since test files are not part of tsconfig.json,
            // parserOptions.project must be unset
            "parserOptions": {
                "project": null,
            },
            "rules": {
                // rules that depend on type information (and therefore
                // parserOptions.project)
                "@typescript-eslint/no-floating-promises": "off",
                "@typescript-eslint/tslint/config": "off",
            }
        }
    ]
};
