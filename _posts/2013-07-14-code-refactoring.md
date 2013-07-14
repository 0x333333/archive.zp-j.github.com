---
layout: post
title: "Code refactoring (1)"
description: "The first step of code refactoring"
category: "Programming"
tags: ["php"]
---

<blockquote>
  <p>I'm refactoring my code in Bastille Day</p>
  <small>Zhipeng JIANG</small>
</blockquote>

![Profile](https://upload.wikimedia.org/wikipedia/commons/b/bf/Fireworks_on_the_Danube_Bastille_Day_2008.jpg)

- 经验不足，分析设计不到位
- 敏捷开发，虽然经验很多，但为了快速开发，没有经过分析设计
- 缺乏意识，只为实现功能而写代码，不管代码质量

对于这样的代码，我们怎样将其变得更为精炼和易于维护呢？这就是代码重构。重构不是针对功能，纯粹是对代码本身。重构后的代码不会影响到系统的运行。

我们来看看可以在哪些方面对代码进行重构：

- 重命名：对类，接口，方法，属性等重命名，以使得更易理解
- 抽取代码：将方法内的一段代码抽取为另一个方法，以使得该段代码可以被其他方法调用，这是重构中很重要很常用的，此举可以极大的精炼代码，减少方法的代码行数
- 封装字段：将类的某个字段转换成属性，可以更加合理的控制字段的访问
- 抽取接口：将类的某些属性，方法抽取组成个接口，该类自动实现该接口
- 提升方法内的局部变量为方法的参数：这主要是在写代码的过程中会使用到
- 删除参数：将方法的一个或多个参数删掉
- 重排参数：将方法的参数顺序重新排列

实际应用中，用的最多的是1、2、3，我们可以在写代码的时候有意识的运用代码重构，这样当我们完成编码时代码的质量也能得到保证。

