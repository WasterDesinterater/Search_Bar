import json
from classes import thesaurus
def txtdict():
    with open('index_file.txt') as pages:
        scroll = pages.read()
    return json.loads(scroll)

def adddict(lexicon):
    values = open("index_file.txt", "w")
    values.write(f"{json.dumps(lexicon)}")
    values.close()

index=thesaurus()
pages=txtdict()
index.pages=pages
index.arrange()
print(index.pages)
adddict(pages)
