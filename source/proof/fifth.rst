Fünfter Beweis
==============

In diesem Beweis wird angenommen, dass G ein Graph mit n Ecken und ohne p - Clique ist, welcher die maximale Anzahl an Kanten hat.
Um :math:`\mid E \mid \le (1- \frac{1}{p-1}) \frac{n^2}{2}` zu zeigen bedient sich dieser Beweis zudem folgender Behauptung:


**Behauptung:** G enthält keine drei Ecken u,v,w mit :math:`\{ v, w \} \in E`, aber :math:`\{ u, v \} \notin E` und :math:`\{ u, w \} \notin E`


Diese Behauptung beweisen wir durch Widerspruch. Hierzu unterteilen wir das Problem in zwei Fälle:


**Fall 1:** :math:`d(u) < d(v) \vee d(u) < d(w)`

Nehmen wir an, dass d(u) < d(v) gilt, denn u und v sind austauschbar.
Entfernen wir nun u, verdopplen wir v und nennen den neuen Knoten v', wobei alle Kanten ebenfalls kopiert werden, sodass v' die selben Nachbarn wie v hat. Der hieraus entstehende Graph G' hat ebenfalls keine p-Clique, da v' lediglich doppelte, so zu sagen parallele Verbindungen hinzufügt, eine bestehende Clique also nicht erweitert wird. Hieraus ergibt sich für die Kantentzahl:

.. math::
  \mid E(G') \mid = \mid E(G) \mid + d(v) - d(u) >^{\text{da } d(u) < d(v)} \mid E(G) \mid


Da G ein maximaler Graph ist, ist dies ein Widerspruch.


**Fall 2:** :math:`d(u) \ge d(v) \wedge d(u) \ge d(w)`

.. todo:: Fall 2 abtippen


Definieren wir :math:`u \sim v :\Longleftrightarrow \{ u,v \} \notin E(G)`, so ist dies dank der bewiesenen Behauptung eine Äquivalenzrelation:

**Reflexiv:**


.. math::
  u \sim u \Longleftrightarrow^1 \{ u,u \} \notin E(G)

(1) Dies gilt, da die hier betrachteten Graphen keine Kanten mit gleichem Start und Zielknoten erlauben.

**Transitiv:**

.. math::
  u \sim v \wedge v \sim w \Longrightarrow^1 u \sim w

(1) Dies ist exakt die oben bewiesene Behauptung.

**Symetrisch:**

.. math::
  u \sim v &\Rightarrow \{ u,v \} \notin E(G) \\
  &\Rightarrow\ v \sim u

.. todo:: Zeigen, dass daraus folgt, dass G ein vollständiger multipartiter Graph G sein muss (hieraus folgt wie in 3, dass die Gleichung gilt)