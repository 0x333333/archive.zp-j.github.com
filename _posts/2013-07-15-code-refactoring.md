---
layout: post
title: "Code refactoring (2)"
description: "The second step of code refactoring"
category: "Programming"
tags: ["php"]
---

<blockquote>
  <p>It almost freaks me out</p>
  <small>Zhipeng JIANG</small>
</blockquote>

![Profile](http://blog.learnleo.com/wp-content/uploads/2013/06/FreakOut.jpg)

# SOLID (面向对象设计)

## S 单一功能原则	

认为对象应该仅具有一种单一功能的概念。

## O 开闭原则	

认为“软件体应该是对于扩展开放的，但是对于修改封闭的”的概念。

## L 里氏替换原则	

认为“程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换的”的概念。参考 契约式设计。

## I 接口隔离原则	

认为“多个特定客户端接口要好于一个宽泛用途的接口”[5] 的概念。

## D 依赖反转原则	

认为一个方法应该遵从“依赖于抽象而不是一个实例”[5] 的概念。

依赖注入是该原则的一种实现方式。

