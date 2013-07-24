---
layout: post
title: "phpunit test (1)"
description: ""
category: "Programming"
tags: ["PHP", "phpunit"]
---

{% include JB/setup %}

![phpunitLogo](http://clivemind.com/wp-content/uploads/2012/07/logo.png)

### Some frequently used assertions

    AssertTrue/AssertFalse    断言是否为真值还是假
    AssertEquals    判断输出是否和预期的相等
    AssertGreaterThan    断言结果是否大于某个值，同样的也有LessThan(小于),GreaterThanOrEqual(大于等于)，
    LessThanOrEqual(小于等于).
    AssertContains    判断输入是否包含指定的值
    AssertType    判断是否属于指定类型
    AssertNull    判断是否为空值
    AssertFileExists    判断文件是否存在
    AssertRegExp    根据正则表达式判断