---
sidebar_position: 7
---

# 3.7 Second Incompleteness Theorem

## Applications to Set Theory

### Enderton の方針

Enderton は、ZF などの集合論の公理から証明できる文全体を $\mathrm{ST}$ とし、$\mathrm{ST}$ が無矛盾なら、与えられた文が $\mathrm{ST}$ の定理かどうかを判定するアルゴリズムは存在しないことを示す。

使うのは、[Section 3.5](./section3-5.md) で示した「$A_E$ を含む無矛盾な算術の理論は決定不能」という結果（定理35C）である。算術の文 $\sigma$ を集合論の文 $\sigma^\pi$ に翻訳し、$\mathrm{ST}$ で証明できる翻訳に対応する元の算術の文を集める。これが集合論の算術部分 $\pi^{-1}[\mathrm{ST}]$ である。

この算術部分が $A_E$ を含む無矛盾な理論なら、定理35Cにより決定不能である。一方、$\mathrm{ST}$ に判定器があれば、$\sigma$ を翻訳して $\sigma^\pi$ をその判定器にかけるだけで、算術部分への所属も判定できてしまう。そこで、自然数とその演算を集合で表し、$A_E$ の各公理の翻訳を $\mathrm{ST}$ で証明できるように $\pi$ を作る。

### Section 2.7 の復習

:::definition[言語の翻訳（Interpretation）]

$T_1$ を等号を含む言語 $L_1$ の理論とする。$\pi$ は、言語 $L_0$ の全称量化記号、述語記号 $P$、関数記号 $f$ に、$L_1$ の論理式 $\pi_\forall(x)$、$\pi_P(x_1,\ldots,x_n)$、$\pi_f(x_1,\ldots,x_n,y)$ をそれぞれ割り当てる。各式の自由変数は、引数として示した変数に限る。

$T_1$ のどのモデルでも次の条件が成り立つとき、$\pi$ を **$L_0$ の $T_1$ への翻訳**と呼ぶ。

1. $\pi_\forall(x)$ を満たす元が存在する。この式が翻訳先で量化の範囲を定める。
2. 各関数記号 $f$ について、その範囲に入るどんな入力に対しても、$\pi_f$ を満たす出力がただ一つ存在し、その出力は同じ範囲に入る。定数は入力が0個の場合に当たる。

:::

この割り当てから、$L_0$ の論理式 $\alpha$ を $L_1$ の論理式 $\alpha^\pi$ に変換する規則が定まる。

:::definition[理論の翻訳（Interpretation）]

$T_0$ を $L_0$ の理論とする。**$T_0$ の $T_1$ への翻訳**とは、$L_0$ の $T_1$ への翻訳 $\pi$ であって、次を満たすものをいう。

$$
T_0\subseteq\pi^{-1}[T_1].
$$

系27Cより、$\pi^{-1}[T_1]$ は、翻訳 $\sigma^\pi$ が $T_1$ に属するような $L_0$ の文 $\sigma$ 全体である。したがって、この条件は、$L_0$ のどんな文 $\sigma$ に対しても $\sigma\in T_0$ ならば $\sigma^\pi\in T_1$ となることをいう。

:::

$\pi$ の割り当てから $\alpha^\pi$ を組み立てる構文上の規則は次のとおりである。

- **変数**はそのまま使う。以下の $x_1,\ldots,x_n$ は変数を表す。
- **述語記号** $P$ は、引数がすべて変数になったところで置き換える。$(P(x_1,\ldots,x_n))^\pi=\pi_P(x_1,\ldots,x_n)$。
- **等号**は、両辺が変数になれば $(x=y)^\pi=(x=y)$ とする。
- **関数記号** $f$ は、原子式の中で最も右にある関数記号から処理する。Enderton の記法では、そこにある項は $f(x_1,\ldots,x_n)$ の形をしている。その項を新しい変数 $y$ で置き換えて得た原子式を $\alpha'$ とすると、元の原子式 $\alpha$ は次のように訳す。

  $$
  \alpha^\pi=\forall y\bigl(\pi_f(x_1,\ldots,x_n,y)\to(\alpha')^\pi\bigr).
  $$

  $\pi_f(x_1,\ldots,x_n,y)$ は、与えた引数に対する $f$ の値が $y$ であることを表す。$\alpha'$ に残った関数項にも同じ規則を適用する。定数 $c$ の場合は引数が0個なので、条件は $\pi_c(y)$ になる。

- **否定**は、内側を訳してから否定する。$(\lnot\varphi)^\pi=\lnot(\varphi^\pi)$。
- **含意**は、前件と後件をそれぞれ訳す。$(\varphi\to\psi)^\pi=\varphi^\pi\to\psi^\pi$。
- **全称量化**は、$\pi_\forall(x)$ を前件に置いて範囲を絞る。$(\forall x\,\varphi)^\pi=\forall x\bigl(\pi_\forall(x)\to\varphi^\pi\bigr)$。
- **存在量化**は、$\exists x\,\varphi$ を $\lnot\forall x\,\lnot\varphi$ に展開して訳す。結果は $\exists x\bigl(\pi_\forall(x)\land\varphi^\pi\bigr)$ と同値になる。

### 集合論への翻訳に使う式

$0$ を空集合で表し、後続数を $n\cup\{n\}$ で表す。すると $1=\{0\}$、$2=\{0,1\}$、$3=\{0,1,2\}$ となる。これらの自然数を集めた集合を $\omega$ とする。

| 算術での役割 | 集合論の式 | 式が表す条件 |
| --- | --- | --- |
| 量化の範囲 | $\pi_\forall(x)$ | $x\in\omega$ |
| 定数 $0$ | $\pi_0(e)$ | $e=\varnothing$ |
| 後続関数 $S$ | $\pi_S(x,y)$ | $y=x\cup\{x\}$ |
| 順序 $<$ | $\pi_<(x,y)$ | $x\in y$ |
| 加法 $+$ | $\pi_+(a,b,c)$ | $a,b$ の和は $c$ |

関数記号の翻訳では、入力に加えて**値の候補**を変数にする。$0$ は入力が0個の定数なので、$\pi_0(e)$ の自由変数は値の候補 $e$ の一つだけである。$S$ では入力 $x$ と値の候補 $y$ の二つになる。

<details>
<summary>等号と所属関係による展開</summary>

$$
\begin{aligned}
\pi_0(e) &\equiv \forall z\,\lnot(z\in e),\\
\pi_S(x,y) &\equiv \forall z\bigl(z\in y\leftrightarrow(z\in x\lor z=x)\bigr),\\
\pi_<(x,y) &\equiv x\in y.
\end{aligned}
$$

空集合を含み、後続数を取る操作で閉じている集合を**帰納的集合**と呼ぶ。$\omega$ は最小の帰納的集合なので、「$x\in\omega$」は「$x$ がどんな帰納的集合にも属する」と書ける。

$$
\begin{aligned}
\pi_\forall(x)\equiv\forall A\Bigl(
  \Bigl[&
    \exists e\bigl(e\in A\land\forall z\,\lnot(z\in e)\bigr)\\
    &{}\land\forall u\Bigl(u\in A\to
      \exists v\bigl(v\in A\land
        \forall z(z\in v\leftrightarrow(z\in u\lor z=u))\bigr)\Bigr)
  \Bigr]\to x\in A\Bigr).
\end{aligned}
$$

</details>

加法では、どんな $a,b\in\omega$ に対しても

$$
f(a,0)=a,\qquad f(a,S(b))=S(f(a,b))
$$

を満たす関数 $f:\omega\times\omega\to\omega$ を使う。集合論の再帰定理により、この $f$ がただ一つ存在する。$a$ を固定すれば、初期値 $a$ から後続数を順に取っていく列である。$\pi_+(a,b,c)$ は「この再帰式を満たすどんな $f$ に対しても $f(a,b)=c$」と定める。乗法 $\pi_{\cdot}$ と累乗 $\pi_E$ も、それぞれの再帰式を使って同様に定める。

### 有限個の文で翻訳を保証する

本文の (i)・(ii) は、ここで構成した $\pi$ が算術の言語の $\mathrm{ST}$ への翻訳となるための条件である。

- **(i)** $\pi_\forall$ が定める範囲が空でないことを $\mathrm{ST}$ が保証する。これが言語の翻訳の第1条件に当たり、一つの文で表される。
- **(ii)** $0,S,+,\cdot,E$ のそれぞれについて、範囲内の入力に対する出力がただ一つ存在し、その出力も同じ範囲に入ることを $\mathrm{ST}$ が保証する。これが言語の翻訳の第2条件に当たり、関数記号ごとの五つの文で表される。定数 $0$ は入力が0個の場合である。

ここに本文の **(iii)**、すなわち「$A_E$ の11個の公理 $\alpha$ のそれぞれについて $\alpha^\pi\in\mathrm{ST}$」を加えると、$\pi$ は理論 $\mathrm{Cn}\,A_E$ の $\mathrm{ST}$ への翻訳になる。

**(i)・(ii)・(iii)を仮定して、理論の翻訳の条件 $\mathrm{Cn}\,A_E\subseteq\pi^{-1}[\mathrm{ST}]$ を示す。**

1. $\sigma\in\mathrm{Cn}\,A_E$ を満たす文 $\sigma$ を任意にとる。$\sigma\in\pi^{-1}[\mathrm{ST}]$ を示すため、$\mathrm{ST}$ のモデル $\mathcal B$ を任意にとる。
2. (i)・(ii)より、$\pi$ は算術の言語の $\mathrm{ST}$ への翻訳なので、$\mathcal B$ から算術の構造 $\pi\mathcal B$ が定まる。
3. $\pi\mathcal B$ が $A_E$ のモデルであることを示す。
   1. 公理 $\alpha\in A_E$ を任意にとる。
   2. (iii)より $\alpha^\pi\in\mathrm{ST}$ なので、$\mathcal B\models\alpha^\pi$ である。
   3. 補題27Bより、$\pi\mathcal B\models\alpha$ である。$\alpha$ は任意だったので、$\pi\mathcal B\models A_E$ である。
4. $\sigma\in\mathrm{Cn}\,A_E$ は、$A_E$ のどのモデルでも $\sigma$ が真であることを意味する。よって3より、$\pi\mathcal B\models\sigma$ である。
5. $\mathcal B$ は任意だったので、$\sigma$ は、$\mathrm{ST}$ のモデルから $\pi$ で得られるどの構造でも真である。これは $\pi^{-1}[\mathrm{ST}]$ の定義より、$\sigma\in\pi^{-1}[\mathrm{ST}]$ を意味する。
6. $\sigma$ は任意だったので、$\mathrm{Cn}\,A_E\subseteq\pi^{-1}[\mathrm{ST}]$ である。したがって、$\pi$ は $\mathrm{Cn}\,A_E$ の $\mathrm{ST}$ への翻訳である。

(i)・(ii)・(iii)を表す文は合計17個である。それらをすべて導けるような有限集合 $\Phi\subseteq\mathrm{ST}$ をとる。たとえば17個の文自体を集めればよい。同じ議論を $\mathrm{ST}$ の代わりに $\mathrm{Cn}\,\Phi$ に適用すると、$\pi$ は $\mathrm{Cn}\,A_E$ の $\mathrm{Cn}\,\Phi$ への翻訳でもある。

### 定理37D（集合論の強い決定不能性）

集合論の言語の理論 $T$ について、$T\cup\mathrm{ST}$ が無矛盾なら、または少なくとも $T\cup\Phi$ が無矛盾なら、$T$ の文のゲーデル数の集合 $\sharp T$ は再帰的でない。

**算術の理論 $\Delta_0$ から $T$ への帰着を作り、$\sharp T$ が再帰的でないことを示す。**

1. $\Delta=\mathrm{Cn}(T\cup\Phi)$、$\Delta_0=\pi^{-1}[\Delta]$ とおく。仮定より $\Delta$ は無矛盾なのでモデルを持つ。$\Delta_0$ は、$\Delta$ のモデルから取り出した算術の構造すべてで真な文の理論である。よって $\Delta_0$ は無矛盾で、$\Phi$ の選び方から $A_E$ を含む。定理35Cにより $\sharp \Delta_0$ は再帰的でない。
2. $\Delta_0$ の定義より、算術の文 $\sigma$ について $\sigma\in\Delta_0$ と $\sigma^\pi\in\Delta$ は同値である。補題37Eによれば、$\sharp \sigma$ から $\sharp (\sigma^\pi)$ を求める関数は再帰的なので、$\sharp \Delta_0\le_m\sharp \Delta$ である。
3. $\varphi$ を $\Phi$ の全要素の連言とする。演繹定理より、集合論の文 $\tau$ について $\tau\in\Delta$ と $(\varphi\to\tau)\in T$ は同値である。$\Phi$ が有限なので、一つの前件 $\varphi$ にまとめられる。$\sharp \tau$ から $\sharp (\varphi\to\tau)$ を求める関数は再帰的なので、$\sharp \Delta\le_m\sharp T$ である。
4. よって $\sharp T$ が再帰的なら $\sharp \Delta$ も $\sharp \Delta_0$ も再帰的となり、1 と矛盾する。

### 系37F・37G

**系37F。** 集合論の公理が判定可能で、$\mathrm{ST}$ が無矛盾なら、$\mathrm{ST}$ は不完全である。

1. 定理37Dを $T=\mathrm{ST}$ に適用すると、$\mathrm{ST}$ は決定不能である。
2. $\mathrm{ST}$ が完全だと仮定する。どんな文 $\tau$ に対しても、$\tau$ と $\lnot\tau$ の証明を並行して探せば、完全性により少なくとも一方が見つかり、無矛盾性により両方は見つからない。
3. よって $\tau$ が $\mathrm{ST}$ に属するか判定でき、1 と矛盾する。

**系37G。** 等号と二項述語一つを持つ言語で、妥当な文全体は決定不能である。$T=\mathrm{Cn}(\varnothing)$ とすれば、$T$ は妥当な文全体なので、無矛盾な $\Phi$ を使って定理37Dを適用できる。本文は無矛盾性を証明できるような $\Phi$ の具体的な構成を省略しており、この箇所を部分証明としている。

最後に、$\mathrm{ST}$ が無矛盾なら、この $\pi$ は標準自然数で真な文全体 $\mathrm{Th}\,\mathfrak{N}$ の翻訳にはならない。$\pi^{-1}[\mathrm{ST}]$ は計算可能な翻訳と $\mathrm{ST}$ の証明探索を使って枚挙できる。もし完全な $\mathrm{Th}\,\mathfrak{N}$ を含めば、無矛盾性により両者は一致するが、Section 3.5 により $\mathrm{Th}\,\mathfrak{N}$ は計算可能に枚挙できない。
