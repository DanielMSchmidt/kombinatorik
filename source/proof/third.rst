Dritter Beweis: Gewichtsverteilung
=============================================

.. todo:: Im vortrag sagen dass man hiermit das ganze problem ganz leicht erklären

In diesem Beweis betrachten wir eine Gewichtsverteilung auf den Knoten des Graphen. Diese notieren wir als :math:`w = (w_1,...,w_n)` und es gilt :math:`w_i \ge 0`, sowie :math:`\sum^n_{i=1}w_i = 1`. Des weiteren definieren wir eine Funktion :math:`f(w) = \sum_{ \{v_i, v_j\} \in E} w_i w_j`, welche wir zu maximieren versuchen. Wieso wir dies für exakt diese Funktion tun wird sich im späteren Verlauf des Beweises klären.


Setzen wir nun :math:`v_i` und :math:`v_j` als zwei nicht benachbarte Knoten mit positiven Gewicht :math:`w_i, w_j` und fassen das Gewicht ihrer adjazenten Knoten zusammen als :math:`s_i, s_j` und nehmen :math:`s_i \ge s_j` an.

Bewegen wir nun das Gewicht von :math:`v_j` nach :math:`v_i`, setzen also :math:`w'_i := w_i + w_j` und :math:`w'_j := 0`, dann ergibt sich für die neue Gewichtung :math:`w'`:

.. math::
  f(w') &=^1 f(w) + w_j s_i - w_j s_j \\
  &= f(w) + (s_i - s_j) w_j \\
  &\ge^2 f(w)

(1) Dies gilt aufgrund des verschobenen Gewichts. Dieses wird in der Multiplikation auf seitens :math:`s_j` nicht mehr betrachtet, bei :math:`s_i` schon. Da :math:`w_j` für :math:`s_j` wegfällt wird das Gewicht hier also abgezogen und bei :math:`s_i` umgekehrt draufgerechnet in der Multiplikation.
(2) Dies gilt, da :math:`w_j` als Ecke mit positiven Gewicht ausgewählt wurde.

Wir können diese Verschiebung nun wiederholen bis es keine nicht-adjazenten Knoten mit positiver Gewichtung mehr gibt und erhalten danach eine optimierte Verteilung, da für jede Umformung :math:`f(w') \ge f(w)` gilt. Da wir das Gewicht nach bestimmten Anzahl an Verschiebungen innerhalb einer k - Clique verschieben betrachten wir nun wie wir das Gewicht für eine solche Clique optimieren können.


Bewegen wir die Gewichte innerhalb einer solchen k - Clique in der Form, dass wir uns zwei Ecken mit positiven Gewicht wählen für die :math:`w_1 > w_2 > 0` gilt und ein :math:`\varepsilon` setzen für das :math:`0 < \varepsilon < w_1 - w_2` gilt. Addieren wir :math:`\varepsilon` auf :math:`w_2` und subtrahieren es von :math:`w_1`. Setzen wir zudem :math:`NB(w) := \{ v \mid v \in V \wedge \{ w, v \} \in E  \}`, also die Menge der Nachbarn von w. Es ergibt sich also:


.. math::
  f(w') &=^1 f(w) - \sum_{v \in NB(w_1) \backslash NB(w_2)}(w_1 w) - \sum_{v \in NB(w_2) \backslash NB(w_1)}(w_2 w) + \sum_{v \in NB(w_1) \backslash NB(w_2)}((w_1 - \varepsilon) w) \\ &+ \sum_{v \in NB(w_2) \backslash NB(w_1)}((w_2 + \varepsilon) w) - \sum_{v \in NB(w_1) \cap NB(w_2)}(w_1 w_2) + \sum_{v \in NB(w_1) \cap NB(w_2)}((w_2 + \varepsilon) (w_1 - \varepsilon)) \\
  &=^2 f(w) - \sum_{v \in NB(w_1) \backslash NB(w_2)}(w_1 w) - \sum_{v \in NB(w_2) \backslash NB(w_1)}(w_2 w) + \sum_{v \in NB(w_1) \backslash NB(w_2)}((w_1 - \varepsilon) w) \\ &+ \sum_{v \in NB(w_2) \backslash NB(w_1)}((w_2 + \varepsilon) w) - (w_1 w_2) + ((w_2 + \varepsilon) (w_1 - \varepsilon)) \\
  &=^3 f(w) + ((w_2 + \varepsilon) - w_2) + (w_1 - \varepsilon) - w_1) + (w_2 + \varepsilon) (w_1 - \varepsilon) - w_1 w_2 \\
  &= f(w) + \varepsilon  - \varepsilon + (w_2 + \varepsilon) (w_1 - \varepsilon) - w_1 w_2 \\
  &= f(w) + (w_2 + \varepsilon) (w_1 - \varepsilon) - w_1 w_2 \\
  &= f(w) + w_2 w_1 - w_2 \varepsilon + w_1 \varepsilon - \varepsilon^2 - w_1 w_2 \\
  &= f(w) + w_1 w_2 + \varepsilon (w_1 - w_2) - \varepsilon^2 - w_1 w_2 \\
  &= f(w) + \varepsilon (w_1 - w_2) - \varepsilon^2 \\
  &= f(w) + \varepsilon ((w_1 - w_2) - \varepsilon) \\
  &>^4 f(w)


(1) Alle veränderten Kantengewichte sind aufgenommen
(2) Dies gilt, da :math:`\mid NB(w_1) \cap NB(w_2) \mid = 1` gilt, es also keine doppelten Kanten zwischen zwei Knoten geben kann.
(3) Die unveränderten Summen weggekürzt
(4) Da :math:`0 < \varepsilon < w_1 - w_2` gilt.

Daher optimiert diese Gewichtsverlagerung die k-Clique bis es keine ungleichen Gewichtungen mehr in ihr gibt.
Dass dies irgendwann eintritt ist leicht einzusehen, denn wenn man :math:`\varepsilon` setzt als

.. math::
  \varepsilon := \lim_{n \to \infty}((w_1 - w_2) - \frac{1}{n})

geht :math:`\frac{1}{n}` gegen 0. Daher nähern sich :math:`w_1` und :math:`w_2` an, wodurch sie sich an die optimale Gewichtung :math:`\frac{1}{k}` annähern. Diese muss optimal sein, da sich das Gewicht gleichermaßen auf die k Knoten verteilt, deren Gewicht noch größer als 0 ist. Obrige Ungleichung hat gezeigt, dass je näher die Werte der einzelnen Knoten aneinanderliegen desto optimierter ist die Funktion f. Dies liegt an der Eigenschaft der Multiplikation maximal für die Summe der Faktoren zu sein, wenn beide Faktoren gleich groß sind.

Da w = 1 gilt und alle Knoten außerhalb der Clique die Gewichtung 0 hat wird jeder Knoten innerhalb der Clique die Gewichtung :math:`w_i = \frac{1}{k}`.


In einer k-Clique können maximal :math:`\frac{k (k-1)}{2}` Kanten sein, also :math:`\frac{\text{Jeder Punkt} (\text{Jeder Punkt mit dem er sich verbinden kann})}{\text{Enden einer Kante}}`. Für die Gewichtung ergibt sich also:

.. math::
  f(w) &=^1 \sum_{v_i, v_j \in E} w_i w_j =^2 \sum_{v_i, v_j \in E} \frac{1}{k^2}  \\
  &= \mid E \mid \frac{1}{k^2} =^3 \frac{k (k-1)}{2} \frac{1}{k^2}  \\
  &= \frac{k (k-1)}{2k^2} = \frac{k-1}{2k} = \frac{1}{2} (1 - \frac{1}{k})


(1) Definition von f.
(2) Setzung von :math:`w_i := \frac{1}{k}`.
(3) Dies gilt, da wie oben erwähnt in einer k-Clique maximal :math:`\frac{k (k-1)}{2}` Kanten sein.


Da diese Funktion maximal ist wenn k maximal ist und der höchstmögliche Wert für k genau p - 1 ist gilt weiter:

.. math::
  f(w) &= \frac{1}{2} (1 - \frac{1}{k}) \\
  &\le \frac{1}{2} (1 - \frac{1}{p-1})


Insbesondere gilt dies dann auch für die uniforme Verteilung


.. math::
  &\frac{\mid E \mid}{n^2} = f(w_i = \frac{1}{n}) \le \frac{1}{2} (1 - \frac{1}{p-1}) \\
  \Longleftrightarrow &\mid E \mid = f(w_i = \frac{1}{n}) * n^2 \le \frac{1}{2} (1 - \frac{1}{p-1}) * n^2


.. todo:: Nochmal erklären wieo die Funktion so gewählt wurde