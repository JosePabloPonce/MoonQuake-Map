import requests
import json
import pandas as pd
import io

api_url = "http://service.iris.edu/irisws/fedcatalog/1/query?net=XA&starttime=1969-01-01&endtime=1977-12-31&format=text&includeoverlaps=true&nodata=404"
response = requests.get(api_url)
json = r.json()

