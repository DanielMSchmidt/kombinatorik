Vierter Beweis: Wahrscheinlichkeitstheorie
==========================================

Sei G ein beliebiger Graph mit der Knotenmenge :math:`V = \{ v_1,...,v_n \}` und seien der Grad der Knoten angegeben als :math:`d_j` für den Knoten :math:`v_j`. Sie zudem :math:`\omega(G)` für die Kreiszahl von G, also der Grad des größten Kreises in G.

Nehmen wir an es gilt

.. math::

  \omega(G) \ge \sum^n_{i-1} \frac{1}{n - d_i}

.. todo:: Wo kommt das da oben denn schon wieder her?

Wählt man nun eine beliebige Permutation der Knotenmenge :math:`\pi = v_1,v_2,...,v_n`, wobei jede mit der selben Wahrscheinlichkeit :math:`\frac{1}{n!}` auftreten kann. Konstruiert man nun :math:`C_{\pi}` so, dass wir einen Knoten :math:`v_i` nur genau dann in :math:`C_{\pi}` ist, wenn :math:`v_i` benachbart zu allen :math:`v_j (j < i)`, also vorherigen Knoten ist. Per Definition ist :math:`C_{\pi}` ein p-Kreis in G.
Setzt man nun :math:`X = \mid C_{\pi} \mid` die dazugehörige Zufallsvariable, wobei :math:`X = \sum^n_{i=1} X_i` und :math:`X_i` die Zufallsvariable zu dem Knoten :math:`v_i`. Sei :math:`X_i = 1` wenn :math:`v_i \in C_{\pi}` und :math:`X_i = 0` wenn :math:`v_i \notin C_{\pi}`.