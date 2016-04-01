def inc(x):
    return x + 1

f = inc

print f(10)

def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

b=h(1)

print b

def f(x):
    def g(y):
        return x + y
    return g

print f(1)
print f(2)
print f(1)(3)
print f(2)(5)
print "halp"*2

def repeat(x):
    def repeat2(y):
        return x*y
    return repeat2
r1=repeat('liam')
        
print repeat("cool")(3)
print r1(3)
