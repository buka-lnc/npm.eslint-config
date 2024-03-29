module.exports = {
  "rules": {
    "no-confusing-arrow": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": ["error", { "boolean": false }],
    "no-lonely-if": "error",
    "no-unneeded-ternary": "error",
    "no-useless-computed-key": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2
      }
    ],
    "no-multi-spaces": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",

    "prefer-const": "error",
    "prefer-template": "error",
    "prefer-object-spread": "error",

    "line-comment-position": ["error", "above"],
    // 会导致vscode的vim插件的gcc指令无法解除注释
    // "multiline-comment-style": ["error", "starred-block"],
    // typescript 的特殊注释需要三个反斜杠
    "spaced-comment": ["error", "always", { "markers": ['/'] }],

    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],

    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "arrow-body-style": ["error", "as-needed"],

    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],

    "func-call-spacing": ["error", "never"],
    "function-call-argument-newline": ["error", "consistent"],

    "key-spacing": [
      "error",
      {
        "afterColon": true,
        "beforeColon": false,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],

    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": [
      "error",
      {
        "multiline": true,
        "consistent": true
      }
    ],

    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],

    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    "switch-colon-spacing": ["error", { "after": true, "before": false }],
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "implicit-arrow-linebreak": "error",

    "indent": [
      "error",
      2,
      {
        "MemberExpression": 1,
        "ignoredNodes": [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ]
      }
    ],
    "one-var-declaration-per-line": ["error", "initializations"],
    "padded-blocks": ["error", "never"],
    "jsx-quotes": ["error", "prefer-double"],
    "new-parens": "error",
    "brace-style": ["error", "1tbs"],
    "eol-last": ["error", "always"],
    "curly": ["error", "multi-line", "consistent"],
    "quote-props": ["error", "as-needed"],
    "yoda": ["error", "never"],
    "semi": ["error", "never"],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }]
  }
}
