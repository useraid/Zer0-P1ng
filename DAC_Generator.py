import math

DAC=[]

lat=30.3554#float(input("Latitude upto 6 decimals")
lon=76.3694#float(input("Longitude upto 6 decimals"))

if lat>90 or lat<-90 or lon>180 or lon<-180:
    print("The given coordinates are incorrect")
else:
    lat1=int(lat)
    lon1=int(lon)
    
    s3=str(int(((lat1*9)/100)))
    s2=str(int(((lat1*9)/10)%10))
    s1=str(int((lat1*9)%10))
    
    DAC.append(s1)
    DAC.append(s3)
    DAC.append(s2)
    
    s3=str(int(((lon1*5)/100)))
    s2=str(int(((lon1*5)/10)%10))
    s1=str(int((lon1*5)%10))
    
    DAC.append(s2)
    DAC.append(s1)
    DAC.append(s3)
    
    d=math.ceil((lat-lat1)*10000)
    d4=chr(65+(int(d/1000)))
    d3=chr(77-(int((d/100)%10)))
    d2=chr(77+(int((d/10)%10)))
    d1=chr(90-(int(d%10)))
    
    DAC.append(d1)
    DAC.append(d4)
    DAC.append(d3)
    DAC.append(d2)
    
    d=math.ceil((lon-lon1)*10000)
    d4=chr(65+(int(d/1000)))
    d3=chr(77-(int((d/100)%10)))
    d2=chr(77+(int((d/10)%10)))
    d1=chr(90-(int(d%10)))
    
    DAC.append(d1)
    DAC.append(d4)
    DAC.append(d3)
    DAC.append(d2)
    
def LTS(s):
 
    str1 = ""
 
    for ele in s:
        str1 += ele
 
    # return string
    return str1
    
dac=LTS(DAC)
    
print(DAC)
print(dac)

dac1=str(input("Enter the DAC address:"))

def STL(string):
    list1 = []
    list1[:0] = string
    return list1
    
    
g=STL(dac1)
m=0
for i in range(0,5):
    if ord(g[i])<48 or ord(g[i])>57:
        m=1
        break
    else:
        continue
def platlon(latitude,longitude):
    print(f"Latitude is {latitude}")
    print(f"Longitude is {longitude}")
if m==0:
    lat2=(int(g[1])*100)+(int(g[2])*10)+int(g[0])
    lon2=(int(g[5])*100)+(int(g[3])*10)+int(g[4])
    if lat2%9==0 or lon2%5==0:
        print("The address is real")
        #latt=(lat2/9) + ((ord(g[7])-65)*0.1) + ((77-ord(g[8]))*0.01) + ((ord(g[9])-77)*0.001) + ((90-ord(g[6]))*0.0001)
        #lonn=(lon2/5) + ((ord(g[11])-65)*0.1) + ((77-ord(g[12]))*0.01) + ((ord(g[13])-77)*0.001) + ((90-ord(g[10]))*0.0001)
        #platlon(latt,lonn)
        
    else:
        print("The given DAC is fake.")
else:
    print("The given DAC is fake.")

