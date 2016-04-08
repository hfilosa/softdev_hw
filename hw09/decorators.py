import time

#Returns how long function took
def timetest(f):
    def inner(*args):
        start = time.time()
        result=f(args)
        print "Execution time: ",time.time()-start
        print result
    return inner

#Returns function name and arguments
#How can I get multiple arguments to print?
def logger(f):
    def inner(*args):
        print f.func_name,args
    return inner

#For testing
@timetest
@logger
def union(a,b):
    return a+ [x for x in b if x not in a]

a=[1,2,3,5,7]
b=[1,2,3,4,6]

print union(a,b)
