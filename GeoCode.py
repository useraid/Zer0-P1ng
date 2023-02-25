#Program to Input Geo Location 

geo_lat = float(input("Enter you lattitude: "))
geo_lon = float(input("Enter your longitude: "))



import requests
r = requests.get('https://get.geojs.io/')
ip_request = requests.get('https://get.geojs.io/v1/ip.json')
ipAdd = ip_request.json()['ip']
print(ipAdd)
url = 'https://get.geojs.io/v1/ip/geo/'+ipAdd+'.json'
geo_req = requests.get(url)
geo_data = geo_req.json()
longitude_fetch = geo_data.get('longitude')
latitude_fetch = geo_data.get('latitude')
city_fetch = latitude_fetch = geo_data.get('City')

