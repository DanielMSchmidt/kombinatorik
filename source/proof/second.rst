Zweiter Beweis: Struktur des Turàn Graphs
=========================================

In diesem Beweis nutzen wir die Struktur eines Turàn Graphens aus. Wir haben einen p - Cliquenfreien Graphen G gegeben mit der Knotenmenge V und einer Kantenmenge E. Nun setzen wir :math:`v_m` so, dass für dessen Grad gilt :math:`d_m := max_{1 \le j \le n} d_j`, sprich wir suchen uns den Knoten mit den meisten Kanten im Graphen aus.

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


Wie im Vorfeld gezeigt wurde ist die Kardinalität der Kantenmenge jedes passenden Turàn Graphens größer als die des entsprechenden vollständingen (p - 1) - partiten Graphen. Da sich S in H aus einer oder mehreren Partitionen bestehen muss ist es k - partit. Um die Kardinalität der Kantenmenge nach oben abzuschätzen können wir einerseits davon ausgehen, dass die Anzahl der Kanten in S kleiner oder gleich der in einem vollständingen k - partiten Graphen ist, da sich ansonsten Kanten hinzufügen lassen.


Andererseits ist klar, dass die Anzahl der Kanten steigt, je größer k ist. Dieses lässt sich also mit (p - 2) abschätzen, da dies der größtmögliche Wert ist bevor in S (p - 1) - Cliquen und damit in H p - Cliquen entstehen. Also gilt :math:`\mid E(H) \mid \le \mid E(K_{n_1, ..., n_{p-1}}) \mid` und da :math:`\mid E(K_{n_1, ..., n_{p-1}}) \mid \le ({(p - 1) \choose 2}) (\frac{n}{p-1})^2 = (1- \frac{1}{p-1})\frac{n^2}{2}` gilt ist die Behauptung bewiesen.
