Erster Beweis: Induktion über p
===============================


.. todo:: von eins anfangen zu zählen (ich benutze dass n >= 2 und p >=3)


*************
Voraussetzung
*************
Sei G ein ungerichteter Graph der n+1-ten Ordnung, bestehend aus einer Knotenmenge :math:`V = \{ v_0,...,v_n \}` und einer Kantenmenge E, welche zwei verbundene Knoten :math:`v_i, v_j` mit :math:`0 \le i < j \le n` definiert als

.. math::
  (v_i, v_j) \in E

****************
Induktionsanfang
****************

.. todo:: Induktion ist über n

Sei p = 2, so gilt

.. math::
  \mid E \mid \le (1 - \frac{1}{p-1})\frac{n^2}{2} = (1 - \frac{1}{2-1})\frac{n^2}{2} = (1 - 1)\frac{n^2}{2} = 0 \frac{n^2}{2} = 0

Dies ist trivialerweise wahr, da ein Kreis bestehend aus zwei Knoten exakt eine Kante benötigt.

***********************
Induktionsvoraussetzung
***********************

.. math::
  \mid E \mid \le (1 - \frac{1}{p-1})\frac{n^2}{2}

*****************
Induktionsschluss
*****************

Zum Beweis des Induktionsschlusses nutzen wir eine zweite Induktion über n:

Sei n < p, so ist die Aussage wahr, da es keinen p großen Kreis mit n verschiedenen Kanten geben kann.

Sei :math:`n \ge p`, so gibt es einen (p - 1)-Kreis A, da ansonsten noch weitere Kanten hinzufügbar wären. Setzt man nun B := V \ A, so lässt sich die Anzahl der Kanten in A (:math:`e_A`), B (:math:`e_B`) und zwischen A und B (:math:`e_{A,B}`) abschätzen:

Die Anzahl der Kanten in A beträgt :math:`{ p - 1 \choose 2}`, da A aus p-1 Kanten besteht und :math:`{ n \choose k}` der Anzahl der Kombinationsmöglichkeiten von n Objekten in Tupel der Größe k entspricht.

Für die Anzahl der Kanten in B gilt

.. math::
  e_B \le \frac{1}{2}(1 - \frac{1}{p - 1})(n - p + 1)^2

.. todo:: Wieso ist das da oben für e_B so?

Für die Kanten zwischen A und B ergibt sich

.. math::
  e_{A,B} \le (p - 2)(n - p + 1)

.. todo:: Wieso ist das da oben für e_{A,B} so?

Daraus ergibt sich für die Gesamtanzahl der Kanten

.. math::
 \begin{align}
 \begin{split}
 \mid E \mid &= e_A + e_{A,B} + e_B \\
 &\le { p - 1 \choose 2} + \frac{1}{2}(1 - \frac{1}{p - 1})(n - p + 1)^2 + (p - 2)(n - p + 1) \\
 &= .... \\
 &= (1 - \frac{1}{p - 1})\frac{n^2}{2} \\
 \end{split}
 \end{align}

.. todo:: Zwischenschritte einfügen

Somit ist das Theorem per Induktion bewiesen.