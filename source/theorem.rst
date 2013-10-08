===========
Das Theorem
===========

.. todo:: Eventuell in Definitionen Part auslagern (Links innerhalb von Sphinx auf die Begriffe)
.. todo:: Beweis das der k-Turàn Graph größer als jeder vollständige k-partite Graph ist muss noch rein (Sei G ein Graph ohne p-Clique. Dann besitzt G höchstens so viele Kanten wie der (p-1) Turàn Graph ( mit p = 2 anfangen))
.. todo:: Was meinte ich mit Kanten shiften?


*****************
Umgangssprachlich
*****************

Die Frage mit der sich das Theorem beschäftigt ist, wie viele Kanten kann man maximal in einem ungerichteten Graphen mit n Knoten einbringen ohne das eine p - Clique entsteht.

*******************
Turáns Graphtheorem
*******************

Turáns Graphtheorem besagt, dass für einen Graph G = (V,E) mit n Kanten ohne p-Kreis gilt:

.. math:: \mid E \mid \le (1- \frac{1}{p-1}) \frac{n^2}{2}

Hierbei muss p allerdings größer 1 sein, da wir ansonsten durch 0 teilen würden und da eine 1 - Clique aus weniger als einer Kante bestehen müsste, da eine Kante zwei Knoten verbindet. 

************
Definitionen
************

Ungerichteter Graph
"""""""""""""""""""
Sei der ungerichtete Graph G definiert als Knotenmenge V

.. math::  V = \{ v_1, ..., v_n \}

und Kantenmenge E, wobei zwei Knoten :math:`v_i, v_j` benachbart sind falls

.. math::  \{v_i, v_j\} \in E


Grad eines Knotens
"""""""""""""""""""""""""""""""""""""

Der Grad :math:`d_m` eines Knotens :math:`v_m` ist definitert als die Anzahl der benachbarten Knoten, sprich

.. math:: d_m = \mid \{ v_i \mid v_i \in V \wedge \{ v_i, v_m \} \in E \} \mid

p - Clique im Graph G
""""""""""""""""""""""""""""""

Dies ist ein vollständiger Untergraph von G mit p Kanten, also ein Graph K für dessen Knotenmenge V' gilt

.. math::  \forall v \in V': v \in V

wobei V die Knotenmenge von G ist. Für die Kantenmenge E' gilt in ähnlicher Weise

.. math::  \forall e \in E': e \in E

wobei E die Kantenmenge von G ist.


unabhängige Knotenmenge
"""""""""""""""""""""""

Eine Menge von Knoten wird als unabhängig bezeichnet, wenn es innerhalb dieser Menge keine Kanten gibt, sondern nur nach Knoten außerhalb dieser.


r - partiter Graph
""""""""""""""""""

Ein r - partiter Graph besteht aus r disjunkten und unabhängigen Knotenmengen, welche untereinander durch Kanten verbunden sein können. Diese Knotenmengen bilden zudem eine Partition der gesamten Knotenmenge.


vollständiger r - partiter Graph
""""""""""""""""""""""""""""""""

Ein r - partiter Graph wird vollständig genannt, wenn jedes Element mit jedem anderen verbunden ist, außer mit denen, die in einer unabhängigen Knotenmenge mit ihm sind.


Turàn Graph
"""""""""""

Ein Turàn Graph ist ein vollständiger r - partiter Graph bei dem sich die Größe jeder Partition maximal um 1 unterscheidet.


************
Hilfsbeweise
************

Sei G ein Graph ohne p-Clique. Dann besitzt G höchstens so viele Kanten wie der (p - 1) Turàn Graph
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

**Induktionsanfang:**


**Induktionvoraussetzung:**


**Induktionsschluss:**


