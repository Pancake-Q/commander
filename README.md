# CLI

> ts + commander.js+tsup

## eslint && prettier

用 prettier 继承 eslint 功能

eslint --ext .ts,.js ./src --fix 优先--ext 检测在进行--fix

##

向脚本传入参数必须用 -- 标明否则无法识别 --separator
eg: "test-cli" : "< script >"

> npm run test-cli split -- --separator=/ a/b/c
> npm run test-cli -- split --separator=/ a/b/c
