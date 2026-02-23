---
sidebar_position: 1
---

# 1.1 正則言語とオートマトン

## 例2

> $L = \{a^n b^n : n \geq 1\}$ は正則言語ではない

1. $L$ を正則言語と仮定して矛盾を導く
2. $\mathcal{M} = (Q, \Omega, \ldots)$ を $L$ を受理するオートマトンとする
3. $|Q|$ より大きい自然数 $n$ を任意にとる
4. 鳩の巣原理より、 $a^n$ までの状態遷移の中で2回以上登場する状態が存在する
5. その状態が $i$ ステップと $i + j$ ステップ（ $j > 0$ ）に現れるとする
6. $a^{n - j}$ まで読み込んだときの状態は $a^n$ まで読んだときのそれと等しい
7. よって $a^{n-j}b^n \in L(\mathcal{M})$
8. しかし2より $L = L(\mathcal{M})$ なので矛盾

## 補題1.2

> 言語 $L$ が $\Omega$ 上の正則言語ならば、 $L$ を受理する $\Omega$ 上のオートマトンが存在する

1. $L$ を受理するオートマトンを $\mathcal{M} = (Q, \Omega', \delta, q_0, F)$ とする
2. 以下では、$\mathcal{M}$ から $L$ を受理するオートマトンを具体的に構成していく
3. オートマトン $\mathcal{M}' = (Q', \Omega, \delta', q_0, F)$ を以下のように定義する
    1. $Q' = Q \cup \{q^*\}$ （ $q^*$ は状態で $q^* \notin Q$ ）
    2. $\delta'$ は次のように定める
        1. $\delta'(q, a) = \delta(q, a)$ （ $q \in Q$ かつ $a \in \Omega \cap \Omega'$ のとき）
        2. $\delta'(q, a) = q^*$ （ $q = q^*$ または $a \in \Omega - \Omega'$ のとき）
4. すると $L(\mathcal{M'}) = L(\mathcal{M})$（つまり $\mathcal{M'}$ は $L$ を受理する）
    1. $L(\mathcal{M'}) \subset L(\mathcal{M})$ の証明
        1. $w \in L(\mathcal{M'})$ を任意にとる
        2. $w$ を読み込む過程であらわれるどんな状態も $Q$ の要素であり、かつ $w$ の中のどんな記号も $\Omega \cap \Omega'$ の要素
            1. そうでなければ $\bar\delta'(q_0, w) = q^*$ となり、 $q^* \notin F$ なので受理されない（ $F \subset Q$ に注意）
        3. よって $\bar\delta(q_0, w) = \bar\delta'(q_0, w) \in F$
        4. よって $w \in L(\mathcal{M})$
    2. $L(\mathcal{M}) \subset L(\mathcal{M'})$ の証明
        1. $w \in L(\mathcal{M})$ を任意にとる
        2. $L$ は $\Omega$ 上の言語であり、 $\mathcal{M}$ は $\Omega'$ 上のオートマトンのため、 $w$ にあらわれるどんな記号も $\Omega \cap \Omega'$ の要素
        3. よって $\bar\delta'(q_0, w) = \bar\delta(q_0, w) \in F$
        4. よって $w \in L(\mathcal{M'})$

## 定理1.3

> $L \subset \Omega^*$ が正則であることは、有限モノイド $M$ とモノイド準同型 $\phi : \Omega^* \to M$ が存在して、 $L = \phi^{-1}\phi(L)$ が成り立つことと同値である

$L$ を $\Omega$ 上の言語とする

### 左ならば右

1. $L$ を正則だと仮定する
2. $L$ を受理するオートマトンを $\mathcal{M} = (Q, \Omega, \delta, q_0, F)$ とする
3. 各 $w \in \Omega^*$ に対して、関数 $f_w : Q \to Q$ を $f_w(q) = \bar{\delta}(q, w)$ と定義する
4. すると $M = \{f_w : w \in \Omega^*\}$ は有限集合
    1. オートマトンの定義より $Q$ は有限なので、 $Q$ から $Q$ への関数全体の集合も有限
5. すると $(M, \circ, f_\varepsilon)$ はモノイドをなす（ただし $f_u \circ f_v(q) = f_v(f_u(q))$）
    1. 単位元: $f_\varepsilon (q) = \bar\delta(q, \varepsilon) = q$ なので $f_\varepsilon \circ f_u(q) = f_u \circ f_\varepsilon(q)$
    2. （結合律については省略）
6. また、 $\phi(w) = f_w$ とすれば $\phi : \Omega^* \to M$ はモノイド準同型
    1. $f_u \circ f_v(q) = f_v(f_u(q)) = \bar\delta(\bar\delta(q, u), v) = \bar\delta(q, uv) = f_{uv}$
    2. よって $\phi(u) \circ \phi(v) = f_u \circ f_v = f_{uv} = \phi(uv)$
7. また、 $L = \phi^{-1}\phi(L)$ も成り立つ
    1. $\phi^{-1}\phi(L) \subset L$
        1. $w \in \phi^{-1}\phi(L)$ を任意にとる
        2. すると $\phi(w) \in \phi(L)$
        3. $\phi(L)$ の定義より、 $\phi(w) = \phi(w')$ なる $w' \in L$ が存在する
        4. $\bar\delta(q_0, w) = \bar\delta(q_0, w') \in F$ なので $w \in L$
    2. 逆の包含関係は自明

### 右ならば左

1. 右の条件をみたす有限モノイド $M$ と $\phi : \Omega^* \to M$ があると仮定する
2. オートマトン $\mathcal{M} = (Q, \Omega, \delta, q_0, F)$ を次のように定める
    1. $Q = M$
    2. $\delta(q, a) = q \circ \phi(a)$（ただし $\circ$ はモノイド $M$ の演算）
    3. $q_0$ は $M$ の単位元
    4. $F = \phi(L)$
3. すると $\bar{\delta}(q_0, w) = \phi(w)$
    1. $\bar{\delta}(q_0, a_1 \ldots a_n) = q_0 \circ \phi(a_1)\circ \ldots \circ \phi(a_n)$ なので
4. したがって $\bar{\delta}(q_0, w) = \phi(w) \in F = \phi(L) \Leftrightarrow w \in \phi^{-1}\phi(L) = L$
5. すなわち $\mathcal{M}$ は $L$ を受理する

他に同値なやつ

- [Myhill–Nerode theorem](https://en.wikipedia.org/wiki/Myhill%E2%80%93Nerode_theorem)
- [Büchi–Elgot–Trakhtenbrot theorem](https://en.wikipedia.org/wiki/B%C3%BCchi%E2%80%93Elgot%E2%80%93Trakhtenbrot_theorem)

## 定理1.4

> $\Omega$ 上の正則言語のクラスは集合演算 $\cap, \cup, {}^c$ について閉じている

教科書で省略されている $\cap$ だけを書き下ろす

1. $\Omega$ 上の正則言語を任意に2つ取り、それらを受理するオートマトンをそれぞれ $\mathcal{M}_i = (Q_i, \Omega, \delta_i, q_0^i, F_i)$ $(i = 1, 2)$ とする
2. オートマトン $\mathcal{M} = (Q_1 \times Q_2, \Omega, \delta, (q_0^1, q_0^2), F)$ を次のように定める
    1. $\delta((q^1, q^2), a) = (\delta_1(q^1, a), \delta_2(q^2, a))$
    2. $F = F_1 \times F_2$
3. このとき $L(\mathcal{M}) = L(\mathcal{M}_1) \cap L(\mathcal{M}_2)$
    1. $L(\mathcal{M}) \subset L(\mathcal{M}_1) \cap L(\mathcal{M}_2)$
        1. $w \in L(\mathcal{M})$ を任意にとる
        2. すると $\bar\delta((q^1_0, q^2_0), w) \in F$
        3. iiと $\delta, F$ の定義より $\bar\delta_1(q^1_0, w) \in F_1$ かつ $\bar\delta_2(q^2_0, w) \in F_2$
        4. よって $w \in L(\mathcal{M_1}) \cap L(\mathcal{M_2})$
    2. $L(\mathcal{M}_1) \cap L(\mathcal{M}_2) \subset L(\mathcal{M})$
        1. $w \in L(\mathcal{M}_1) \cap L(\mathcal{M}_2)$ を任意にとる
        2. すると $\bar\delta_1(q^1_0, w) \in F_1$ かつ $\bar\delta_2(q^2_0, w) \in F_2$
        3. iiと $\delta, F$ の定義より $\bar\delta((q^1_0, q^2_0), w) \in F$
        4. よって $w \in L(\mathcal{M})$

## 定理1.6

> 非決定性オートマトン $\mathcal{M}$ に対する $L(\mathcal{M})$ は正則言語である。すなわち、 $L(\mathcal{M})$ を受理する決定性オートマトンが存在する。

非決定性オートマトン $\mathcal{M} = (Q, \Omega, \delta, Q_0, F)$ に対し、決定性オートマトン $\mathcal{M}' = (Q', \Omega, \delta', q_0', F')$ を以下のように定義する。

$$
\begin{aligned}
Q' &= \mathcal{P}(Q), \\
\delta'(A, a) &= \bigcup_{q \in A} \delta(q, a) \quad (\text{ただし } A \in Q'), \\
q_0' &= Q_0, \\
F' &= \{ A \in Q' : A \cap F \neq \varnothing \}
\end{aligned}
$$

### 補題

> どんな $A \in Q', w \in \Omega^*$ に対しても $\bar{\delta'}(A, w) = \bar{\delta}(A, w)$

帰納法で示す

1. $w = \varepsilon$ の場合
    1. $\bar{\delta'}(A, \varepsilon) = A$
    2. $\bar{\delta}(A, \varepsilon) = \bigcup_{q \in A} \bar\delta(q, \varepsilon) = A$
    3. a, bより $\bar{\delta'}(A, \varepsilon) = \bar{\delta}(A, \varepsilon)$
2. $w = au$ （ $a \in \Omega, u \in \Omega^*$ ）の場合

$$
\begin{aligned}
\bar{\delta'}(A, au) &= \bar\delta'(\delta'(A, a), u) \\
&= \bar\delta'(\bigcup_{q \in A} \delta(q, a), u) \\
&= \bar\delta(\bigcup_{q \in A}\delta(q, a), u) \quad \text{(from I.H.)}\\
&= \bigcup_{p \in \bigcup_{q \in A}\delta(q, a)}\bar\delta(p, u) \\
&= \bigcup_{q \in A}\bigcup_{p \in \delta(q, a)}\bar\delta(p, u) \\
&= \bigcup_{q \in A}\bar\delta(q, au) \\
&= \bar\delta(A, au)
\end{aligned}
$$

### 証明

以下で $L(\mathcal{M}') = L(\mathcal{M})$ を示す

1. $L(\mathcal{M}') \subset L(\mathcal{M})$ の証明
    1. $w \in L(\mathcal{M}')$ を任意にとる
    2. 正則言語の定義より $\bar{\delta'}(q_0', w) \in F'$
    3. bと補題より $\bar{\delta}(Q_0, w) \in F'$
    4. cと $F'$ の定義より $\bar{\delta}(Q_0, w) \cap F \neq \varnothing$
    5. dより $w \in L(\mathcal{M})$
2. $L(\mathcal{M}) \subset L(\mathcal{M}')$ の証明
    1. $w \in L(\mathcal{M})$ を任意にとる
    2. 正則言語の定義より $\bar{\delta}(Q_0, w) \cap F \neq \varnothing$
    3. bと補題より $\bar{\delta'}(q_0', w) \cap F \neq \varnothing$
    4. cより $\bar{\delta'}(q_0', w) \in F'$
    5. dより $w \in L(\mathcal{M}')$

## 正規表現

- 空文字は正規表現である
- 任意の $a \in \Omega$ に対し、 $a$ は正規表現である
- $r_1, r_2$ が正規表現ならば、 $(r_1 + r_2)$ は正規表現である
- $r_1, r_2$ が正規表現ならば、 $r_1 r_2$ は正規表現である
- $r$ が正規表現ならば、 $r^*$ は正規表現である

## 正規表現が表す言語

$r$ を正規表現としたとき、それが表す言語 $L(r)$ を $r$ の構成に従って次のように帰納的に定義する

- $L(\varnothing) = \varnothing$
- $L(a) = \{a\}$（ただし $a \in \Omega$ ）
- $L(r_1 + r_2) = L(r_1) \cup L(r_2)$
- $L(r_1r_2) = L(r_1) \cdot L(r_2) = \{vw : v \in L(r_1),\ w \in L(r_2)\}$
- $L(r^*) = L(r)^* = \{w_1 w_2 \cdots w_n : n \geq 0,\ w_i \in L(r)\}$

## 定理1.7

> $\Omega$ 上の正則言語に関して、以下が成り立つ
>
> 1. $\varnothing$ は正則言語である
> 2. 任意の $a \in \Omega$ に対し $\{ a\}$ は正則言語である
> 3. $A, B$ が正則言語ならば $A \cup B$ も正則言語である
> 4. $A, B$ が正則言語ならば $A \cdot B = \{ v \cdot w : v \in A, w \in B \}$ も正則言語である
> 5. $A$ が正則言語ならば $A^* = \{w_1 w_2 \cdots w_n : w_i \in A\}$ も正則言語である

正規表現で書ける言語は正則（それを受理するオートマトンが存在する）という意味

### 4を受理する非決定性オートマトンの構成

$\mathcal{M}_A = (Q_A, \Omega, \delta_A, q_{0A}, F_A)$, $\mathcal{M}_B = (Q_B, \Omega, \delta_B, q_{0B}, F_B)$ をそれぞれ $A, B$ を受理する非決定性オートマトンとする。

$A \cdot B$ を受理する非決定性オートマトン $\mathcal{M}' = (Q', \Omega, \delta', Q_0', F')$ を次のように定義する

$$
\begin{aligned}
Q' &= Q_A \cup Q_B, \quad F' = F_B, \quad Q_0' = q_{0A} \\[6pt]
\delta'(q, a) &= \begin{cases} \delta_A(q, a) & (q \in Q_A \setminus F_A) \\ \delta_A(q, a) \cup \delta_B(q_{0B}, a) & (q \in F_A) \\ \delta_B(q, a) & (q \in Q_B) \end{cases}
\end{aligned}
$$

### 5を受理する非決定性オートマトンの構成

$\mathcal{M} = (Q, \Omega, \delta, q_0, F)$ を $A$ を受理する非決定性オートマトンとし、新しい状態 $q_s \notin Q$ を用意する。

$A^*$ を受理する非決定性オートマトン $\mathcal{M}' = (Q', \Omega, \delta', Q_0', F')$ を次のように定義する。

$$
\begin{aligned}
Q' &= Q \cup \{q_s\}, \quad Q_0' = \{q_s\}, \quad F' = \{q_s\} \cup F \\[6pt]
\delta'(q, a) &= \begin{cases} \delta(q_0, a) & (q = q_s) \\ \delta(q, a) \cup \delta(q_0, a) & (q \in F) \\ \delta(q, a) & (q \in Q \setminus F) \end{cases}
\end{aligned}
$$

## 定理1.8

> 定理1.7の5条件を満たす最小のクラスは正則言語のクラスである

正則言語ならば正規表現で書けるという意味

### 証明の流れ

1. $\mathcal{M} = (Q, \Omega, \delta, q_0, F)$ を任意に定めたオートマトンとし、その受理言語 $L$ が正規表現を持つことを示す
2. $Q$ は有限集合なので $Q = \{q_0, q_1, \ldots, q_n\}$ と番号付けできる
3. $0 \leq i, j, k \leq n$ としたとき、 $\mathcal{M}_{i, j} = (Q, \Omega, \delta, q_i, \{q_j\})$ で受理される語のうち、計算途中で $\{q_0, q_1, \ldots, q_k\}$ 以外の状態を通らずに受理される語の全体を $L^k_{i,j}$ とする
4. $L = \bigcup_{j \in F}L^n_{0, j}$ であるので、各 $L^n_{0, j}$ が正規表現を持つことを示せればいい

## 問題1

$\mathcal{M} = (\{q_0, q_1, q_2\},\; \{0, 1\},\; \delta,\; q_0,\; \{q_0, q_2\})$ は $L$ を受理する非決定性オートマトン。ただし $\delta$ は次のように定義される

- $\delta(q_0, 0) = \{q_1\}, \quad \delta(q_0, 1) = \varnothing$
- $\delta(q_1, 0) = \varnothing, \quad \delta(q_1, 1) = \{q_2\}$
- $\delta(q_2, 0) = \{q_1\}, \quad \delta(q_2, 1) = \{q_0\}$

こっから定理1.6の方法で決定性オートマトンを作ればいい

## 問題2

> $L$ が正則ならば $L^R = \{w^R : w \in L\}$ も正則である。

$L$ を受理するオートマトンを $\mathcal{M} = (Q, \Omega, \delta, q_0, F)$ とする。

非決定性オートマトン $\mathcal{M}' = (Q, \Omega, \delta', F, \{q_0\})$ を以下のように定義すると、これは $L^R$ を受理する

- 初期状態を $F$, 終了状態を $\{q_0\}$ とする
- $\delta'(q, a) = \{p \in Q : \delta(p, a) = q\}$（元の遷移を逆向きにする）
