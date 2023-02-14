# CLI

> ts + commander.js+tsup

##

向脚本传入参数必须用 -- 标明否则无法识别 --separator
eg: "test-cli" : "< script >"

> npm run test-cli split -- --separator=/ a/b/c
> npm run test-cli -- split --separator=/ a/b/c
