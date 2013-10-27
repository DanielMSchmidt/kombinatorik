Zweiter Beweis: Struktur des Turán Graphs
=========================================

In diesem Beweis nutzen wir die Struktur eines Turán Graphens aus und beweisen die stärkere Forderung:

Sei G ein Graph ohne p - Clique, dann besitzt G höchstens so viele Kanten wie der (p - 1) Turán Graph
-----------------------------------------------------------------------------------------------------------

**Induktionsanfang:**

Beginnen wir mit p = 2, so kann ein Graph G keine Kanten besitzen, da ein 2 - Clique aus einer Kante besteht. Ebendies gilt auch für einen 1 - Turán Graph, dieser bestehet aus einer unabhängigen Teilmenge, hat also ebenfalls keine Kanten.

**Induktionvoraussetzung:**

Sei G ein Graph ohne p - Clique. Dann besitzt G höchstens so viele Kanten wie der (p - 1) - Turán Graph.

**Induktionsschluss:**

Sei ein (p + 1) - cliquenfreier Graph G gegeben mit der Knotenmenge V und einer Kantenmenge E. Nun setzen wir :math:`v_m` so, dass für dessen Grad gilt :math:`d_m := max_{1 \le j \le n} d_j`, sprich wir suchen uns einen Knoten mit den meisten Kanten im Graphen aus.

Nun setzen wir S als Menge der Nachbarn von :math:`v_m`, wodurch :math:`\mid S \mid = d_m` ist und definieren :math:`T := V \backslash S`. Da alle Knoten aus S mit :math:`v_m` verbunden sind, :math:`v_m \notin S` und G (p + 1) - cliquenfrei ist muss S p - cliquenfrei sein.

Definieren wir nun H als neuen Graphen mit identischer Knotenmenge, für den lediglich alle Kanten aus S übernommen werden und jeder Knoten aus S mit jedem aus T verbunden ist. Da in T keine Kanten übernommen werden ist T eine unabhängige Menge in H und damit p - cliquenfrei.


Bezeichnen wir den Grad eines Knotens in H als :math:`d'_j`. Untersucht man nun die Grade in H, so lassen sich zwei Fälle unterscheiden:

**Fall 1:** :math:`v_j \in S`

Hier gilt :math:`d'_j \ge d_j`, da keine Kanten entfernt wurden, aber eventuell welche hinzugefügt wurden.


**Fall 2:** :math:`v_j \in T`

Es gilt :math:`d'_j =^1 \mid S \mid = d_m \ge^3 d_j`.

(1) gilt, da jedes Element aus T mit jedem Element aus S eine Kante teilt.
(2) gilt, da :math:`v_m` so gewählt wurde, dass d_m das Maximum ist.

Hieraus folgt :math:`\forall v_j \in V: d'_j \ge d_j` und somit auch :math:`\mid E(H) \mid \ge \mid E \mid`.

Da H höchstens eine (p + 1) - Clique hat kann S in H maximal eine p - Clique haben. Dadurch lässt sich hier die Induktionvoraussetzung benutzen, sprich S in H hat maximal so viele Kanten wie ein (p - 1) - Turán Graph, lässt sich mit diesem also nach oben abschätzen. Da in H jeder Knoten aus S mit jedem Knoten der unabhängigen Teilmenge T verbunden ist bildet H insgesamt einen p - Turán Graph. Dies beweist unsere Behauptung Zwischenbehauptung.


Nun wissen wir also, dass ein p - cliquenfrei Graphen G höchstens so viele Kanten haben kann wie ein (p - 1) - Turán Graph.

.. todo:: Texttuell überarbeiten:
Da ein Turán Graph für n Knoten genau dann die meisten Kanten hat, wenn alle Partitionen gleich groß sind, also wenn n durch (p - 1) teilbar ist, also :math:`n_i := \frac{n}{p-1}` gilt, können wir dies also nun für G zeigen, da es maximal so viele Kanten haben kann.

.. math::
  &\text{Anzahl der Verbindungsmöglichkeiten zwischen (p - 1) Kanten} \cdot ( \text{Anzahl der unabh. Teilmenge} )^2 = \\ &{ p - 1 \choose 2 } ( \frac{n}{p-1} )^2 = (1 - \frac{1}{p - 1}) \frac{n^2}{2}

und unsere Behauptung ist bewiesen.