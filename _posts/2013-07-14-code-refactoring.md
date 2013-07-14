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

开发人员可能听到过"bad smell"这个词，这个词用在软件编码中是什么意思呢？ 代码还有smell吗？当然没有，正如计算机病毒，bug等词一样，这只是个形象的说法。这个词在这里的意思是代码实现了需求，但是代码却不精炼，冗余，结构混乱，难读懂，难维护，难扩展等等。与之相对应的一个词是"refactor"，即代码重构。我们在看些外国人写的程序时可以发现，他们的代码里一般会定义大量的类、接口、方法，类与类，类与接口之间很多是继承和实现的关系，方法的代码行数很少，超过20行代码的方法不多，传说中有各80*80规则。看他们的代码感觉最多的就是方法之间的调来调去，不像我们的代码，一个方法下来几十上百甚至两三百行都是最基本的语句构成，很少调用自己的方法。两相比较，可以看出，前者在结构上更清晰，通过类视图就可看出设计意图，并且总的代码量不会高于后者，而后者代码量庞大，代码冗余现象严重，结构不清晰，很难维护，如要修改某个错误，可能涉及到要修改的代码点很多，这样后来的维护者就很头疼了。造成这种状况的原因有这样一些：

- 经验不足，分析设计不到位
- 敏捷开发，虽然经验很多，但为了快速开发，没有经过分析设计
- 缺乏意识，只为实现功能而写代码，不管代码质量

对于这样的代码，我们怎样将其变得更为精炼和易于维护呢？这就是代码重构。重构不是针对功能，纯粹是对代码本身。重构后的代码不会影响到系统的运行。


