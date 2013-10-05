Zweiter Beweis: Struktur des Turàn Graphs
=========================================

In diesem Beweis nutzen wir die Struktur eines Turàn Graphens aus. Wir haben einen p - Cliquenfreien Graphen G gegeben mit der Knotenmenge V und einer Kantenmenge E. Nun setzen wir :math:`v_m` so, dass für dessen Grad gilt :math:`d_m := max_{1 \le j \le n} d_j`, sprich wir suchen uns den Knoten mit den meisten Kanten im Graphen aus.

Nun setzen wir S als Menge der Nachbarn von :math:`v_m`, wodurch :math:`\mid S \mid = d_m` ist und definieren :math:`T := V \backslash S`. Da alle Knoten aus S mit :math:`v_m` verbunden sind, :math:`v_m \notin S` und G p - Cliquenfrei ist muss S (p - 1) - Cliquenfrei sein.

Definieren wir nun H als neuen Graphen mit identischer Knotenmenge, für den alle Kanten aus S übernommen werden und jeder Knoten aus S mit jedem aus T verbunden ist, so ist T als eine unabhängige Menge in K. Hieraus folgt, dass es in T ebenfalls keine p - Clique geben kann, H ist also wie G p - Cliquenfrei.

Bezeichnen wir den Grad eines Knotens in G nun als :math:`d_j` und eines Knotens in H als :math:`d'_j`.
Untersucht man nun die Grade in H, so lassen sich zwei Fälle unterscheiden:

**Fall 1:** :math:`v_j \in S`

Hier gilt :math:`d'_j \ge d_j`, da keine Kanten entfernt wurden, aber eventuell welche hinzugefügt wurden, falls :math:`T \neq \varnothing`.


**Fall 2:** :math:`v_j \in T`

Es gilt :math:`d'_j =^1 \mid S \mid \\ =^2 d_m \\ \ge^3 d_j`.

(1) gilt, da jedes Element aus T mit jedem Element aus S eine Kante teilt.
(2) und 3. gelten, da :math:`v_m` so gewählt wurde, dass beide Kriterien erfüllt sind.

Hieraus folgt :math:`\forall v_j \in V: d'_j \ge d_j` und somit auch :math:`\mid E(H) \mid \ge \mid E \mid`. Dementsprechend muss es einen maximalen Graphen dieser Form geben.


.. todo: Muss ich hier darauf achten, dass K_{n_1,...,n_{p-1}} p-cliquenfrei ist?

Aus :math:`\mid E \mid \le \mid E(H) \mid \le \mid E(K_{n_1,...,n_{p-1}}) \mid` folgt, dass die Behauptung gilt und die erste Hälfte dieser Ungleichung haben wir bereits bewiesen. Hierzu betrachten wir zunächst lediglich die Knotenmenge S, da T bereits eine unabhängige Teilmenge ist. Wählen wir nun die Kanten in der Knotenmenge S so, dass jeder Knoten miteinander verbunden ist, also :math:`E(S) := \{ (a,b) \mid a \in S, b \in S, a \neq b \}` gilt. Da ein Turàn Graph so beschaffen ist, dass er alle Elemente aus seinen unabhängigen Untergruppen miteinander verbindet entspricht die Kantenmaximale Form von S genau :math:`K_{1,...,1}`, wodurch sich die zweite Hälfte der Gleichung dementsprechend abschätzen lässt.

.. todo: Muss ich zeigen, wieso die Behauptung hieraus folgt, bzw wieso tut sie das?