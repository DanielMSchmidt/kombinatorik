===========
Das Theorem
===========


*****************
Umgangssprachlich
*****************

Die Frage mit der sich das Theorem beschäftigt ist, wie viele Kanten kann man maximal in einem ungerichteten Graphen mit n Knoten einbringen ohne das eine p - Clique entsteht.

*******************
Turáns Graphtheorem
*******************

Turáns Graphtheorem besagt, dass für einen Graph G = (V,E) mit n Knoten ohne p-Clique gilt:

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

.. math:: d_m = \text{  } \mid \{ v_i \mid v_i \in V \wedge \{ v_i, v_m \} \in E \} \mid

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


Turán Graph
"""""""""""

Ein Turán Graph ist ein vollständiger r - partiter Graph bei dem sich die Größe jeder Partition maximal um 1 unterscheidet.


************
Hilfsbeweise
************

Ein Turán Graph hat immer mindestens so viele Kanten wie ein entsprechender r - patiter Graph
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

.. todo:: jede 1 mit i und 2 mit j austauschen, bei dem also :math:`n_1 \ge n_2 + 2` noch etwas Ohne Beschränkung der Allgemeinheit angeben

Es ist zu zeigen, dass die Anzahl der Kanten in einem vollständigen (p - 1) - partiten Graphen :math:`K_{n_1,...,n_{p - 1}}` genau dann maximal ist, wenn :math:`\mid n_i - n_j \mid \le 1` f.a. i,j gilt.


Wir nehmen für unseren r-partiten Graphen an, dass :math:`\mid n_i - n_j \mid > 1`, also :math:`n_1 \ge n_2 + 2` gilt.
Verschieben wir eine Ecke aus :math:`V_1` in die Ecke :math:`V_2`, so erhalten wir einen Graphen :math:`K_{n_1 - 1, n_2 + 1,...,n_{p - 1}}`. Dieser besitzt aufgrund der Verschiebung :math:`(n_1 - 1)(n_2 + 1) - n_1 n_2` mehr Knoten als der ursprüngliche Graph, denn es gilt

.. math::
	(n_1 - 1)(n_2 + 1) - n_1 n_2 &= n_1 n_2 - n_2 + n_1 - 1 - n_1 n_2 \\
	&= n_1 - n_2 - 1 \\
	&\ge^1 n_2 + 2 - n_2 - 1 \\
	&= 1

(1) Dies gilt, da :math:`n_1 \ge n_2 + 2` vorausgesetzt wird.

Daher hat ein Turán Graph mindestens so viele Kanten wie ein entsprechender r - patiter Graph.


