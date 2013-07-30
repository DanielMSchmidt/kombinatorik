Zweiter Beweis: Struktur des Turàn Graphs
=========================================

In diesem Beweis gehen wir von vornherein davon aus, dass G keinen p-Kreis beinhaltet und schließen von dieser Annahme auf die maximale Anzahl an Kanten.
Sei :math:`v_m \in V` ein Knoten mit Grad :math:`d_m = max_{1 \le j \le n} d_j`, also ein Knoten mit der maximalen Anzahl an Nachbarn.
Sei S die Menge der Nachbarn von :math:`v_m`, so ist :math:`\mid S \mid = d_m`, zudem lässt sich T setze als :math:`T := V \setminus S`.

Da G keinen p-Kreis enthält und alle Knoten in S mit :math:`v_m` verbunden sind kann es in S keinen (p - 1)-Kreis geben.

.. todo:: Eventuell eine Illustration dazu einführen (ähnlich die aus The Book)

Konstruiert man nun einen Graph H auf V, sodass H alle Kanten in S und zwischen S und T beinhaltet, allerdings keine in T, so ist T eine unabhängige Knotenmenge und H ohne p-Kreis.

Sei :math:`d'_j` der Grad von :math:`v_j` in H. Ist :math:`v_j \in S`, so gilt aufgrund des Aufbaus von H auch :math:`d'_j \ge d_j`, andernfalls ist :math:`v_j \in T`, wodurch :math:`d'_j = \mid S \mid = d_m \ge d_j`. Also gilt in jedem Fall :math:`d'_j \ge d_j`.

.. todo:: Wieso folgt das daraus?

Daraus folgt :math:`\mid E(H) \mid \ge \mid E \mid` und unter allen Graphen mit der maximalen Anzahl an Kanten muss einer in dieser Form sein.

.. todo:: Eventuell mal selber induzieren

Per Induktion ergibt sich für einen von S ausgehenden Graph mit :math:`n_{p-1} = \mid T\mid`

.. math::
  \mid E\mid \le \mid E(H)\mid \le E(K_{n_1,...,n_{p - 1}})

Dies impliziert :math:`\mid E \mid \le (1 - \frac{1}{p-1})\frac{n^2}{2}`

