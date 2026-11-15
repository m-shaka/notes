---
sidebar_position: 5
---

# 3.5 Incompleteness and Undecidability

## 前提

- $\mathfrak{N}$: 自然数の標準構造
- $A_E$: $\mathfrak{N}$ の言語における有限公理集合（Section 3.3 で導入）
- 「再帰的」と「$\mathrm{Cn}\,A_E$ で表現可能」は同値（Theorem 34A）
- Section 3.4 により、構文論的概念（項・論理式・証明など）のゲーデル数に関する関係・関数が $\mathrm{Cn}\,A_E$ で表現可能

:::definition[再帰的枚挙可能性 (Recursive Enumerability)]

自然数上の $m$ 項関係 $R$ が**再帰的枚挙可能 (recursively enumerable, r.e.)** であるとは、$\langle \vec{a}, b \rangle \in Q$ を満たすような $b$ が存在することと $\vec{a} \in R$ であることが同値となるような再帰的関係 $Q$ が存在することをいう。すなわち、

$$R = \{\vec{a} \mid \langle \vec{a}, b \rangle \in Q \text{ を満たすような } b \text{ が存在する}\}$$

と書ける。

直観的には、再帰的関係（= 属する/属さないを有限時間で判定できる関係）の上に存在量化子を1つ被せたもの。$\vec{a} \in R$ の場合は証拠 $b$ を $0, 1, 2, \dots$ と探索すればいずれ見つかるが、$\vec{a} \notin R$ の場合には探索が終了しないことがありうる。

<details>
<summary>再帰的関係の定義（Theorem 34A）</summary>

関係 $R$ が**再帰的 (recursive)** $\iff$ $R$ が $\mathrm{Cn}\,A_E$ で表現可能、すなわち、どんな $a_1, \dots, a_n \in \mathbb{N}$ に対しても以下を満たすような論理式 $\varphi(v_1, \dots, v_n)$ が存在する

- $\langle a_1, \dots, a_n \rangle \in R \implies A_E \vdash \varphi(S^{a_1}0, \dots, S^{a_n}0)$
- $\langle a_1, \dots, a_n \rangle \notin R \implies A_E \vdash \lnot\varphi(S^{a_1}0, \dots, S^{a_n}0)$

</details>

:::

## Theorem 35E（再帰的枚挙可能性の同値条件）

> $m$ 項関係 $R$ に対し、以下は同値である：
>
> 1. $R$ は再帰的枚挙可能である
> 2. $R$ はある再帰的関係 $Q$ の定義域である
> 3. ある再帰的 $(m+1)$ 項関係 $Q$ に対し $R = \{\langle a_1, \dots, a_m \rangle \mid \langle a_1, \dots, a_m, b \rangle \in Q \text{ を満たすような } b \text{ が存在する}\}$
> 4. ある再帰的 $(m+n)$ 項関係 $Q$ に対し $R = \{\langle a_1, \dots, a_m \rangle \mid \langle a_1, \dots, a_m, b_1, \dots, b_n \rangle \in Q \text{ を満たすような } b_1, \dots, b_n \text{ が存在する}\}$

1. 定義より 1 と 3 は同値
2. 定義域の定義と $(m+1)$ 組の定義より 2 と 3 は同値
3. 3 ならば 4 は自明（$n = 1$ の場合が 3）
4. 4 ならば 3 を示す
   1. 4 の条件を満たす再帰的 $(m+n)$ 項関係 $Q$ があるとする
   2. $\langle a_1, \dots, a_m, b_1, \dots, b_n \rangle \in Q$ を満たすような $b_1, \dots, b_n$ が存在することと、$\langle a_1, \dots, a_m, (c)_0, \dots, (c)_{n-1} \rangle \in Q$ を満たすような $c$ が存在することは同値（数列の復号関数 $(\ )_i$ を使って複数の量化子を1つに潰せる）
   3. $Q' = \{\langle a_1, \dots, a_m, c \rangle \mid \langle a_1, \dots, a_m, (c)_0, \dots, (c)_{n-1} \rangle \in Q\}$ とおくと、$Q$ が再帰的であることから $Q'$ も再帰的
   4. よって $R = \{\langle a_1, \dots, a_m \rangle \mid \langle a_1, \dots, a_m, c \rangle \in Q' \text{ を満たすような } c \text{ が存在する}\}$ であり、3 の形になっている

## Theorem 35F（再帰的 $\iff$ 自身と補集合が共に r.e.）

> 関係 $P$ が再帰的であることと、$P$ と $\bar{P}$（補集合）がともに再帰的枚挙可能であることは同値である

### 左ならば右

1. $P$ が再帰的と仮定する
2. $P$ が再帰的ならば $\bar{P}$ も再帰的
3. 再帰的な関係は再帰的枚挙可能でもある（量化子が空の場合として）
4. よって $P$ と $\bar{P}$ はともに再帰的枚挙可能

### 右ならば左

$P$ と $\bar{P}$ がともに再帰的枚挙可能であると仮定して、$P$ が再帰的であることを示す

1. 仮定より、以下を満たすような再帰的関係 $Q, R$ が存在する
   - $\vec{a} \in P \iff \langle \vec{a}, b \rangle \in Q$ を満たすような $b$ が存在する
   - $\vec{a} \notin P \iff \langle \vec{a}, b \rangle \in R$ を満たすような $b$ が存在する
2. $g(\vec{a}, b) = \begin{cases} 0 & \langle \vec{a}, b \rangle \in Q \lor \langle \vec{a}, b \rangle \in R \\ 1 & \text{otherwise} \end{cases}$ と定義する。$Q, R$ が再帰的なので $g$ も再帰的
3. $f(\vec{a}) = \mu b [g(\vec{a}, b) = 0]$ と定義する
4. どんな $\vec{a}$ に対しても $\vec{a} \in P$ か $\vec{a} \notin P$ のいずれかが成り立つので、$g(\vec{a}, b) = 0$ を満たすような $b$ は必ず存在する。よって $f$ は全域的かつ再帰的
5. $\vec{a} \in P \iff \langle \vec{a}, f(\vec{a}) \rangle \in Q$
   - ($\Rightarrow$) $\vec{a} \in P$ ならば 1 の条件が $\iff$ なので $\langle \vec{a}, b \rangle \in R$ を満たすような $b$ は存在しない。よって $f(\vec{a})$ は $Q$ 側で見つかる
   - ($\Leftarrow$) $\vec{a} \notin P$ ならば同様に $\langle \vec{a}, b \rangle \in Q$ を満たすような $b$ は存在しない。よって $\langle \vec{a}, f(\vec{a}) \rangle \notin Q$
6. 5 より $K_Q(\vec{a}, f(\vec{a}))$ は $P$ の特性関数である。$K_Q, f$ がともに再帰的なのでその合成も再帰的であり（Section 3.3 catalog item 1）、$P$ は再帰的

## Lemma 35G

> 関係が effectively enumerable であることと、決定可能な関係の定義域であることは同値である

### 左ならば右

1. $Q$ を effectively enumerable と仮定する
2. $\vec{a} \in Q \iff \text{「}n \text{ ステップ以内の枚挙で } \vec{a} \text{ が出現する」を満たすような } n \text{ が存在する}$
3. 鍵括弧内の関係は決定可能であり、$Q$ はその定義域

### 右ならば左

1. $R$ を決定可能な関係とし、$Q = \{\langle a, b \rangle \mid \langle a, b, n \rangle \in R \text{ を満たすような } n \text{ が存在する}\}$ を枚挙したいとする
2. $m = 0, 1, 2, \dots$ と順に調べ、$m$ が長さ 3 の列数であれば $\langle (m)_0, (m)_1, (m)_2 \rangle \in R$ かどうかを判定する
3. 成り立つ場合、$\langle (m)_0, (m)_1 \rangle$ を出力リストに加える
4. $R$ が決定可能なので各ステップの判定は有限時間で終了し、$Q$ のどの要素に対しても、有限ステップ内に出力される

## Corollary 35H（Church's thesis, 第2形式）

> 関係が effectively enumerable であることと、再帰的枚挙可能であることは同値である

1. Church's thesis（第1形式）より、決定可能な関係のクラスと再帰的な関係のクラスは一致する
2. Lemma 35G より、effectively enumerable な関係は決定可能な関係の定義域のクラスと一致する
3. Theorem 35E より、再帰的枚挙可能な関係は再帰的関係の定義域のクラスと一致する
4. 1 より「決定可能な関係の定義域」と「再帰的関係の定義域」は同じクラスなので、2 と 3 より同値性が成り立つ

## Theorem 35I

> $A$ が文の集合で $\#A$ が再帰的ならば、$\#\mathrm{Cn}\,A$ は再帰的枚挙可能である

1. Section 3.4 item 20 より
   $$a \in \#\mathrm{Cn}\,A \iff d \text{ は } A \text{ からの演繹のゲーデル数であり、} d \text{ の最終成分が } a \text{ であり、} a \text{ は文のゲーデル数、を満たすような } d \text{ が存在する}$$
2. 条件部分は再帰的関係を定める（Section 3.4 item 18 の証明による）
3. よって $\#\mathrm{Cn}\,A$ は再帰的関係の定義域として表されるので、再帰的枚挙可能

:::definition[弱い表現可能性 (Weak Representability)]

論理式 $\psi(v_1, \dots, v_n)$ が関係 $Q$ を理論 $T$ で**弱く表現する (weakly represent)** とは、どんな $a_1, \dots, a_n \in \mathbb{N}$ に対しても

$$\langle a_1, \dots, a_n \rangle \in Q \iff \psi(S^{a_1}0, \dots, S^{a_n}0) \in T$$

が成り立つことをいう。

表現可能性（representability）との違い：表現可能性は $\langle a_1, \dots, a_n \rangle \notin Q$ のとき $\lnot\psi(S^{a_1}0, \dots, S^{a_n}0) \in T$ も要求するが、弱い表現可能性は $\psi(S^{a_1}0, \dots, S^{a_n}0) \notin T$ しか要求しない。

:::

## Theorem 35J（弱い表現可能性と再帰的枚挙可能性の同値性）

> 関係が $\mathrm{Cn}\,A_E$ で弱く表現可能であることと、再帰的枚挙可能であることは同値である

### 再帰的枚挙可能ならば弱く表現可能

$Q$ が再帰的枚挙可能な単項関係の場合を示す（多項の場合も記法の変更のみ）。

1. 仮定より、$\langle a, b \rangle \in R$ を満たすような $b$ が存在することと、 $a \in Q$ であることが同値となるような再帰的関係 $R$ が存在する
2. $R$ は再帰的なので、$\mathrm{Cn}\,A_E$ で $R$ を表現する論理式 $\rho(v_1, v_2)$ が存在する
3. $a \in Q$ と仮定する
   1. $\langle a, b \rangle \in R$ を満たすような $b$ が存在する
   2. $\rho$ は $R$ を表現するので $A_E \vdash \rho(S^a 0, S^b 0)$
   3. よって $A_E \vdash \exists v_2\, \rho(S^a 0, v_2)$
4. $a \notin Q$ と仮定する
   1. どんな $b$ に対しても $\langle a, b \rangle \notin R$
   2. $\rho$ は $R$ を表現するので、どんな $b$ に対しても $A_E \vdash \lnot \rho(S^a 0, S^b 0)$
   3. $A_E$ は $\omega$-無矛盾なので $A_E \nvdash \exists v_2\, \rho(S^a 0, v_2)$
      - $\omega$-無矛盾性：どんな論理式 $\varphi$ に対しても、どんな $b$ に対しても $A_E \vdash \lnot \varphi(S^b 0)$ ならば $A_E \nvdash \exists x\, \varphi(x)$
      - $A_E$ の公理は自然数構造で真なので、健全性の対偶より従う
5. 3 と 4 より $a \in Q \iff A_E \vdash \exists v_2\, \rho(S^a 0, v_2)$
6. よって $\exists v_2\, \rho(v_1, v_2)$ は $Q$ を $\mathrm{Cn}\,A_E$ で弱く表現する

### 弱く表現可能ならば再帰的枚挙可能

1. $\psi$ が $Q$ を $\mathrm{Cn}\,A_E$ で弱く表現するとする
2. 弱い表現可能性の定義より $\langle a_1, \dots, a_n \rangle \in Q \iff \psi(S^{a_1} 0, \dots, S^{a_n} 0) \in \mathrm{Cn}\,A_E$
3. 右辺を書き換えると $\iff$ $A_E$ からの $\psi(S^{a_1} 0, \dots, S^{a_n} 0)$ の演繹が存在する
4. $\iff$ $\langle a_1, \dots, a_n, d \rangle \in R$ を満たすような $d$ が存在する
   - ここで $R = \{\langle a_1, \dots, a_n, d \rangle \mid d \text{ は } A_E \text{ からの演繹のゲーデル数で、最終成分が } \#\psi(S^{a_1}0, \dots, S^{a_n}0)\}$
   - $R$ が再帰的であることは次の二つから従う
     1. $a_1, \dots, a_n$ から $\#\psi(S^{a_1}0, \dots, S^{a_n}0)$ を計算する関数は再帰的
        - $\psi$ は固定なのでそのゲーデル数 $\#\psi$ は定数
        - $\#(S^{a}0)$ は $a$ の再帰的関数（$\#0$ に $a$ 回 $\#S$ を被せる原始再帰的構成）
        - 論理式のゲーデル数への代入も再帰的操作（Section 3.4 の構文操作の一つ）
        - これらの合成として得られる
     2. 「$d$ が $A_E$ からの演繹のゲーデル数で、その最終成分が与えられた値に等しい」という関係は再帰的（Section 3.4 item 18、および数列の最終成分を取り出す関数の再帰性）
   - 1 で計算した値と 2 の最終成分が等しいかの判定は、二つの再帰的関数の値の等号判定なので再帰的関係。よって $R$ は再帰的
5. よって $Q$ は再帰的枚挙可能

## 算術的階層 (Arithmetical Hierarchy)

:::definition[算術的関係 (Arithmetical Relation)]

自然数上の関係 $R$ が**算術的 (arithmetical)** であるとは、$R$ が標準構造 $\mathfrak{N}$ で定義可能であることをいう。

:::

算術的関係は「どの程度定義可能か」に応じて階層に分類できる。基本となるアイデアは「$n$ 個の量化子を使えば再帰的関係から作れる」という深さで関係を測ることである。

:::definition[$\Sigma_k, \Pi_k$ クラス]

自然数上の関係 $Q$ のクラス $\Sigma_k, \Pi_k$ を次のように定める。

- $Q \in \Sigma_k \iff$ 次を満たすような再帰的な関係 $R$ が存在する：どんな $\vec{a}$ に対しても、$\vec{a} \in Q$ であることと、$\langle \vec{a}, b_1, b_2, \dots, b_k \rangle \in R$ に $b_1$ から順に「…を満たす $b_i$ が存在する」「どんな $b_i$ に対しても」を交互に施した条件（存在から始まる）とが同値
- $Q \in \Pi_k \iff$ 次を満たすような再帰的な関係 $R$ が存在する：どんな $\vec{a}$ に対しても、$\vec{a} \in Q$ であることと、$\langle \vec{a}, b_1, b_2, \dots, b_k \rangle \in R$ に $b_1$ から順に「どんな $b_i$ に対しても」「…を満たす $b_i$ が存在する」を交互に施した条件（全称から始まる）とが同値

最初の数個を具体的に書くと

- $\Sigma_1 = \{\{\vec{a} \mid \langle \vec{a}, b \rangle \in R \text{ を満たす } b \text{ が存在する}\} \mid R \text{ は再帰的}\}$（= 再帰的枚挙可能な関係のクラス）
- $\Pi_1 = \{\{\vec{a} \mid \text{どんな } b \text{ に対しても } \langle \vec{a}, b \rangle \in R\} \mid R \text{ は再帰的}\}$
- $\Sigma_2 = \{\{\vec{a} \mid \text{どんな } b \text{ に対しても } \langle \vec{a}, b, c \rangle \in R \text{ となるような } c \text{ が存在する}\} \mid R \text{ は再帰的}\}$
- $\Pi_2 = \{\{\vec{a} \mid \text{どんな } c \text{ に対しても、} \langle \vec{a}, b, c \rangle \in R \text{ を満たす } b \text{ が存在する}\} \mid R \text{ は再帰的}\}$

:::

:::note[$k$ に関する再帰的定義]

上の定義は $k$ に関する再帰でも書ける。

- $\Sigma_1 =$ 再帰的枚挙可能な関係のクラス
- $\Pi_k = \{\bar{Q} \mid Q \in \Sigma_k\}$（補集合をとったもの）
- $\Sigma_{k+1} = \{Q \text{ の定義域} \mid Q \in \Pi_k\}$

$k = 0$ から始めて $\Sigma_0 = \Pi_0 = $ 再帰的関係のクラスとしてもよい。

:::

:::definition[$\Delta_k$ クラス]

$$\Delta_k = \Sigma_k \cap \Pi_k$$

Theorem 35F「関係が再帰的であることとそれ自身と補集合がともに再帰的枚挙可能であることは同値」は $\Delta_1 = $ 再帰的関係のクラス、という形で言い換えられる。

:::

### 例：$A_E$ で numeralwise determined な論理式のゲーデル数の集合は $\Pi_2$ に属する

> 論理式 $\alpha$ が $A_E$ で **numeralwise determined** であるとは、どんな自然数 $b_0, b_1, \dots$ に対しても $A_E \vdash \alpha(S^{b_0}0, S^{b_1}0, \dots)$ かまたは $A_E \vdash \lnot\alpha(S^{b_0}0, S^{b_1}0, \dots)$ が成り立つことをいう

1. $a$ がこの集合に属する条件を書き下すと
   - $a$ は論理式のゲーデル数であり、かつ
   - どんな $b$ に対しても、「$A_E$ からの $\alpha(S^{(b)_0}0, S^{(b)_1}0, \dots)$ の演繹のゲーデル数か、またはその否定の演繹のゲーデル数である」を満たすような $d$ が存在する
2. 角括弧内の部分は Section 3.4 の手法により再帰的関係を定める
3. 量化子を外に出せば $\{a \mid \text{どんな } b \text{ に対しても、} \langle a, b, d \rangle \in R \text{ を満たす } d \text{ が存在する}\}$ の形になり、$R$ は再帰的
4. よって $\Pi_2$ に属する

### 階層の包含関係

次の包含関係が成り立つ。

$$\Sigma_k \subset \Sigma_{k+1}, \quad \Sigma_k \subset \Pi_{k+1}, \quad \Pi_k \subset \Sigma_{k+1}, \quad \Pi_k \subset \Pi_{k+1}$$

また $\Delta_{k+1} = \Sigma_{k+1} \cap \Pi_{k+1}$ は $\Sigma_k \cup \Pi_k$ を含む。

1. 基本アイデアは「空な量化 (vacuous quantification)」。論理式 $\varphi$ に変数 $x$ が自由に現れなければ、$\varphi$, $\forall x\, \varphi$, $\exists x\, \varphi$ はすべて同値
2. 例えば $\Sigma_1$ の関係は $\exists y\, \varphi$（$\varphi$ は numeralwise determined）の形で定義されるが、$x$ を $\varphi$ に出現しない新しい変数として取れば、$\exists y\, \forall x\, \varphi$ や $\forall x\, \exists y\, \varphi$ でも同じ関係が定義される。よってこの関係は $\Sigma_2$ にも $\Pi_2$ にも属する

なお、これらの包含はすべて**真の**包含（等号が成立しない）であることが知られているが、本節ではその証明は与えない。

### Theorem 35K（算術的関係と階層の関係）

> 自然数上の関係 $R$ が算術的（すなわち $\mathfrak{N}$ で定義可能）であることは、$R \in \Sigma_k$ を満たすような $k$ が存在することと同値であり、また $R \in \Pi_l$ を満たすような $l$ が存在することとも同値である

#### 階層の各クラスに属する関係は算術的

1. 例として $\Sigma_2$ の関係 $Q$ をとる
2. 定義より、$Q = \{\vec{a} \mid \text{どんな } b \text{ に対しても } \langle \vec{a}, b, c \rangle \in R \text{ となるような } c \text{ が存在する}\}$ を満たすような再帰的関係 $R$ が存在する
3. $R$ は再帰的なので $\mathrm{Cn}\,A_E$ で表現可能、従って $\mathfrak{N}$ で論理式 $\varphi(\vec{v}, v_b, v_c)$ により定義される
4. $\exists v_c\, \forall v_b\, \varphi(\vec{v}, v_b, v_c)$ は $\mathfrak{N}$ で $Q$ を定義する
5. 一般の $\Sigma_k, \Pi_k$ も同様

#### 算術的関係は階層のどこかに属する

1. 算術的関係 $R$ をとる。$R$ は $\mathfrak{N}$ で論理式 $\psi$ により定義される
2. $\psi$ を前提標準形（prenex form）に変形する。すなわち $Q_1 x_1\, Q_2 x_2\, \cdots Q_m x_m\, \theta$ の形（$\theta$ は量化子を含まない）
3. 量化子を含まない論理式は $A_E$ で numeralwise determined であり、その定義する関係は再帰的
4. 同じ種類の量化子が連続している場合は、Theorem 35E の証明で使った「数列の復号関数による量化子の潰し込み」（およびその双対）で 1 つの量化子にまとめられる
5. よって $\Sigma_k$ か $\Pi_k$ の形に整形でき、階層のどこかに属する

### 有界量化子のトリック

階層内の具体的な関係の位置を同定するときに有用なテクニックとして、**有界量化子 (bounded quantifier)** は量化子の数にカウントしなくてよい、という事実がある。

- 「$n$ 未満のどんな $i$ に対しても、$\langle d, i \rangle \in P$ を満たすような $d$ が存在する」という条件は、「$n$ 未満のどんな $i$ に対しても $\langle (d)_i, i \rangle \in P$ となるような $d$ が存在する」という条件と同値である（各 $i$ に対する証人を列 $d$ にまとめ、$(d)_i$ で取り出す）
- これにより有界量化子を内側に押し込んで再帰的な部分に吸収でき、見かけ上の量化子の数を減らせる

### Theorem 35L（Theorem 35I の一般化）

> $A$ が文の集合で $\#A \in \Sigma_k$（$k > 0$）ならば、$\#\mathrm{Cn}\,A$ も $\Sigma_k$ に属する

1. Theorem 35I の証明と同様に、Section 3.4 item 18, 20 より
   $$a \in \#\mathrm{Cn}\,A \iff a \text{ は文のゲーデル数であり、} d \text{ が列数で、} d \text{ の最終成分が } a \text{ であり、各 } i < \mathrm{lh}(d) \text{ について } (d)_i \text{ は (1) } A \text{ の要素、(2) 論理的公理のゲーデル数、(3) MP で先行する成分から導かれる、のいずれか、を満たすような } d \text{ が存在する}$$
2. $\#A \in \Sigma_k$ なので「$(d)_i \in \#A$」の部分は、再帰的関係 $Q$ を用いて、$\langle (d)_i, b_1, \dots, b_k \rangle \in Q$ に「…を満たす $b_1$ が存在する」「どんな $b_2$ に対しても」…を交互に施した形に置き換えられる
3. 全体を前提標準形に整形し、有界量化子のトリックと量化子の潰し込みを併用して $\Sigma_k$ の形にまとめる
4. よって $\#\mathrm{Cn}\,A \in \Sigma_k$

:::note[Theorem 35I との関係]

Theorem 35I は「$\#A$ が再帰的ならば $\#\mathrm{Cn}\,A$ は再帰的枚挙可能」という主張だった。$\Delta_1 = $ 再帰的なので $\#A \in \Delta_1 \subset \Sigma_1$ であり、Theorem 35L を $k = 1$ に適用すると $\#\mathrm{Cn}\,A \in \Sigma_1 = $ 再帰的枚挙可能が得られる。

:::
