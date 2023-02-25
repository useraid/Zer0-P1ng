from flask import Flask , jsonify
import requests
import math
app = Flask(__name__)
@app.route('/')
def hello_world():
    # geo_lat = float(input("Enter you lattitude: "))
    # geo_lon = float(input("Enter your longitude: "))
    r = requests.get('https://get.geojs.io/')
    ip_request = requests.get('https://get.geojs.io/v1/ip.json')
    ip = ip_request.json()['ip']
    print(ip)
    url = 'https://get.geojs.io/v1/ip/geo/'+ip+'.json'
    geo_req = requests.get(url)
    geo_data = geo_req.json()
    longitude_fetch = geo_data.get('longitude')
    latitude_fetch = geo_data.get('latitude')
    city_fetch = geo_data.get('city')
    print(longitude_fetch)
    print(latitude_fetch)
    print(city_fetch)
@app.route('/sum/<int:n>')
def sum(n):
    result = {
        "Number": n,
        "Prime": "no",
        "Mulitply": n*2
    }
    return jsonify(result)
@app.route('/DAC')
def func(latitude,longitude):
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
    list = {"dac":dac}
    return (list)