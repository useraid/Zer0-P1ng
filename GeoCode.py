#Program to Input Geo Location 
import requests
geo_lat = float(input("Enter you lattitude: "))
geo_lon = float(input("Enter your longitude: "))
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

