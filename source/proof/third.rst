.. todo:: Das ganze einmal in PS für einen n = 5 Graphen machen

Dritter Beweis: Wahrscheinlichkeitsverteilung
=============================================

.. todo:: Im vortrag sagen dass man hiermit das ganze problem ganz leicht erklären

In diesem Beweis betrachten wir die Wahrscheinlichkeitsverteilung auf den Knoten des Graphen. Diese notieren wir als :math:`w = (w_1,...,w_n)` und es gilt :math:`w_i \ge 0`, sowie :math:`\sum^n_{i=1}w_i = 1`. Des weiteren definieren wir eine Funktion :math:`f(w) = \sum_{v_i, v_j \in E} w_i w_j`, welche wir zu maximieren versuchen.


Setzen wir nun :math:`v_i` und :math:`v_j` als zwei nicht benachbarte Ecken mit positiven Gewicht :math:`w_i, w_j` und fassen das Gewicht ihrer adjazenten Knoten zusammen als :math:`s_i, s_j` und nehmen :math:`s_i \ge s_j` an.

Bewegen wir nun das Gewicht von :math:`v_j` nach :math:`v_i`, setzen also :math:`w'_i := w_i + w_j` und :math:`w'_j := 0`, dann ergibt sich für die neue Gewichtung :math:`w'`:

.. math::
  f(w') &=^1
  f(w) + w_j s_i - w_j s_j \\
  &=^2 f(w) + (s_i - s_j) w_j \\
  &\ge^3 f(w)

(1) FILL
(2) ME
(3) UP

Wir können dies nun wiederholen bis es keine nicht-adjazenten Ecken mit positiver Gewichtung mehr gibt und erhalten danach eine  optimierte Verteilung, da bei jeder Umformung :math:`f(w') \ge f(w)` gilt. Zudem muss es eine optimale Verteilung geben in der alle Gewichte in einer k-Clique zusammengezogen sind, da sich das Gewicht innerhalb einer solchen Clique beim Tausch lediglich verschieben würde, insgesamt aber gleich bleibt.


Gehen wir nun von einer solchen Clique aus, so lassen sich die Gewichte innerhalb der Clique ebenfalls verschieben. Diese bewegen wir in der Form, dass wir uns zwei Ecken mit positiven Gewicht wählen für die :math:`w_1 > w_2 > 0` gilt und ein :math:`\varepsilon` für das :math:`0 < \varepsilon < w_1 - w_2` gilt. Dieses :math:`\varepsilon` addieren wir auf :math:`w_2` und subtrahieren es von :math:`w_1`.

Da

.. math::
  f(w') &=^1 f(w) + \varepsilon (w_1 - w_2) - \varepsilon^2 \\
  &=^2 f(w) + \varepsilon ((w_1 - w_2) - \varepsilon) \\
  >^3 f(w)


(1) FILL
(2) ME
(3) UP

gilt, optimiert diese Gewichtsverlagerung die k-Clique bis es keine ungleichen Gewichtungen mehr in ihr gibt. Da w = 1 gilt und alle Knoten außerhalb der Clique die Gewichtung 0 hat wird jeder Knoten innerhalb der Clique die Gewichtung :math:`w_i = \frac{1}{k}`.


In einer k-Clique können maximal :math:`\frac{k (k-1)}{2}` Kanten sein, also :math:`\frac{\text{Jeder Punkt} (\text{Jeder Punkt mit dem er sich verbinden kann})}{\text{Enden einer Kante}}`. Für die Gewichtung ergibt sich also:

.. math::
  f(w) &=^1 \sum_{v_i, v_j \in E} w_i w_j  \\
  &=^2 \sum_{v_i, v_j \in E} \frac{1}{k^2}  \\
  &=^3 \mid E \mid \frac{1}{k^2}  \\
  &=^4 \frac{k (k-1)}{2} \frac{1}{k^2}  \\
  &= \frac{k (k-1)}{2k^2} \\
  &= \frac{k-1}{2k} \\
  &= \frac{1}{2} (1 - \frac{1}{k})


(1) FILL
(2) ME
(3) UP
(4) PLEASE


Da diese Funktion maximal ist wenn k maximal ist und der höchstmögliche Wert für k genau p - 1 ist gilt weiter:

.. math::
  f(w) &= \frac{1}{2} (1 - \frac{1}{k}) \\
  &\le \frac{1}{2} (1 - \frac{1}{p-1})


Insbesondere gilt dies dann auch für die uniforme Verteilung


.. math::
  &\frac{\mid E \mid}{n^2} = f(w_i = \frac{1}{n}) \le \frac{1}{2} (1 - \frac{1}{p-1}) \\
  \Longleftrightarrow &\mid E \mid = f(w_i = \frac{1}{n}) * n^2 \le \frac{1}{2} (1 - \frac{1}{p-1}) * n^2