def union(a,b):
    return a+ [x for x in b if x not in a]

a=[1,2,3,5,7]
b=[1,2,3,4,6]

print union(a,b)
