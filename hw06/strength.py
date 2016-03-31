UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMERALS="1234567890"
CHARACTERS=".?!&#,;:-_*"

def pass_strength( p ):
    ans = [1 if x in UC_LETTERS elif 2 if x in NUMERALS elif 3 if x in CHARACTERS else 0 for x in p)
    num=0
    for (x in ans):
        num+=x
    num/len(ans)
