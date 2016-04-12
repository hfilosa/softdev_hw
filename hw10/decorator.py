

import time

#Returns how long function took
def timetest(f):
    def inner(*args):
        start = time.time()
        result=f(*args)
        print "Execution time: ",time.time()-start
        print result
    return inner

#Returns function name and arguments
#How can I get multiple arguments to print?
def logger(f):
    def inner(*args):
        print f.func_name+": "+str(args)
        return f(*args)
    return inner
