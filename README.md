# Backbone.jsでSingle page アプリケーションを作る方法
### How to build single page application with Backbone.js

=================
## <a name='mokuji'>目次</a>
1. [はじめに](#intro)
1. [ワイアーフレーム](#wireframe)
1. [ページ構成](#pageStructure)
1. [View統治ポリシー](#viewManagePolicies)
1. [Gruntタスク作成](#grunt)
1. [ワイアーフレーム作成](#makeWireframe)
1. [イベント統治ポリシー](#eventManagePolicies)
1. [SearchBarからHistoryへのイベント伝播](#searchToHistory)
1. [HistoryからSearchResultへのイベント伝播](#historyToResult)
1. [SearchBarからSearchResultへのイベント伝播](#searchToResult)
1. [Tabから他のViewへのイベント伝播](#tabToOther)
1. [仕上げ](#finish)
1. [まとめ](#summary)
 
## <a name='intro'>はじめに</a>

Backbone.jsでアプリケーションを作成した際に、Viewが大きくなるという経験をしたことがある方も多いと思います。Viewが肥大化した場合、私達はViewをある単位の塊りで分割しようと試みるのですが、どのように分割するのが最善かという事は常に頭を悩ませるポイントです。

さらに、Viewを細かく分割した場合、それらをどのように結合してアプリケーションを作成するのが最善かという、新しい悩みも生まれます。

このチュートリアルでは、これらView分割に起因する問題についての私なりの最善策です。もちろんBackbone.jsでアプリケーションを作る方法は一つではありませし、View以外にまつわる問題が存在することも事実です。今回はそれら別の問題があることも認めつつ、Backbone.jsでアプリケーションを作る上で、まず最初に直面するView分割と結合に重点を置いて説明します。

## <a name='wireframe'>ワイアーフレーム</a>

## <a name='pageStructure'>ページ構成</a>

## <a name='viewManage'>View統治ポリシー</a>

## <a name='grunt'>Gruntタスク作成</a>

## <a name='makeWireframe'>ワイアーフレーム作成</a>

## <a name='eventManage'>イベント統治ポリシー</a>

## <a name='searchToHistory'>SearchBarからHistoryへのイベント伝播</a>

## <a name='historyToResult'>HistoryからSearchResultへのイベント伝播</a>

## <a name='searchToResult'>SearchBarからSearchResultへのイベント伝播</a>

## <a name='tabToOther'>Tabから他のViewへのイベント伝播</a>

## <a name='finish'>仕上げ</a>

## <a name='summary'>まとめ</a>
