class memory:
    def __init__(self,name):
        self.sobriquet=name
        self.epithet=name.split()
        self.desc=''

    def memorize(self,index):
        for stuff in self.epithet:
            if index.compare(stuff):
                if self in index.pages[stuff]:
                    continue
            index.inscribe(stuff,self)
                    
    def echo(self,value,bool=True):
        if bool==True:self.desc=value
        elif bool==False:
            self.epithet+=value,
            self.sobriquet+=f" {value}"

class splQue:
    from collections import deque
    def __init__(self,size=0):
        self.orb=self.deque()
        self.size=size
    
    def enque(self,value):
        if value not in self.orb:
            self.orb+=value,
        if len(self.orb)>self.size and self.size>0:
            self.orb.popleft()
        
    def search(self,value):
        def swap(array,i):
            i=i
            for _ in range(len(array)-i):
                if i+1!=len(array):
                    array[i],array[i+1]=array[i+1],array[i]
                    i=i+1
                else:break
        for i in range(len(self.orb)):
            if self.orb[i].sobriquet==value:
                swap(self.orb,i)
                return self.orb[-1]
                break
        

class thesaurus:
    def __init__(self,):
        self.pages=dict()
    
    def inscribe(self,key,value):
        if type(value)!=list:
            value=[value]
        if self.compare(key):
            self.pages[key]+=value
        else:
            self.pages[key]=value
    
    def crossout(self,key,bool=False,value=None):
        if bool==False:
            del self.pages[key]
        else:
            self.scout(key).remove(value)
            
    def scout(self,key):
        return self.pages[key]
    
    def encyclopedia(self,other):
        def enscrib(other):
            book=thesaurus()
            book.pages,other=other,book.pages
            return book
        if type(other)==dict:
            other=enscrib(other)
        [self.inscribe(key,other.scout(key)) for key in other.pages.keys()]
        other.pages.clear()
        return "Done"
    
    def compare(self,key):
        return key in self.pages
    
    def arrange(self):
        self.pages=dict(sorted(self.pages.items()))
        
class syllabary:
    def rewrite(self,other):
        #command[0] is a command,command[1] is key, command[2] in bool
        [commands[0](commands[1],commands[2]) for commands in other.search("command")]
        self.crossout("command")
        index.scrib("command",[])
        
    def rewrote(self,other,place=-1):
        other.search("command").pop(place)
        
