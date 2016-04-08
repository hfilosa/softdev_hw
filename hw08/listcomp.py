def union(a,b):
    return a+ [x for x in b if x not in a]

def intersection(a,b):
    return [x for x in a if x in b]

def set_dif(a,b):
    return [x for x in a if x not in b]

def sym_dif(a,b):
    return union(set_dif(a,b),set_dif(b,a))

#Returns cartesian product of sets a&b
def cart(a,b):
    return [(x,y) for x in a for y in b]

a=[1,2,3,5,7]
b=[1,2,3,4,6]
colors=["red","yellow","blue"]

print union(a,b)
print intersection(a,b)
print set_dif(a,b)
print sym_dif(a,b)
print cart(a,colors)
