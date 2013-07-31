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
Gehen wir davon aus, dass es sich um eine optimale Verteilung handelt so konzentriert sich das Gewicht in einem Kreis, beispielsweise der Größe k.
Nun lässt sich in den Fällen in denen es :math:`w_1,w_2` gibt, sodass gilt :math:`w_1 > w_2 > 0` :math:`\epsilon` wählen, sodass :math:`0 < \epsilon < w_1 - w_2` gilt. Setzt man nun :math:`w_1 := w_1 - \epsilon` und :math:`w_2 := w_2 + \epsilon` so ergibt sich für die neue Verteilung w':

.. todo:: Wieso zur Hölle ändert sich das, ich zieh doch nur beim einen was ab und beim anderen was drauf.

.. math::

  f(w') = f(w) + \epsilon(w_1 - w_2) - \epsilon^2 > f(w)

Hieraus schlussfolgern wir, dass f(w) sein maximum erreicht sofern :math:`w_i` in einem k-Kreis :math:`w_i = \frac{1}{k}` ist und ansonsten :math:`w_i = 0`. Da ein k-Kreis :math:`\frac{k(k-1)}{2}` Kanten hat folgt daraus

.. math::

  f(w) = \frac{k(k-1)}{2} \frac{1}{k^2} = \frac{1}{2}(1 - \frac{1}{k})

Da :math:`\frac{1}{2}(1 - \frac{1}{k})` sich erhöht, wenn k sich erhöht setzen wir k auf ein Maximum. Dieses ist p-1, da der Graph G keine p-Kreise also maximal (p-1)-Kreise enthält, woraus sich folgendes für jede Verteilung w ergibt:

.. todo:: Vielleicht split benutzen

.. math::

  f(w) = \frac{k(k-1)}{2} \frac{1}{k^2} = \frac{1}{2}(1 - \frac{1}{k}) \le \frac{1}{2}(1 - \frac{1}{p - 1})

Dies gilt dann insbesondere für die gleichmäßige Verteilung, welche durch :math:`w_i = \frac{1}{n}` für alle i gegeben ist. Hierdurch ergibt sich

.. todo:: Wo kommt das \frac{|E|}{n^2} her?

.. math::

  \frac{\mid E \mid}{n^2} = f(w = \frac{1}{n}) \le \frac{1}{2}(1 - \frac{1}{p - 1})

Dies entspricht exakt dem geforderten :math:`\mid E \mid \le (1- \frac{1}{p-1}) \frac{n^2}{2}`.

.. todo:: Eventuell einmal umformen um das zu zeigen