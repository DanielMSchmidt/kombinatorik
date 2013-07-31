Dritter Beweis: Wahrscheinlichkeitsverteilung
=============================================

Sei w eine Wahrscheinlichkeitsverteilung :math:`w = (w_1,...,w_n)` auf den Knoten mit :math:`w_i \ge 0` und :math:`\sum^n_{i=1} w_i = 1`, so um die maximale Anzahl der Kanten zu erhalten folgende Funktion maximiert werden.

.. math::
  f(w) = \sum_{v_i,v_j \in E} w_i w_j

Nimmt man nun an, dass w eine beliebige Verteilung ist und :math:`v_i` und :math:`v_j` ein Paar unbenachbarte Knoten mit positiven Gewichten :math:`w_i` und :math:`w_j`. Sein nun :math:`s_i` die Summe aller zu :math:`v_i` adjazenten Knoten und :math:`s_j` ähnlich für :math:`v_j`, so kann man annehmen, dass :math:`s_i \ge s_j` ist.

Verschiebt man nun das Gewicht von :math:`v_j` nach :math:`v_i`, sodass das Gewicht von :math:`v_j` auf 0 fällt, so ergibt sich für die neue Verteilung w'

.. math::

  f(w') = f(w) + w_j s_j - w_j s_j \ge f(w)


.. todo:: wieso ist das nicht f(w') = f(w) + w_j s_j - w_j s_j = f(w) ?

Wiederholen wir dies, so reduziert sich die Anzahl der Knoten mit einem positiven Gewicht um einen pro Schritt, sodass nach einigen Schritten keine adjazenten Knoten mit einem positiven Gewicht mehr übrig sind.
