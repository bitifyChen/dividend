module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修覆錯誤
        'docs', // 文檔變更
        'style', // 代碼格式（不影響功能，例如空格、分號等格式修正，樣式修正）
        'refactor', // 代碼重構（不包括 bug 修覆、功能新增）
        'perf', // 性能優化
        'test', // 添加測試或已有測試改動
        'build', // 構建流程、外部依賴變更（如升級 npm 包、修改config配置等）
        'ci', // 修改 CI 配置、腳本
        'revert', // commit 退回
        'chore' // 對構建過程或輔助工具和庫的更改（不影響源文件、測試用例）
      ]
    ]
  },
  prompt: {
    messages: {
      type: '選擇你要提交的類型 :',
      scope: '選擇一個提交範圍（可選）:',
      customScope: '請輸入自定義的提交範圍 :',
      subject: '填寫簡短精煉的變更描述 :\n',
      body: '填寫更加詳細的變更描述（可選）。使用 "|" 換行:\n',
      breaking: '列舉非兼容性重大的變更（可選）。使用 "|" 換行 :\n',
      footerPrefixesSelect: '選擇關聯issue前綴（可選）:',
      customFooterPrefix: '輸入自定義issue前綴:',
      footer: '列舉關聯issue (可選) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通過 AI 生成你的提交簡短描述:',
      generatedSelectByAI: '選擇一個 AI 生成的簡短描述:',
      confirmCommit: '是否提交或修改commit ?'
    },
    // prettier-ignore
    types: [
        { value: "feat",     name: "新增:     ✨  新增功能", emoji: ":sparkles:" },
        { value: "fix",      name: "修覆:     🐛  修覆錯誤", emoji: ":bug:" },
        { value: "docs",     name: "文檔:     📝  文檔變更", emoji: ":memo:" },
        { value: "style",    name: "格式:     💄  代碼格式（不影響功能，例如空格、分號等格式修正，樣式修正）", emoji: ":lipstick:" },
        { value: "refactor", name: "重構:     ♻️  代碼重構（不包括 bug 修覆、功能新增）", emoji: ":recycle:" },
        { value: "perf",     name: "性能:     ⚡️  性能優化", emoji: ":zap:" },
        { value: "test",     name: "測試:     ✅  添加測試或已有測試改動", emoji: ":white_check_mark:"},
        { value: "build",    name: "構建:     📦️  構建流程、外部依賴變更（如升級'npm'包、修改config配置等）", emoji: ":package:"},
        { value: "ci",       name: "集成:     🎡  修改 CI 配置、腳本",  emoji: ":ferris_wheel:"},
        { value: "revert",   name: "退回:     ⏪️  commit退回",emoji: ":rewind:"},
        { value: "chore",    name: "其他:     🔨  對構建過程或輔助工具和庫的更改（不影響源文件、測試用例）", emoji: ":hammer:"},
      ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' }
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
