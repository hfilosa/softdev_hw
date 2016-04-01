UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMERALS="1234567890"
CHARACTERS=".?!&#,;:-_*"

def pass_strength( p ):
    ans = [5 if x in UC_LETTERS else 7 if x in NUMERALS else 10 if x in CHARACTERS else 2 for x in p]
    num=0
    print ans
    for x in ans:
        num+=x
    return num/len(ans) 

print pass_strength("L3ATPass!")
