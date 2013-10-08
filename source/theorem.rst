===========
Das Theorem
===========

.. todo:: Eventuell in Definitionen Part auslagern (Links innerhalb von Sphinx auf die Begriffe)
.. todo:: Beweis das der k-Turàn Graph größer als jeder vollständige k-partite Graph ist muss noch rein

*****************
Umgangssprachlich
*****************

Die Frage mit der sich das Theorem beschäftigt ist, wie viele Kanten kann man maximal in einem ungerichteten Graphen mit n Knoten einbringen ohne das ein ein p Knoten großer Kreis entsteht.

*******************
Turáns Graphtheorem
*******************

Turáns Graphtheorem besagt, dass für einen Graph G = (V,E) mit n Kanten ohne p-Kreis gilt:

.. math:: \mid E \mid \le (1- \frac{1}{p-1}) \frac{n^2}{2}

Hierbei muss p allerdings größer 1 sein, da wir ansonsten durch 0 teilen würden und da ein 1 Knoten großer Kreis sich schon durch die Definition von Kanten und Kreisen ausschließt.

************
Definitionen
************

Ungerichteter Graph
"""""""""""""""""""
Sei der ungerichtete Graph G definiert als Knotenmenge V

.. math::  V = \{ v_1, ..., v_n \}

und Kantenmenge E, wobei zwei Knoten :math:`v_i, v_j` benachbart sind falls

.. math::  (v_i, v_j) \in E

Ordnung des Graphen
"""""""""""""""""""""""

.. todo:: nachfragen ob Notation G(E) korrekt ist

Ein Graph G hat die Ordnung n, wenn G(E) aus n Kanten besteht. In diesem Fall wird G auch als :math:`G_n` benannt.


p-Kreis (p-clique) von Graph G
""""""""""""""""""""""""""""""

Dies ist ein vollständiger Untergraph von G der Ordnung p, also ein Graph K für dessen Knotenmenge V' gilt

.. math::  \forall v \in V': v \in V

wobei V die Knotenmenge von G ist. Für die Kantenmenge E' gilt in ähnlicher Weise

.. math::  \forall e \in E': e \in E

wobei E die Kantenmenge von G ist.

.. todo:: Add Kreiszahl (or sth. like that) => clique number






vollständiger (p-1) - partiter Graph
      |
alle Kanten zwischen partitionen
TODO FILL ME!
.. todo:: r-patit, turan graph, Kanten shiften, Grad einführen
