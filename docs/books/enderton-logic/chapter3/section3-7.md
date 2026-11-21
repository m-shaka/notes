---
sidebar_position: 7
---

# 3.7 Second Incompleteness Theorem

## Applications to Set Theory

### Enderton の方針

集合論の公理の論理的帰結全体を $\mathrm{ST}$ とする。$\mathrm{Cn}\,A_E$ の $\mathrm{ST}$ への翻訳 $\pi$ を構成し、定理35Cの算術の決定不能性を集合論へ移す。定理37Dではさらに、翻訳を保証する有限集合 $\Phi\subseteq\mathrm{ST}$ と両立する理論 $T$ についても、$\sharp T$ が再帰的でないことを示す。

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

| 算術での役割 | 集合論の式       | 式が表す条件     |
| ------------ | ---------------- | ---------------- |
| 量化の範囲   | $\pi_\forall(x)$ | $x\in\omega$     |
| 定数 $0$     | $\pi_0(e)$       | $e=\varnothing$  |
| 後続関数 $S$ | $\pi_S(x,y)$     | $y=x\cup\{x\}$   |
| 順序 $<$     | $\pi_<(x,y)$     | $x\in y$         |
| 加法 $+$     | $\pi_+(a,b,c)$   | $a,b$ の和は $c$ |

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

<details>
<summary>補足・構造 $\pi\mathcal B$ と理論 $\pi^{-1}[T_1]$</summary>

:::definition[翻訳から定まる構造]

$\pi$ を言語 $L_0$ の理論 $T_1$ への翻訳とし、$\mathcal B$ を $T_1$ のモデルとする。$\mathcal B$ の台集合を $|\mathcal B|$ と書く。$L_0$ の構造 $\pi\mathcal B$ を次のように定める。

- **台集合**は、$\mathcal B$ で $\pi_\forall$ を満たす元全体とする。
  $$
  |\pi\mathcal B|=\{a\in|\mathcal B|\mid \models_{\mathcal B}\pi_\forall[a]\}.
  $$
- **述語記号 $P$** は、その台集合の元について、$\mathcal B$ で $\pi_P$ を満たすとき、かつそのときに限り成り立つ関係とする。
- **関数記号 $f$** は、その台集合の入力 $a_1,\ldots,a_n$ に対して、$\models_{\mathcal B}\pi_f[a_1,\ldots,a_n,b]$ を満たす唯一の元 $b$ を値とする。定数は入力が0個の場合である。

翻訳の条件により、台集合は空でなく、各関数の値は台集合内に一意に定まる。したがって、$\pi$ と $\mathcal B$ を固定すれば $\pi\mathcal B$ は一意に定まる。今回の台集合は、$\mathcal B$ が「$\omega$ に属する」と判定する元全体である。

:::

:::definition[理論 $\pi^{-1}[T_1]$]

$\operatorname{Mod}T_1$ は $T_1$ のモデル全体、$\mathrm{Th}\,\mathcal K$ は構造の集まり $\mathcal K$ のどの構造でも真な文全体を表す。次のように定める。

$$
\pi^{-1}[T_1]
=\mathrm{Th}\{\pi\mathcal B\mid\mathcal B\in\operatorname{Mod}T_1\}.
$$

つまり、$T_1$ の各モデルから $\pi$ で得られるどの構造でも真な $L_0$ の文を集めた理論である。

:::

**補題27B**は、$L_0$ の論理式 $\alpha$ と、変数に $|\pi\mathcal B|$ の元を割り当てるどんな $s$ に対しても、次が成り立つことを述べる。

$$
\models_{\pi\mathcal B}\alpha[s]
\quad\Longleftrightarrow\quad
\models_{\mathcal B}\alpha^\pi[s].
$$

両辺で同じ $s$ を使う。$\alpha$ が文なら、その真偽は割り当てによらないので $[s]$ を省ける。これを $T_1$ の全モデルに適用すると、**系27C**により、文 $\alpha$ について次を得る。

$$
\alpha\in\pi^{-1}[T_1]\quad\Longleftrightarrow\quad\alpha^\pi\in T_1.
$$

</details>

1. $\sigma\in\mathrm{Cn}\,A_E$ を満たす文 $\sigma$ を任意にとる。$\sigma\in\pi^{-1}[\mathrm{ST}]$ を示すため、$\mathrm{ST}$ のモデル $\mathcal B$ を任意にとる。
2. (i)・(ii)より、$\pi$ は算術の言語の $\mathrm{ST}$ への翻訳なので、$\mathcal B$ から算術の構造 $\pi\mathcal B$ が定まる。
3. $\pi\mathcal B$ が $A_E$ のモデルであることを示す。
   1. 公理 $\alpha\in A_E$ を任意にとる。
   2. (iii)より $\alpha^\pi\in\mathrm{ST}$ なので、$\models_{\mathcal B}\alpha^\pi$ である。
   3. 補題27Bより、$\models_{\pi\mathcal B}\alpha$ である。$\alpha$ は任意だったので、$\pi\mathcal B$ は $A_E$ のモデルである。
4. $\sigma\in\mathrm{Cn}\,A_E$ は、$A_E$ のどのモデルでも $\sigma$ が真であることを意味する。よって3より、$\models_{\pi\mathcal B}\sigma$ である。
5. $\mathcal B$ は任意だったので、$\sigma$ は、$\mathrm{ST}$ のモデルから $\pi$ で得られるどの構造でも真である。これは $\pi^{-1}[\mathrm{ST}]$ の定義より、$\sigma\in\pi^{-1}[\mathrm{ST}]$ を意味する。
6. $\sigma$ は任意だったので、$\mathrm{Cn}\,A_E\subseteq\pi^{-1}[\mathrm{ST}]$ である。したがって、$\pi$ は $\mathrm{Cn}\,A_E$ の $\mathrm{ST}$ への翻訳である。

(i)・(ii)・(iii)を表す文は合計17個である。それらをすべて導けるような有限集合 $\Phi\subseteq\mathrm{ST}$ をとる。たとえば17個の文自体を集めればよい。同じ議論を $\mathrm{ST}$ の代わりに $\mathrm{Cn}\,\Phi$ に適用すると、$\pi$ は $\mathrm{Cn}\,A_E$ の $\mathrm{Cn}\,\Phi$ への翻訳でもある。

### 定理37D（集合論の強い決定不能性）

> 集合論の言語の理論 $T$ について、$T\cup\mathrm{ST}$ が無矛盾なら、または少なくとも $T\cup\Phi$ が無矛盾なら、$T$ の文のゲーデル数の集合 $\sharp T$ は再帰的でない。

<details>
<summary>多対一帰着</summary>

:::definition[多対一帰着（Many-one Reducibility）]

集合 $A,B\subseteq\mathbb N$ について、どんな $n\in\mathbb N$ に対しても

$$
n\in A\quad\Longleftrightarrow\quad f(n)\in B
$$

を満たす全域再帰的関数 $f:\mathbb N\to\mathbb N$ が存在するとき、$A\le_m B$ と書き、**「$A$ は $B$ に多対一帰着可能」**と読む。添え字 $m$ は many-one を表す。

$A$ への所属を調べる入力 $n$ を $f(n)$ に変換し、$B$ への所属判定に渡せるという関係である。異なる入力を同じ出力に送ることも許される。したがって、$A\le_m B$ で $B$ が再帰的なら $A$ も再帰的である。その対偶として、$A$ が再帰的でなければ $B$ も再帰的でない。

:::

</details>

**算術の理論 $\Delta_0$ から $T$ への帰着を作り、$\sharp T$ が再帰的でないことを示す。**

1. **無矛盾な算術の理論 $\Delta_0$ を作る。** $\Delta=\mathrm{Cn}(T\cup\Phi)$、$\Delta_0=\pi^{-1}[\Delta]$ とおく。仮定より $T\cup\Phi$ は無矛盾なのでモデル $\mathcal B$ を持ち、$\mathcal B$ はその帰結全体 $\Delta$ も満たす。$\mathrm{Cn}\,\Phi\subseteq\Delta$ より、$\pi$ で算術の構造 $\pi\mathcal B$ を作れる。これは $\Delta_0$ のモデルなので、$\Delta_0$ も無矛盾である。
2. **定理35Cを適用する。** どんな公理 $\alpha\in A_E$ に対しても、$\Phi$ の選び方から $\alpha^\pi\in\mathrm{Cn}\,\Phi\subseteq\Delta$ である。系27Cより $\alpha\in\Delta_0$ なので、$A_E\subseteq\Delta_0$ である。よって定理35Cより、$\sharp\Delta_0$ は再帰的でない。
3. **$\sharp\Delta_0\le_m\sharp\Delta$ を示す。** 系27Cより、算術の文 $\sigma$ について
   $$
   \sigma\in\Delta_0\quad\Longleftrightarrow\quad\sigma^\pi\in\Delta
   $$
   が成り立つ。補題37Eより $\sharp\sigma$ から $\sharp(\sigma^\pi)$ を再帰的に計算できるので、この帰着が得られる。したがって、$\sharp\Delta$ を判定できれば $\sharp\Delta_0$ も判定できてしまう。2 より、$\sharp\Delta$ は再帰的でない。
4. **$\sharp\Delta\le_m\sharp T$ を示す。** $\varphi$ を有限集合 $\Phi$ の全要素の連言とする。集合論の文 $\tau$ について、演繹定理より
   $$
   \tau\in\Delta
   \quad\Longleftrightarrow\quad
   T\vdash(\varphi\to\tau)
   \quad\Longleftrightarrow\quad
   (\varphi\to\tau)\in T
   $$
   が成り立つ。最後の同値には $T$ が理論であることを使う。固定された $\varphi$ を使って $\sharp\tau$ から $\sharp(\varphi\to\tau)$ を再帰的に計算できるので、この帰着が得られる。
5. **$\sharp T$ が再帰的でないことを結論する。** 仮に $\sharp T$ が再帰的なら、4 の帰着により $\sharp\Delta$ も再帰的となり、3 と矛盾する。

<details>
<summary>帰着関数への入力が文のゲーデル数でない場合</summary>

文のゲーデル数かどうかは再帰的に判定できる。それ以外の入力を、帰着先の理論に属さない文のゲーデル数に送れば、上の変換を自然数全体に拡張できる。$\Delta$ と $T$ は無矛盾なので、どちらの帰着でも $\lnot\forall x(x=x)$ のゲーデル数を使える。

</details>

### 系37F

> 集合論の公理が判定可能で、$\mathrm{ST}$ が無矛盾なら、$\mathrm{ST}$ は不完全である。

1. 定理37Dを $T=\mathrm{ST}$ に適用すると、$\mathrm{ST}$ は決定不能である。
2. $\mathrm{ST}$ が完全だと仮定する。どんな文 $\tau$ に対しても、$\tau$ と $\lnot\tau$ の証明を並行して探せば、完全性により少なくとも一方が見つかり、無矛盾性により両方は見つからない。
3. よって $\tau$ が $\mathrm{ST}$ に属するか判定でき、1 と矛盾する。

### 系37G

> 等号と二項述語一つを持つ言語で、恒真な文全体は決定不能である。

$T=\mathrm{Cn}(\varnothing)$ とすれば、$T$ は恒真な文全体なので、無矛盾な $\Phi$ を使って定理37Dを適用できる。本文は無矛盾性を証明できるような $\Phi$ の具体的な構成を省略しており、この箇所を部分証明としている。

最後に、$\mathrm{ST}$ が無矛盾なら、この $\pi$ は標準自然数で真な文全体 $\mathrm{Th}\,\mathfrak{N}$ の翻訳にはならない。$\pi^{-1}[\mathrm{ST}]$ は計算可能な翻訳と $\mathrm{ST}$ の証明探索を使って枚挙できる。もし完全な $\mathrm{Th}\,\mathfrak{N}$ を含めば、無矛盾性により両者は一致するが、Section 3.5 により $\mathrm{Th}\,\mathfrak{N}$ は計算可能に枚挙できない。

## Gödel’s Second Incompleteness Theorem for Set Theory

算術の文 $\sigma$ で、その翻訳 $\sigma^\pi$ が「$\sigma^\pi$ の $\mathrm{ST}$ における証明は存在しない」と述べるようにする。まず $\mathrm{ST}$ が無矛盾なら $\sigma^\pi$ を証明できないことを示し、次にその議論を $\mathrm{ST}$ の内部で形式化して、第二不完全性定理を得る。

### 証明の符号化と自己言及

:::definition[証明を表す関係 $D$]

自然数上の三項関係 $D$ を、次の条件で定める。

$$
\langle a,b,c\rangle\in D
\quad\Longleftrightarrow\quad
\begin{gathered}
a\text{ は算術の論理式 }\alpha(v_1)\text{ のゲーデル数であり、}\\
c\text{ は }\mathrm{ST}\text{ の公理から }(\alpha(S^b0))^\pi
\text{ を導く証明のゲーデル数である。}
\end{gathered}
$$

:::

$a$ で式を指定し、その自由変数に $b$ のnumeralを代入してから $\pi$ で翻訳する。$c$ は、その翻訳された文の証明を指定する。式への代入と翻訳は再帰的に実行でき、$\mathrm{ST}$ の公理は再帰的なので証明候補も検査できる。したがって $D$ は再帰的であり、$\mathrm{Cn}\,A_E$ で $D$ を表現する式 $\delta(v_1,v_2,v_3)$ が存在する。

次の式のゲーデル数を $r$ とし、その自由変数 $v_1$ に $r$ のnumeral $S^r0$ を代入した文を $\sigma$ とする。

$$
\begin{aligned}
r&=\sharp\bigl(\forall v_3\,\lnot\delta(v_1,v_1,v_3)\bigr),\\
\sigma&=\forall v_3\,\lnot\delta(S^r0,S^r0,v_3).
\end{aligned}
$$

$D$ の第1引数に $r$ を入れると、代入される側の式が指定される。第2引数にも $r$ を入れると、その式から $\sigma$ が得られる。したがって $\langle r,r,c\rangle\in D$ は「$c$ が $\sigma^\pi$ の $\mathrm{ST}$ における証明のゲーデル数である」を意味する。$\sigma$ は、どんな自然数 $c$ に対してもその条件が成り立たない、と述べる算術の文である。

### 補題37H

> $\mathrm{ST}$ が無矛盾なら、$\sigma^\pi\notin\mathrm{ST}$ である。

**対偶「$\sigma^\pi\in\mathrm{ST}$ なら $\mathrm{ST}$ は矛盾する」を示す。**

1. $\sigma^\pi\in\mathrm{ST}$ と仮定し、その証明のゲーデル数を $k$ とする。
2. $D$ の定義より $\langle r,r,k\rangle\in D$ である。$\delta$ は $D$ を表現するので、$A_E\vdash\delta(S^r0,S^r0,S^k0)$ である。
3. よって $A_E\vdash\exists v_3\,\delta(S^r0,S^r0,v_3)$ である。$\sigma$ の定義から、これは $A_E\vdash\lnot\sigma$ を意味する。
4. $\pi$ は $\mathrm{Cn}\,A_E$ の $\mathrm{ST}$ への翻訳なので、$(\lnot\sigma)^\pi=\lnot(\sigma^\pi)\in\mathrm{ST}$ である。
5. 仮定と4より、$\sigma^\pi$ とその否定がともに $\mathrm{ST}$ に属する。したがって $\mathrm{ST}$ は矛盾する。これで対偶が示された。

### 補題の証明を集合論の内部で形式化する

$\operatorname{Cons}(\mathrm{ST})$ を、$\mathrm{ST}$ の無矛盾性を集合論の言語で形式化した文とする。証明を自然数で符号化し、「矛盾を導く証明のゲーデル数が存在しない」と述べる。

補題37Hの証明は、$\sigma^\pi$ の証明のゲーデル数があれば、その証明から $\lnot(\sigma^\pi)$ の証明を作れて矛盾する、という議論だった。この証明の操作を $\mathrm{ST}$ 内で形式化し、「$\sigma^\pi$ の証明は存在しない」という結論を $\sigma^\pi$ 自身で表せるようにすると、次を得る。

$$
\mathrm{ST}\vdash
\bigl(\operatorname{Cons}(\mathrm{ST})\to\sigma^\pi\bigr).
$$

本文は、この形式化が可能であるという説明を与え、証明操作の符号化や、それを $\mathrm{ST}$ 内で正当化する詳細は省略している。

### 集合論に対する第二不完全性定理

> $\mathrm{ST}$ が無矛盾なら、$\operatorname{Cons}(\mathrm{ST})\notin\mathrm{ST}$ である。

**内部で形式化した含意と補題37Hを使って示す。**

1. $\mathrm{ST}$ が無矛盾と仮定する。
2. $\operatorname{Cons}(\mathrm{ST})\in\mathrm{ST}$ と仮定する。$(\operatorname{Cons}(\mathrm{ST})\to\sigma^\pi)\in\mathrm{ST}$ なので、modus ponens により $\sigma^\pi\in\mathrm{ST}$ を得る。
3. これは補題37Hに反する。よって $\operatorname{Cons}(\mathrm{ST})\notin\mathrm{ST}$ である。

$\mathrm{ST}$ が矛盾していれば、どんな文も証明できるので $\operatorname{Cons}(\mathrm{ST})$ も証明できる。また、$\mathrm{ST}$ が無矛盾な場合、その部分理論からも $\operatorname{Cons}(\mathrm{ST})$ は証明できない。部分理論での証明は $\mathrm{ST}$ でも通るためである。
