module.exports ={
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-strongly-recommended', //Lv2
    // 'plugin:vue/vue3-recommended',

    // js
    'eslint:recommended'
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)  
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: 'module',
  },

  // 추가적인 코드 규칙을 설정
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/multi-word-component-names': 0    
  }  
}