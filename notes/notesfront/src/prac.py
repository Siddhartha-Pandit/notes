n = input("Enter the number: ")
l = {i:0 for i in range(10)}
for i in n:
    l[int(i)] += 1
newDict = {key:value for key,value in l.items() if value!=0}
print(newDict