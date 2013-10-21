Zweiter Beweis: Struktur des Turán Graphs
=========================================

In diesem Beweis nutzen wir die Struktur eines Turán Graphens aus und beweisen die stärkere Forderung:

Sei G ein Graph ohne (p - 1) - Clique, dann besitzt G höchstens so viele Kanten wie der (p - 2) Turán Graph

**Induktionsanfang:**

Beginnen wir mit p = 3, so kann ein Graph G keine Kanten besitzen, da ein 2 - Clique aus einer Kante besteht. Ebendies gilt auch für einen 1 - Turán Graph, dieser bestehet aus einer unabhängigen Teilmenge, hat also ebenfalls keine Kanten.

**Induktionvoraussetzung:**

Sei G ein Graph ohne (p - 1) - Clique. Dann besitzt G höchstens so viele Kanten wie der (p - 2) - Turán Graph.

**Induktionsschluss:**

Sei ein p - Cliquenfreier Graph G gegeben mit der Knotenmenge V und einer Kantenmenge E. Nun setzen wir :math:`v_m` so, dass für dessen Grad gilt :math:`d_m := max_{1 \le j \le n} d_j`, sprich wir suchen uns den Knoten mit den meisten Kanten im Graphen aus.

Nun setzen wir S als Menge der Nachbarn von :math:`v_m`, wodurch :math:`\mid S \mid = d_m` ist und definieren :math:`T := V \backslash S`. Da alle Knoten aus S mit :math:`v_m` verbunden sind, :math:`v_m \notin S` und G p - Cliquenfrei ist muss S (p - 1) - Cliquenfrei sein.

Definieren wir nun H als neuen Graphen mit identischer Knotenmenge, für den lediglich alle Kanten aus S übernommen werden und jeder Knoten aus S mit jedem aus T verbunden ist. Da in T keine Kanten übernoommern werden ist T eine unabhängige Menge in H. Hieraus folgt, dass es in T ebenfalls keine p - Clique geben kann, H ist also wie G p - Cliquenfrei.


Bezeichnen wir den Grad eines Knotens in H als :math:`d'_j`. Untersucht man nun die Grade in H, so lassen sich zwei Fälle unterscheiden:

**Fall 1:** :math:`v_j \in S`

Hier gilt :math:`d'_j \ge d_j`, da keine Kanten entfernt wurden, aber eventuell welche hinzugefügt wurden.


**Fall 2:** :math:`v_j \in T`

Es gilt :math:`d'_j =^1 \mid S \mid = d_m \ge^3 d_j`.

(1) gilt, da jedes Element aus T mit jedem Element aus S eine Kante teilt.
(2) gilt, da :math:`v_m` so gewählt wurde, dass d_m das Maximum ist.

Hieraus folgt :math:`\forall v_j \in V: d'_j \ge d_j` und somit auch :math:`\mid E(H) \mid \ge \mid E \mid`. Dementsprechend muss es einen maximalen Graphen dieser Form geben.

Da H höchstens eine (p - 1) - Clique hat kann S in H maximal eine (p - 2) - Clique haben. Dadurch lässt sich hier die Induktionvoraussetzung benutzen, sprich S in H hat maximal so viele Kanten wie ein (p - 2) - Turàn Graph, lässt sich mit diesem also nach oben abschätzen. Da in H jeder Knoten aus S mit jedem Knoten der unabhängigen Teilmenge T verbunden ist bildet H insgesamt einen (p - 1) - Turàn Graph, was bedeutet unsere Behauptung ist bewiesen.


.. todo::  |E| \le (1 - \frac{1}{p-1}) \frac{n^2}{2} folgt aus stärkerer Behauptung (Text vor den Beweisen schränkt formel auf teilbare ps ein)